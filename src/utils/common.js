import queryString from "query-string";
import Store from "store";
import Cookies from "universal-cookie";
import md5 from "md5";

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
	getUrl,
	getHeader,
	deleteEmptyObjItem,
	getUpload,
	pingURL,
	emptyObjToNull
};
