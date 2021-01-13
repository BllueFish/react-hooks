import React, { useState } from "react";
import "@/styles/style.less";
import "./index.less";

export default function Background() {

    return (
        <>
            <p className='info'>手风琴</p>
            <ul class="accordion">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <p className='info'>折叠面板</p>
            <div class="accordion1">
                <input id="collapse1" type="checkbox" hidden />
                <input id="collapse2" type="checkbox" hidden />
                <input id="collapse3" type="checkbox" hidden />
                <article>
                    <label for="collapse1">列表1</label>
                    <p>内容1<br />内容2<br />内容3<br />内容4</p>
                </article>
                <article>
                    <label for="collapse2">列表2</label>
                    <p>内容1<br />内容2<br />内容3<br />内容4</p>
                </article>
                <article>
                    <label for="collapse3">列表3</label>
                    <p>内容1<br />内容2<br />内容3<br />内容4</p>
                </article>
            </div>
        </>
    );
}