import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

const updateTime = 100;
const duration = 2000;

function Modal({ open, children, onClose }) {
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);
    const [progress, setProgress] = useState(100);
    const [paused, setPaused] = useState(false);

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);

    const clearTimers = useCallback(() => {
        clearTimeout(timeoutRef.current);
        clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (!open) {
            setProgress(100);
            clearTimers();
            return;
        }

        if (!paused) {
            let timeLeft = duration;
            setProgress((timeLeft / duration) * 100);

            timeoutRef.current = setTimeout(onClose, timeLeft);

            intervalRef.current = setInterval(() => {
                timeLeft -= updateTime;
                setProgress((timeLeft / duration) * 100);

                if (timeLeft <= 0) {
                    clearTimers();
                }
            }, updateTime);
        }

        return clearTimers;
    }, [open, onClose, paused, clearTimers]);

    return createPortal(
        <div
            className={`fixed top-24 right-0 ml-auto w-80 p-4 m-4 rounded-md shadow-lg bg-white transition-opacity duration-300 ${
                open ? 'block opacity-100' : 'hidden opacity-0'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex flex-col">
                <button onClick={onClose} className="self-end focus:outline-none mb-2">
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z" />
                    </svg>
                </button>
                <div className="flex justify-between">
                    {open ? children : null}
                </div>
                <div className="flex flex-col mt-4">
                    <progress max={100} value={progress} className="h-2 w-full rounded-full bg-gray-200 appearance-none">
                        <style>{`
                            progress::-webkit-progress-bar {
                                background-color: #e5e7eb;
                                border-radius: 0.5rem;
                            }
                            progress::-webkit-progress-value {
                                background-color: #3b82f6;
                                border-radius: 0.5rem;
                            }
                        `}</style>
                    </progress>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export default Modal;
