import React, { useRef, useEffect, useState, useCallback, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';
import mapModelUrl from '../assets/MAP-VEF-V5.glb?url';

// ─── BAKED-IN CONFIG ────────────────────────────────────────────────────────
const CAMERA_POSITION = [2.734, 1.039, 2.827];
const CAMERA_TARGET   = [1.387, -0.125, 0.583];
const CAMERA_FOV      = 34;
const HIDDEN_OBJECTS  = ['5', '6', '13', 'OTHER'];
const COLOR_OVERRIDES = {
    '10':                      { color: '#ffc905', opacity: 1 },
    'VEF_Kvartāla_Kamerzāle':  { color: '#24b6ff', opacity: 1 },
    'PROMENADE':               { color: '#ff7038', opacity: 1 },
    'VEF_Kvartāla_Kamerzāle001': { color: '#38ffbd', opacity: 1 },
};
// ────────────────────────────────────────────────────────────────────────────

const DEFAULT_LIGHTS = {
    ambientIntensity: 0.6,
    mainIntensity:    1.0,
    mainPos:          [10, 15, 10],
    fillIntensity:    0.3,
    fillPos:          [-5, 5, -5],
};

function CameraInitializer() {
    const { camera } = useThree();
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        camera.position.set(...CAMERA_POSITION);
        camera.fov = CAMERA_FOV;
        camera.updateProjectionMatrix();
        camera.lookAt(...CAMERA_TARGET);
        initialized.current = true;
    }, [camera]);

    return null;
}

function AutoRotate({ anchor }) {
    const { camera } = useThree();
    const azimuthRef = useRef(null);

    const radius = Math.sqrt(
        (CAMERA_POSITION[0] - anchor.x) ** 2 +
        (CAMERA_POSITION[2] - anchor.z) ** 2
    );
    const heightOffset = CAMERA_POSITION[1] - anchor.y;

    useFrame((_, delta) => {
        if (azimuthRef.current === null) {
            azimuthRef.current = Math.atan2(
                camera.position.x - anchor.x,
                camera.position.z - anchor.z
            );
        }

        azimuthRef.current += delta * 0.2;

        camera.position.set(
            anchor.x + radius * Math.sin(azimuthRef.current),
            anchor.y + heightOffset,
            anchor.z + radius * Math.cos(azimuthRef.current),
        );
        camera.lookAt(anchor.x, anchor.y, anchor.z);
    });

    return null;
}

function MapModel({ visibilityMap, colorMap, onObjectsDiscovered, onAnchorFound }) {
    const { scene } = useGLTF(mapModelUrl);
    const clonedMaterials = useRef({});

    useEffect(() => {
        const names = [];
        const temp = new Vector3();

        scene.traverse((child) => {
            if (child.isMesh && child.name) {
                names.push(child.name);
                if (child.name === '1') {
                    child.getWorldPosition(temp);
                    onAnchorFound({ x: temp.x, y: temp.y, z: temp.z });
                }
            }
        });
        onObjectsDiscovered(names);
    }, [scene, onObjectsDiscovered, onAnchorFound]);

    useEffect(() => {
        if (!visibilityMap) return;
        scene.traverse((child) => {
            if (child.isMesh && child.name in visibilityMap)
                child.visible = visibilityMap[child.name];
        });
    }, [scene, visibilityMap]);

    useEffect(() => {
        if (!colorMap) return;
        scene.traverse((child) => {
            if (!child.isMesh || !child.name) return;
            const override = colorMap[child.name];

            if (!clonedMaterials.current[child.uuid]) {
                child.material = child.material.clone();
                clonedMaterials.current[child.uuid] = true;
            }

            if (override) {
                child.material.color.set(override.color);
                child.material.transparent = override.opacity < 1;
                child.material.opacity = override.opacity;
            } else {
                child.material.color.set('#ffffff');
                child.material.transparent = false;
                child.material.opacity = 1;
            }
            child.material.needsUpdate = true;
        });
    }, [scene, colorMap]);

    return <primitive object={scene} />;
}

// ─── MAP LEGEND ──────────────────────────────────────────────────────────────
const LEGEND_ITEMS = [
    { label: 'VEF Mansards',  color: '#38ffbd' },
    { label: 'VEF Spīdola',   color: '#24b6ff' },
    { label: 'VEF Vasarnīca', color: '#ffc905' },
    { label: 'VEF Promenāde', color: '#ff7038' },
];

function MapLegend() {
    return (
        <div style={{
            position: 'absolute', top: 20, left: 20, right: 20, zIndex: 10,
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '8px 16px',
        }}>
            {LEGEND_ITEMS.map(({ label, color }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 1, background: color, flexShrink: 0 }} />
                    <span style={{
                        fontFamily: '"Clash Grotesk", sans-serif',
                        fontSize: 9, fontWeight: 400,
                        textTransform: 'uppercase', letterSpacing: '0.1em',
                        color: '#212529',
                    }}>{label}</span>
                </div>
            ))}
        </div>
    );
}

function MapLoadingFallback() {
    return (
        <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 12, color: 'var(--color-brand-text)', opacity: 0.4,
        }}>
            <div style={{
                width: 40, height: 40,
                border: '2px solid currentColor',
                borderTopColor: 'transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
            }} />
            <span style={{
                fontFamily: '"Clash Grotesk", sans-serif',
                fontSize: 10, fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.15em',
            }}>Ielādē karti</span>
            <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
        </div>
    );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function MapViewer3D() {
    const [anchor, setAnchor] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [visibilityMap, setVisibilityMap] = useState(() =>
        Object.fromEntries(HIDDEN_OBJECTS.map(n => [n, false]))
    );

    const [colorMap, setColorMap] = useState(() => ({ ...COLOR_OVERRIDES }));

    const handleObjectsDiscovered = useCallback((names) => {
        setIsLoaded(true);
        setVisibilityMap(prev => {
            const next = {};
            for (const name of names) next[name] = prev[name] ?? true;
            return next;
        });
        setColorMap(prev => {
            const next = {};
            for (const name of names) next[name] = COLOR_OVERRIDES[name] ?? prev[name] ?? null;
            return next;
        });
    }, []);

    const handleAnchorFound = useCallback((pos) => setAnchor(pos), []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {!isLoaded && <MapLoadingFallback />}
            <Canvas
                camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}
                style={{ width: '100%', height: '100%' }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={DEFAULT_LIGHTS.ambientIntensity} />
                <directionalLight position={DEFAULT_LIGHTS.mainPos} intensity={DEFAULT_LIGHTS.mainIntensity} />
                <directionalLight position={DEFAULT_LIGHTS.fillPos} intensity={DEFAULT_LIGHTS.fillIntensity} />

                <CameraInitializer />

                <Suspense fallback={null}>
                    <MapModel
                        visibilityMap={visibilityMap}
                        colorMap={colorMap}
                        onObjectsDiscovered={handleObjectsDiscovered}
                        onAnchorFound={handleAnchorFound}
                    />
                </Suspense>

                {anchor && <AutoRotate anchor={anchor} />}
            </Canvas>

            <MapLegend />
        </div>
    );
}
