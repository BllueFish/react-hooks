import React, { useState, useEffect } from "react";
import "@/styles/style.less";
import { Button } from "antd";
import Easing from '@/utils/easing';

export default function Dashed() {
    const startX = 100;
    const startY = 100;
    const endX = 400;
    const endY = 400;
    const duration = 1000; //期望动画持续的时间

    const handleExecute = () => {
        let prevX = startX;
        let prevY = startY;
        let nextX;
        let nextY;
        let startTime; //第一桢执行的时间
        let count = 0;
        const canvas = document.querySelector('#dashed');
        const ctx = canvas.getContext('2d');

        const step = (currentTime) => {
            !startTime && (startTime = currentTime);
            const timeElapsed = currentTime - startTime;
            let progress = Math.min(timeElapsed / duration, 1);
            progress = Easing.Quadratic.In(progress);    // 加入了缓动函数

            const draw = () => {
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);

                prevX = nextX = startX + (endX - startX) * progress;
                prevY = nextY = startY + (endY - startY) * progress;

                if (count % 2 === 0) {
                    ctx.lineWidth = 20 * progress
                    ctx.strokeStyle = `rgba(${171 * (1 - progress) + 81}, ${160 * progress}, ${255},1)`;
                    ctx.lineTo(nextX, nextY);
                    ctx.stroke();
                }
            };

            draw();

            if (progress < 1) {
                count++
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    };

    return (
        <div>
            <p className='info'>虚线</p>
            <Button onClick={handleExecute}>执行</Button>
            <canvas id='dashed' width='500' height='500'></canvas>
        </div>
    );
}