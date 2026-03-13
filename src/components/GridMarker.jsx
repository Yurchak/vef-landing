import React from 'react';

export function GridMarker({ className = '' }) {
    // Hidden per user request. Remove the early return below to re-enable GridMarkers across the site.
    return null;

    let points = "0,0 8,0 0,8"; // default top-left

    // Auto-detect corner based on positioning classes
    const isTop = /\btop-/.test(className);
    const isBottom = /\bbottom-/.test(className);
    const isLeft = /\bleft-/.test(className);
    const isRight = /\bright-/.test(className);

    if (isTop && isLeft) points = "0,0 8,0 0,8";
    else if (isTop && isRight) points = "0,0 8,0 8,8";
    else if (isBottom && isLeft) points = "0,0 0,8 8,8";
    else if (isBottom && isRight) points = "8,0 8,8 0,8";

    return (
        <div className={`absolute z-20 pointer-events-none ${className}`}>
            <svg
                width="8" height="8"
                viewBox="0 0 8 8"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current opacity-60"
            >
                {/* A right-angled triangle acting as an intersection gusset */}
                <polygon points={points} />
            </svg>
        </div>
    );
}
