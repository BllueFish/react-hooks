import React, { useState } from "react";
import "@/styles/style.less";
import "./page2.less";

export default function Page2() {

    return (
        <>
            <p className='info'>属性函数</p>
            <p className="hover-tips btn-1" data-msg="Hello World">提示框</p>
            <p className="hover-tips btn-2" data-msg="https://www.baidu.com"></p>
            <p className='info'>数学函数</p>
            <div className="iterative-counter">
                <ul>
                    <li>
                        <input id="angular" type="checkbox" />
                        <label for="angular">Angular</label>
                    </li>
                    <li>
                        <input id="react" type="checkbox" />
                        <label for="react">React</label>
                    </li>
                    <li>
                        <input id="vue" type="checkbox" />
                        <label for="vue">Vue</label>
                    </li>
                </ul>
                <p className="count" data-unit="个">框架：</p>
                <p className="weight" data-unit="%">权重：</p>
            </div>
            <p className='info'>变量计算</p>
            <ul className="strip-loading">
                {
                    new Array(5).fill(1).map((v, index) => {
                        return <li key={index} style={{ '--line-index': `${index}` }}></li>;
                    })
                }
            </ul>
            <div className="heart-loading">
                <ul style={{ '--line-count': 9 }}>
                    {
                        new Array(9).fill(1).map((v, index) => {
                            return <li key={index} className={`line-${index + 1}`} style={{ '--line-index': `${index + 1}` }}></li>;
                        })
                    }
                </ul>
            </div>

        </>
    );
}
