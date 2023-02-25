import React from "react";
import styles from "./styles/Log.module.css";

export default function Log({
    log,
    className = ''
}: {
    log: string,
    className?: string
}) {
    return (
        <div className={`${className} ${styles.mainDiv}`}>
            <h2>Log</h2>
            <div className={`text-start ${styles.logContainer}`}>
                <pre
                className={styles.logPre}
                >{log}</pre>
            </div>
        </div>
    );
}