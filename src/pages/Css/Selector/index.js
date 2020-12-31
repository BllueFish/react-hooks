import React, { useState } from "react";
import "@/styles/style.less";
import "./page3.less";

export default function Page3() {

    return (
        <>
            <p className='info'>后代选择器：+/~</p>
            <div class="specify-selector">
                <ul class="list">
                    <li>同胞元素</li>
                    <li class="next">当前元素</li>
                    <li>同胞元素</li>
                    <li>同胞元素</li>
                    <li>同胞元素</li>
                </ul>
                <ul class="list">
                    <li>同胞元素</li>
                    <li class="next-all">当前元素</li>
                    <li>同胞元素</li>
                    <li>同胞元素</li>
                    <li>同胞元素</li>
                </ul>
                <ul class="list">
                    <li>同胞元素</li>
                    <li class="next-filter">当前元素</li>
                    <li>同胞元素</li>
                    <li class="filter">同胞元素</li>
                    <li>同胞元素</li>
                </ul>
            </div>
            <p className='info'>状态选择器：hover</p>
            <ul class="hover-tips">
                <li data-name="西瓜红" style={{ backgroundColor: "#f66" }}></li>
                <li data-name="梦幻紫" style={{ backgroundColor: "#66f" }}></li>
                <li data-name="箩底橙" style={{ backgroundColor: "#f90" }}></li>
                <li data-name="姣婆蓝" style={{ backgroundColor: "#09f" }}></li>
                <li data-name="原谅绿" style={{ backgroundColor: "#3c9" }}></li>
            </ul>
            <p className='info'>:valid 和 :invalid</p>
            <form className="form-validation">
                <div>
                    <label>名字</label>
                    <input type="text" placeholder="请输入你的名字(1~10个中文)" pattern="^[\u4e00-\u9fa5]{1,10}$" required />
                </div>
                <div>
                    <label>手机</label>
                    <input type="text" placeholder="请输入你的手机" pattern="^1[3456789]\d{9}$" required />
                </div>
                <div>
                    <label>简介</label>
                    <textarea required ></textarea>
                </div>
            </form>
            <p className='info'>:empty 通过:empty 显示占位符</p>
            <ul className="empty-list">
                {
                    [1, 2, 3].map((v, key) => {
                        return <li key={key}>Data {v}</li>;
                    })
                }
            </ul>
            <ul class="empty-list"></ul>
        </>
    );
}
