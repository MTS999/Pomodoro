import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
    const [time, setTime] = useState(1500); // 1500 seconds = 25 minutes
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, time]);

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3em', margin: '20px 0' }}>{formatTime()}</div>
            <button 
                onClick={handleStart} 
                style={{ fontSize: '1.2em', padding: '10px 20px', cursor: 'pointer', marginRight: '10px' }}>
                Start
            </button>
            <button 
                onClick={handleStop} 
                style={{ fontSize: '1.2em', padding: '10px 20px', cursor: 'pointer' }}>
                Stop
            </button>
        </div>
    );
};

export default PomodoroTimer;
