import React, { useState, useEffect } from "react";
import "@/styles/style.less";
import { Button } from "antd";
import Easing from '@/utils/easing';

export default function Circle() {
    const duration = 1000;
    const radius = 200;
    const center = { x: 250, y: 250 };
    const satrtAngle = 0;
    const endAngle = 2 * Math.PI;

    const handleExecute = () => {
        const canvas = document.querySelector('#circle');
        const ctx = canvas.getContext('2d');

        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        let prevAngle = satrtAngle;
        let nextAngle;
        let startTime;

        const step = (currentTime) => {
            !startTime && (startTime = currentTime);
            const timeElapsed = currentTime - startTime;
            let progress = Math.min(timeElapsed / duration, 1);
            progress = Easing.Cubic.In(progress);    // 加入了缓动函数

            const draw = () => {
                ctx.beginPath();
                nextAngle = satrtAngle + (endAngle - satrtAngle) * progress;
                ctx.arc(center.x, center.y, radius, prevAngle, nextAngle, false);
                ctx.strokeStyle = `rgba(${81 + 171 * Math.abs(1 - progress * 2)}, ${160 - 160 * Math.abs(1 - progress * 2)}, ${255},1)`;
                ctx.stroke();
                prevAngle = nextAngle;
            };

            draw();

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    };

    return (
        <div>
            <p className='info'>圆</p>
            <Button onClick={handleExecute}>执行</Button>
            <canvas id='circle' width='500' height='500'></canvas>
        </div>
    );
}