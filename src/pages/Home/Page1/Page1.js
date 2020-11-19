import React, { useState } from "react";
import { } from "antd";
import "@/styles/style.less";
import "./page1.less";

export default function Page1() {

    return (
        <>
            <p className='info'>全局布局</p>
            <div className="fullscreen-layout1">
                <header>定位布局</header>
                <main></main>
                <footer></footer>
            </div>
            <div className="fullscreen-layout2">
                <header>flex布局（会有overflow失效问题）</header>
                <main></main>
                <footer></footer>
            </div>
            <p className='info'>两列布局</p>
            <div className="two-column-layout1">
                <div className="left"></div>
                <div className="right">
                    float + margin-left/right布局
                </div>
            </div>
            <div className="two-column-layout2">
                <div className="left"></div>
                <div className="right">
                    float + overflow布局
                </div>
            </div>
            <div className="two-column-layout3">
                <div className="left"></div>
                <div className="right">
                    flex布局
                </div>
            </div>
            <p className='info'>圣杯布局float + margin-left/right + padding-left/right</p>
            <div className="grail-layout1">
                <div className="left"></div>
                <div className="right"></div>
                <div className="center"></div>
            </div>
            <p className='info'>双飞翼布局float + margin-left/right</p>
            <div className="grail-layout2">
                <div className="left"></div>
                <div className="right"></div>
                <div className="center">
                    <div></div>
                </div>
            </div>
            <p className='info'>圣杯布局/双飞翼布局flex</p>
            <div className="grail-layout3">
                <div className="left"></div>
                <div className="center"></div>
                <div className="right"></div>
            </div>
            <p className='info'>文字布局</p>
            <div className="text-wrapping">
                <img src="https://static.yangzw.vip/codepen/thor.jpg" />
                    文本环绕XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
            <div className="text-ellipsis">
                <p className="s-line s-ellipsis">CSS非常有趣和搞怪，可以做一些JS也能做的事情</p>
                <p className="m-line m-ellipsis">通过使用 CSS 我们可以大大提升网页开发的工作效率！在我们的 CSS 教程中，您会学到如何使用 CSS 同时控制多重网页的样式和布局。通过本站的在线编辑器，你可以在线编辑CSS,并且可以在线查看修改后的效果。</p>
            </div>
        </>
    );
}
