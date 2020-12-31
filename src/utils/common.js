import queryString from "query-string";
import Store from "store";
import Cookies from "universal-cookie";
import md5 from "md5";

const menuTree = [
    {
        key: "css",
        name: "CSS艺术之美",
        children: [
            {
                key: "Layout",
                url: "/css/layout",
                name: "布局方式"
            },
            {
                key: "Function",
                url: "/css/function",
                name: "函数计算"
            },
            {
                key: "Selector",
                url: "/css/selector",
                name: "选择器"
            },
            {
                key: "Background",
                url: "/css/background",
                name: "背景&遮罩"
            },
            {
                key: "Shadow",
                url: "/css/shadow",
                name: "阴影&滤镜"
            },
            {
                key: "Translate",
                url: "/css/translate",
                name: "变换&动画"
            }
        ]
    },
    {
        key: "react",
        name: "React进阶",
        children: []
    }
];

const getUrl = (url, query) => {
    return url + "?" + queryString.stringify(query);
};

const pingURL = (url, query) => {
    return url + `${query.keyStr}`;
};

const getCsrfInfo = () => {
    const cookies = new Cookies();
    let token = cookies.get("_td_token_");
    let randomArray = [];

    for (let i = 0; i < 4; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        randomArray.push(randomNum);
    }
    let randomStr = "";
    if (token) {
        randomArray.forEach((number, index) => {
            randomStr = randomStr + token[number];
        });
    }
    let md5Str = md5(randomStr);
    let preText = "";
    let tailText = "";
    randomArray.forEach((number, index) => {
        if (index === 0 || index === 1) {
            preText = preText + number;
        }
        if (index === 2 || index === 3) {
            tailText = tailText + number;
        }
    });
    return preText + md5Str + tailText;
};

const getHeader = () => {
    let headers = {};
    headers["X-Cf-Random"] = getCsrfInfo();

    return headers;
};

const getUpload = () => {
    let headers = {};
    headers["X-User-Token"] = Store.get("X-User-Token");
    headers["encType"] = "multipart/form-data";
    return headers;

};
const deleteEmptyObjItem = (obj) => {
    for (let i in obj) {
        let value = obj[i];
        if (value === null || value === undefined || value === "" || !value && value !== 0) {
            delete obj[i];
        }
    }
    return obj;
};

/**
 * 把对象里都value都为空的对象转化为null
 * @param obj
 * @returns {null}
 */
const emptyObjToNull = (obj) => {
    let flag = true;
    for (let i in obj) {
        let value = obj[i];
        if (value !== null) {
            flag = false;
        }
    }
    return flag ? null : obj;
};

export {
    menuTree,
    getUrl,
    getHeader,
    deleteEmptyObjItem,
    getUpload,
    pingURL,
    emptyObjToNull
};
