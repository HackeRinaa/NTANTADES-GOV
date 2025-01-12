import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Canvas = ({ width, height }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

    const startDrawing = (e) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        setLastPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const currentPosition = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };

        ctx.beginPath();
        ctx.moveTo(lastPosition.x, lastPosition.y);
        ctx.lineTo(currentPosition.x, currentPosition.y);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
        setLastPosition(currentPosition);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseout', stopDrawing);
        };
    }, [isDrawing, lastPosition]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{ border: '1px solid black' }}
        />
    );
};

// Prop validation
Canvas.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default Canvas;