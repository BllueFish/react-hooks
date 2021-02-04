import React, { useState, useEffect } from "react";
import "@/styles/style.less";
import { Button } from "antd";
import Easing from '@/utils/easing';

export default function PolyLine() {
    const duration = 1000;
    // 顺序定义折线上各个转折点的坐标
    const keyPoints = [
        { x: 50, y: 100 },
        { x: 250, y: 100 },
        { x: 50, y: 300 },
        { x: 250, y: 300 },
        { x: 50, y: 100 }
    ];

    const handleExecute = () => {
        const canvas = document.querySelector('#polyLine');
        const ctx = canvas.getContext('2d');

        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        let prevX = keyPoints[0].x;
        let prevY = keyPoints[0].y;
        let nextX;
        let nextY;
        let startTime;

        // 动画被切分成若干段,每一段所占总进度的比例
        const partProportion = 1 / (keyPoints.length - 1);
        // 缓存绘制第n段线段的n值,为了在进行下一段绘制前把这一段线段的末尾补齐
        let lineIndexCache = 1;

        const step = (currentTime) => {
            !startTime && (startTime = currentTime);
            const timeElapsed = currentTime - startTime;
            let progress = Math.min(timeElapsed / duration, 1);
            progress = Easing.Quadratic.In(progress);    // 加入了缓动函数

            // 描述当前所绘制的是第几段线段
            const lineIndex = Math.min(Math.floor(progress / partProportion) + 1, keyPoints.length - 1);
            //  当前线段的进度 {0,1}
            const partProgress = (progress - (lineIndex - 1) * partProportion) / partProportion;

            const draw = () => {
                ctx.strokeStyle = `rgba(${81 + 175 * Math.abs(1 - progress * 2)}, ${160 - 160 * Math.abs(progress * 2 - 1)}, ${255},${1})`;
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);

                // 当绘制下一段线段前,把上一段末尾缺失的部分补齐
                if (lineIndex !== lineIndexCache) {
                    ctx.lineTo(keyPoints[lineIndex - 1].x, keyPoints[lineIndex - 1].y);
                    lineIndexCache = lineIndex;
                }

                prevX = nextX = ~~(keyPoints[lineIndex - 1].x + ((keyPoints[lineIndex]).x - keyPoints[lineIndex - 1].x) * partProgress);
                prevY = nextY = ~~(keyPoints[lineIndex - 1].y + ((keyPoints[lineIndex]).y - keyPoints[lineIndex - 1].y) * partProgress);

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
            <p className='info'>折线</p>
            <Button onClick={handleExecute}>执行</Button>
            <canvas id='polyLine' width='500' height='500'></canvas>
        </div>
    );
}