import React, { useState, useEffect } from "react";
import "@/styles/style.less";
import { Button } from "antd";

export default function LineCanvas1() {
    const startX = 100;
    const startY = 100;
    const endX = 700;
    const endY = 700;
    const duration = 2000; //期望动画持续的时间

    const handleExecute = () => {
        const canvas = document.querySelector('#line');
        // 获取canvas渲染上下文
        const ctx = canvas.getContext('2d');

        ctx.strokeStyle = 'rgba(81, 160, 255,1)';
        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';

        // 定义起点和终点的坐标
        let prevX = startX;
        let prevY = startY;
        let nextX;
        let nextY;
        let startTime; //第一桢执行的时间

        /*
        * 动画帧绘制方法.
        * currentTime是requestAnimation执行回调方法step时会传入的一个执行时的时间(由performance.now()获得).
        * */
        const step = (currentTime) => {
            // 第一帧绘制时记录下开始的时间
            !startTime && (startTime = currentTime);
            // 已经过去的时间(ms)
            const timeElapsed = currentTime - startTime;
            // 动画执行的进度 {0,1}
            const progress = Math.min(timeElapsed / duration, 1);

            const draw = () => {
                // 创建新的路径
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                // 计算这一帧中线段应该到达的坐标点,并且将prevX/Y更新为此值给下一帧使用.
                prevX = nextX = startX + (endX - startX) * progress;
                prevY = nextY = startY + (endY - startY) * progress;
                ctx.lineTo(nextX, nextY);
                ctx.strokeStyle = `rgba(${81}, ${160}, ${255},${0.25})`;
                // 把这一帧的路径绘制出来
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
            <p className='info'>多条路径</p>
            <Button onClick={handleExecute}>执行</Button>
            <canvas id='line' width='400' height='400'></canvas>
        </div>
    );
}