import React, { useRef, useEffect, useState, useCallback, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';
import mapModelUrl from '../assets/MAP-VEF-V5.glb?url';

// ─── BAKED-IN CONFIG ────────────────────────────────────────────────────────
const CAMERA_POSITION = [2.734, 1.039, 2.827];
const CAMERA_TARGET   = [1.387, -0.125, 0.583];
const CAMERA_FOV      = 40;
const HIDDEN_OBJECTS  = ['5', '6', '13', 'OTHER'];
const COLOR_OVERRIDES = {
    '10':                      { color: '#ffc905', opacity: 1 }, // VEF Vasarnīca
    'VEF_Kvartāla_Kamerzāle':  { color: '#24b6ff', opacity: 1 }, // VEF Spīdola
    'PROMENADE':               { color: '#ff7038', opacity: 1 }, // VEF Promenāde
    'VEF_Kvartāla_Kamerzāle001': { color: '#38ffbd', opacity: 1 }, // VEF Mansards
};
// ────────────────────────────────────────────────────────────────────────────

const DEV_CONTROLS   = false; // ← flip to true to re-open the debug panel
const LIGHT_CONTROLS = false; // ← flip to true to re-open the lighting panel
const COLOR_CONTROLS = false; // ← flip to true to re-open the color panel

const DEFAULT_LIGHTS = {
    ambientIntensity: 0.6,
    mainIntensity:    1.0,
    mainPos:          [10, 15, 10],
    fillIntensity:    0.3,
    fillPos:          [-5, 5, -5],
};

// Display name overrides for the debug panel (GLB mesh name → label)
const DISPLAY_NAMES = {
    '10': 'VASARNICA',
    'VEF_Kvartāla_Kamerzāle': 'SPIDOLA',
    'VEF_Kvartāla_Kamerzāle001': 'MANSARDS',
};

function CameraInitializer({ controlsRef }) {
    const { camera } = useThree();
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        camera.position.set(...CAMERA_POSITION);
        camera.fov = CAMERA_FOV;
        camera.updateProjectionMatrix();
        if (DEV_CONTROLS) {
            requestAnimationFrame(() => {
                if (controlsRef?.current) {
                    controlsRef.current.target.set(...CAMERA_TARGET);
                    controlsRef.current.update();
                }
            });
        } else {
            camera.lookAt(...CAMERA_TARGET);
        }
        initialized.current = true;
    }, [camera, controlsRef]);

    return null;
}

// Orbits the camera horizontally around `anchor` (world position of mesh "1"),
// preserving the initial elevation and radius.
function AutoRotate({ anchor }) {
    const { camera } = useThree();
    const azimuthRef = useRef(null);

    // Pre-compute radius and height offset from the anchor once
    const radius = Math.sqrt(
        (CAMERA_POSITION[0] - anchor.x) ** 2 +
        (CAMERA_POSITION[2] - anchor.z) ** 2
    );
    const heightOffset = CAMERA_POSITION[1] - anchor.y;

    useFrame((_, delta) => {
        // Seed the starting angle from the baked camera position so rotation
        // begins smoothly without any jump
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

// ─── LIGHTING PANEL ──────────────────────────────────────────────────────────
function LightingPanel({ lights, onChange }) {
    const [copied, setCopied] = useState(false);

    const row = (label, field, min, max, step = 0.05) => (
        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 36px', gap: 6, alignItems: 'center', padding: '2px 0' }}>
            <span style={{ color: '#aaa' }}>{label}</span>
            <input type="range" min={min} max={max} step={step}
                value={lights[field]}
                onChange={e => onChange({ ...lights, [field]: +e.target.value })}
                style={{ accentColor: '#f76b34', cursor: 'pointer' }} />
            <span style={{ textAlign: 'right', color: '#888' }}>{lights[field].toFixed(2)}</span>
        </div>
    );

    const posRow = (label, field, axis, idx, min, max) => (
        <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 36px', gap: 6, alignItems: 'center', padding: '2px 0' }}>
            <span style={{ color: '#aaa' }}>{label} {axis}</span>
            <input type="range" min={min} max={max} step={0.5}
                value={lights[field][idx]}
                onChange={e => {
                    const next = [...lights[field]];
                    next[idx] = +e.target.value;
                    onChange({ ...lights, [field]: next });
                }}
                style={{ accentColor: '#f76b34', cursor: 'pointer' }} />
            <span style={{ textAlign: 'right', color: '#888' }}>{lights[field][idx].toFixed(1)}</span>
        </div>
    );

    const handleCopy = () => {
        const code =
`// ─── LIGHTING CONFIG ──────────────────────────────────────
ambientIntensity: ${lights.ambientIntensity},
mainIntensity:    ${lights.mainIntensity},
mainPos:          [${lights.mainPos.join(', ')}],
fillIntensity:    ${lights.fillIntensity},
fillPos:          [${lights.fillPos.join(', ')}],
// ──────────────────────────────────────────────────────────`;
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div style={{
            position: 'absolute', top: 12, left: 12, zIndex: 10,
            background: 'rgba(10,10,10,0.88)', color: '#e0e0e0',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            borderRadius: 8, padding: '12px 14px', minWidth: 290,
            backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.1)',
        }}>
            <div style={{ color: '#f76b34', fontWeight: 700, fontSize: 10, letterSpacing: 1, marginBottom: 8 }}>LIGHTING</div>
            {row('ambient', 'ambientIntensity', 0, 3)}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '6px 0' }} />
            {row('main intensity', 'mainIntensity', 0, 4)}
            {posRow('main pos', 'mainPos', 'X', 0, -20, 20)}
            {posRow('main pos', 'mainPos', 'Y', 1, 0, 30)}
            {posRow('main pos', 'mainPos', 'Z', 2, -20, 20)}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '6px 0' }} />
            {row('fill intensity', 'fillIntensity', 0, 2)}
            {posRow('fill pos', 'fillPos', 'X', 0, -20, 20)}
            {posRow('fill pos', 'fillPos', 'Y', 1, 0, 30)}
            {posRow('fill pos', 'fillPos', 'Z', 2, -20, 20)}
            <button onClick={handleCopy} style={{
                width: '100%', padding: '5px 0', marginTop: 10,
                background: copied ? '#2e7d32' : '#f76b34',
                color: '#fff', border: 'none', borderRadius: 4,
                cursor: 'pointer', fontFamily: 'inherit', fontSize: 11,
                transition: 'background 0.2s',
            }}>
                {copied ? '✓ copied!' : 'copy config'}
            </button>
        </div>
    );
}

// ─── COLOR PANEL ─────────────────────────────────────────────────────────────
function ColorPanel({ objectNames, visibilityMap, colorMap, onToggle, onColorChange }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const entries = Object.entries(colorMap)
            .filter(([, v]) => v !== null)
            .map(([k, v]) => `    '${k}': { color: '${v.color}', opacity: ${v.opacity} }`);
        const code =
`const COLOR_OVERRIDES = {\n${entries.join(',\n')},\n};`;
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div style={{
            position: 'absolute', top: 12, right: 12, zIndex: 10,
            background: 'rgba(10,10,10,0.88)', color: '#e0e0e0',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            borderRadius: 8, padding: '12px 14px', minWidth: 310,
            backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.1)',
            maxHeight: '90vh', overflowY: 'auto',
        }}>
            <div style={{ color: '#f76b34', fontWeight: 700, fontSize: 10, letterSpacing: 1, marginBottom: 8 }}>
                OBJECT COLORS ({objectNames.length})
            </div>

            {objectNames.length === 0 && (
                <div style={{ color: '#888', fontStyle: 'italic' }}>loading…</div>
            )}

            {objectNames.map(name => {
                const visible = visibilityMap[name] ?? true;
                const override = colorMap[name];
                const hex     = override?.color   ?? '#ffffff';
                const opacity = override?.opacity ?? 1;

                return (
                    <div key={name} style={{
                        display: 'grid',
                        gridTemplateColumns: '16px 1fr 24px 80px 36px',
                        gap: 6, alignItems: 'center', padding: '3px 0',
                        color: visible ? '#e0e0e0' : '#555',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}>
                        <input type="checkbox" checked={visible} onChange={() => onToggle(name)}
                            style={{ accentColor: '#f76b34', cursor: 'pointer', margin: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={name}>
                            {DISPLAY_NAMES[name] ?? name}
                        </span>
                        <input type="color" value={hex}
                            onChange={e => onColorChange(name, { color: e.target.value, opacity })}
                            style={{ width: 22, height: 18, padding: 0, border: 'none', borderRadius: 3, cursor: 'pointer', background: 'none' }} />
                        <input type="range" min={0} max={100} step={5}
                            value={Math.round(opacity * 100)}
                            onChange={e => onColorChange(name, { color: hex, opacity: e.target.value / 100 })}
                            style={{ width: '100%', accentColor: '#f76b34', cursor: 'pointer' }} />
                        <span style={{ textAlign: 'right', color: '#888' }}>{Math.round(opacity * 100)}%</span>
                    </div>
                );
            })}

            <button onClick={handleCopy} style={{
                width: '100%', padding: '5px 0', marginTop: 10,
                background: copied ? '#2e7d32' : '#f76b34',
                color: '#fff', border: 'none', borderRadius: 4,
                cursor: 'pointer', fontFamily: 'inherit', fontSize: 11,
                transition: 'background 0.2s',
            }}>
                {copied ? '✓ copied!' : 'copy config'}
            </button>
        </div>
    );
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

function Fallback() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#333" wireframe />
        </mesh>
    );
}

// Reads live camera state from OrbitControls and reports it up
function CameraStateReporter({ controlsRef, onUpdate }) {
    const { camera } = useThree();
    useFrame(() => {
        if (!controlsRef?.current) return;
        onUpdate({
            position: camera.position.toArray().map(v => +v.toFixed(3)),
            target: controlsRef.current.target.toArray().map(v => +v.toFixed(3)),
            fov: +camera.fov.toFixed(1),
        });
    });
    return null;
}

// ─── DEBUG PANEL ─────────────────────────────────────────────────────────────
function DebugPanel({ cameraState, objectNames, visibilityMap, colorMap, onToggle, onColorChange }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const hiddenList = Object.entries(visibilityMap)
            .filter(([, v]) => !v)
            .map(([k]) => `'${k}'`);

        const colorEntries = Object.entries(colorMap)
            .filter(([, v]) => v !== null)
            .map(([k, v]) => `    '${k}': { color: '${v.color}', opacity: ${v.opacity} }`);

        const code =
`// ─── BAKED-IN CONFIG ─────────────────────────────────────
const CAMERA_POSITION = [${cameraState.position.join(', ')}];
const CAMERA_TARGET   = [${cameraState.target.join(', ')}];
const CAMERA_FOV      = ${cameraState.fov};
const HIDDEN_OBJECTS  = [${hiddenList.join(', ')}];
const COLOR_OVERRIDES = {
${colorEntries.join(',\n')},
};
// ─────────────────────────────────────────────────────────`;

        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div style={{
            position: 'absolute', top: 12, right: 12, zIndex: 10,
            background: 'rgba(10,10,10,0.88)', color: '#e0e0e0',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            borderRadius: 8, padding: '12px 14px', minWidth: 300,
            backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.1)',
            maxHeight: '90%', overflowY: 'auto',
        }}>
            <div style={{ marginBottom: 10 }}>
                <div style={{ color: '#f76b34', fontWeight: 700, marginBottom: 6, fontSize: 10, letterSpacing: 1 }}>
                    CAMERA
                </div>
                <div>pos&nbsp;&nbsp;[{cameraState.position.join(', ')}]</div>
                <div>target [{cameraState.target.join(', ')}]</div>
                <div>fov&nbsp;&nbsp;{cameraState.fov}</div>
            </div>

            <button onClick={handleCopy} style={{
                width: '100%', padding: '5px 0', marginBottom: 12,
                background: copied ? '#2e7d32' : '#f76b34',
                color: '#fff', border: 'none', borderRadius: 4,
                cursor: 'pointer', fontFamily: 'inherit', fontSize: 11,
                transition: 'background 0.2s',
            }}>
                {copied ? '✓ copied!' : 'copy config'}
            </button>

            <div style={{
                color: '#f76b34', fontWeight: 700, fontSize: 10, letterSpacing: 1,
                display: 'grid', gridTemplateColumns: '16px 1fr 24px 80px 36px',
                gap: 6, alignItems: 'center', marginBottom: 4,
            }}>
                <span />
                <span>OBJECTS ({objectNames.length})</span>
                <span style={{ textAlign: 'center' }}>col</span>
                <span style={{ textAlign: 'center' }}>opacity</span>
                <span style={{ textAlign: 'right' }}>%</span>
            </div>

            {objectNames.length === 0 && (
                <div style={{ color: '#888', fontStyle: 'italic' }}>loading…</div>
            )}

            {objectNames.map(name => {
                const visible  = visibilityMap[name] ?? true;
                const override = colorMap[name];
                const hex      = override?.color   ?? '#ffffff';
                const opacity  = override?.opacity ?? 1;

                return (
                    <div key={name} style={{
                        display: 'grid',
                        gridTemplateColumns: '16px 1fr 24px 80px 36px',
                        gap: 6, alignItems: 'center', padding: '2px 0',
                        color: visible ? '#e0e0e0' : '#555',
                    }}>
                        <input type="checkbox" checked={visible} onChange={() => onToggle(name)}
                            style={{ accentColor: '#f76b34', cursor: 'pointer', margin: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={name}>
                            {DISPLAY_NAMES[name] ?? name}
                        </span>
                        <input type="color" value={hex}
                            onChange={e => onColorChange(name, { color: e.target.value, opacity })}
                            style={{ width: 22, height: 18, padding: 0, border: 'none', borderRadius: 3, cursor: 'pointer', background: 'none' }}
                            title="Pick color" />
                        <input type="range" min={0} max={100} step={5}
                            value={Math.round(opacity * 100)}
                            onChange={e => onColorChange(name, { color: hex, opacity: e.target.value / 100 })}
                            style={{ width: '100%', accentColor: '#f76b34', cursor: 'pointer' }} />
                        <span style={{ textAlign: 'right', color: '#888' }}>{Math.round(opacity * 100)}</span>
                    </div>
                );
            })}
        </div>
    );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function MapViewer3D() {
    const controlsRef = useRef();

    const [cameraState, setCameraState] = useState({
        position: CAMERA_POSITION,
        target: CAMERA_TARGET,
        fov: CAMERA_FOV,
    });

    const [objectNames, setObjectNames] = useState([]);
    const [anchor, setAnchor] = useState(null);
    const [lights, setLights] = useState(DEFAULT_LIGHTS);

    const [visibilityMap, setVisibilityMap] = useState(() =>
        Object.fromEntries(HIDDEN_OBJECTS.map(n => [n, false]))
    );

    const [colorMap, setColorMap] = useState(() => ({ ...COLOR_OVERRIDES }));

    const handleObjectsDiscovered = useCallback((names) => {
        setObjectNames(names);
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
    const handleToggle      = useCallback((name) => setVisibilityMap(prev => ({ ...prev, [name]: !prev[name] })), []);
    const handleColorChange = useCallback((name, value) => setColorMap(prev => ({ ...prev, [name]: value })), []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Canvas
                camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}
                style={{ width: '100%', height: '100%' }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={lights.ambientIntensity} />
                <directionalLight position={lights.mainPos} intensity={lights.mainIntensity} />
                <directionalLight position={lights.fillPos} intensity={lights.fillIntensity} />

                <CameraInitializer controlsRef={controlsRef} />

                <Suspense fallback={<Fallback />}>
                    <MapModel
                        visibilityMap={visibilityMap}
                        colorMap={colorMap}
                        onObjectsDiscovered={handleObjectsDiscovered}
                        onAnchorFound={handleAnchorFound}
                    />
                </Suspense>

                {/* Orbit around mesh "1" once it's located */}
                {!DEV_CONTROLS && anchor && <AutoRotate anchor={anchor} />}

                {DEV_CONTROLS && (
                    <OrbitControls
                        ref={controlsRef}
                        enablePan={true}
                        enableZoom={true}
                        minDistance={2}
                        maxDistance={18}
                        minPolarAngle={Math.PI / 6}
                        maxPolarAngle={Math.PI / 2.5}
                    />
                )}

                {DEV_CONTROLS && (
                    <CameraStateReporter
                        controlsRef={controlsRef}
                        onUpdate={setCameraState}
                    />
                )}
            </Canvas>

            <MapLegend />

            {LIGHT_CONTROLS && (
                <LightingPanel lights={lights} onChange={setLights} />
            )}

            {COLOR_CONTROLS && (
                <ColorPanel
                    objectNames={objectNames}
                    visibilityMap={visibilityMap}
                    colorMap={colorMap}
                    onToggle={handleToggle}
                    onColorChange={handleColorChange}
                />
            )}

            {DEV_CONTROLS && (
                <DebugPanel
                    cameraState={cameraState}
                    objectNames={objectNames}
                    visibilityMap={visibilityMap}
                    colorMap={colorMap}
                    onToggle={handleToggle}
                    onColorChange={handleColorChange}
                />
            )}
        </div>
    );
}
