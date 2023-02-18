import React from "react";

export default function Log({
    log,
    className = ''
}: {
    log: string,
    className?: string
}) {
    return (
        <div className={`${className}`}>
            <h2>Log</h2>
            <div className="text-start">
                <pre>{log}</pre>
            </div>
        </div>
    );
}