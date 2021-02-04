import React, { useState, useEffect } from "react";
import "@/styles/style.less";
import { Button } from "antd";
import Easing from '@/utils/easing';

export default function LineCanvas2() {
    const startX = 100;
    const startY = 100;
    const endX = 700;
    const endY = 700;
    const duration = 2000; //期望动画持续的时间

    const handleExecute = () => {
        let nextX;
        let nextY;
        let startTime; //第一桢执行的时间
        const canvas = document.querySelector('#oneLine');
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.strokeStyle = `rgba(${81}, ${160}, ${255},${0.25})`;
        ctx.lineWidth = 4;

        const step = (currentTime) => {
            !startTime && (startTime = currentTime);
            const timeElapsed = currentTime - startTime;
            let progress = Math.min(timeElapsed / duration, 1);
            progress = Easing.Quadratic.In(progress);    // 加入了缓动函数

            const draw = () => {
                nextX = startX + (endX - startX) * progress;
                nextY = startY + (endY - startY) * progress;
                ctx.lineTo(nextX, nextY);
                ctx.stroke();
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
            <p className='info'>同一路径</p>
            <Button onClick={handleExecute}>执行</Button>
            <canvas id='oneLine' width='400' height='400'></canvas>
        </div>
    );
}