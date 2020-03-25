import fetch from "dva/fetch";
import { notification } from "antd";
import queryString from "query-string";
import { getHeader } from "./common";

const codeMessage = {
	200: "服务器成功返回请求的数据。",
	201: "新建或修改数据成功。",
	202: "一个请求已经进入后台排队（异步任务）。",
	204: "删除数据成功。",
	400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
	401: "用户没有权限（令牌、用户名、密码错误）。",
	403: "用户得到授权，但是访问是被禁止的。",
	404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
	406: "请求的格式不可得。",
	410: "请求的资源被永久删除，且不会再得到的。",
	422: "当创建一个对象时，发生一个验证错误。",
	500: "服务器发生错误，请检查服务器。",
	502: "网关错误。",
	503: "服务不可用，服务器暂时过载或维护。",
	504: "网关超时。"
};
const apiPrefix = "/api";

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}

	const errortext = codeMessage[response.status] || response.statusText;
	notification.error({
		message: `请求错误 ${response.status}`,
		description: errortext
	});
	const error = new Error(errortext);
	error.name = response.status;
	error.response = response;
	throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, noApiPrefix, mock = false) {
	const defaultOptions = {
		credentials: "include"
	};

	const newOptions = { ...defaultOptions, ...options, noApiPrefix };

	if (newOptions.method === "POST" || newOptions.method === "PUT") {
		if (!(newOptions.body instanceof FormData)) {
			newOptions.headers = {
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
				...newOptions.headers

			};
			newOptions.body = queryString.stringify(newOptions.body);
		} else {
			// newOptions.body is FormData
			newOptions.headers = {
				Accept: "application/json",
				...newOptions.headers
			};
		}
	}
	url = noApiPrefix ? url : apiPrefix + url;

	return fetch(url, newOptions)
		.then(checkStatus)
		.then(response => {
			return response.json();
		})
		.catch(e => {
			const status = e.name;
			if (status === 401) {
				if (process.env.SYS_ENV === "development") {
					return;
				}
			}
			if (status === 488) {
				return;
			}
			if (status === 403) {
				if (process.env.SYS_ENV === "development") {
					return;
				}
			}
			if (status <= 504 && status >= 500) {
				if (process.env.SYS_ENV === "development") {
					return;
				}
			}
			if (status >= 404 && status < 422) {
				if (process.env.SYS_ENV === "development") {
					return;
				}
			}
		});
}

/**
 * @description: 下载文件请求
 * @param {*} url
 * @param {*} options
 * @param {*} reportName
 */
export function downloadFileHandle(url, options, reportName, fileType) {
	url = apiPrefix + url;
	return fetch(url, options)
		.then(res => res.blob())
		.then(blob => {
			const url = URL.createObjectURL(blob);
			let a = document.createElement("a");
			a.download = `${reportName}.${fileType || "pdf"}`;
			a.href = url;
			document.body.appendChild(a);
			a.click();
			a.remove(); // document.body.removeChild(a)
		})
		.catch(err => {
			console.error(err);
		});
}

/**
 * @description: 导出报表
 * @param {*} url
 * @param {*} options
 * @param {*} fileName
 */
export function downloadReport(url, options, fileName, fileType) {
	url = apiPrefix + url;
	let a = document.createElement("a");
	a.download = `${fileName}.${fileType || "pdf"}`;
	a.href = url;
	document.body.appendChild(a);
	a.click();
	a.remove();
}


export function PostForm(url, type, datas) {
	url = apiPrefix + url;
	const formData = new FormData();

	Object.keys(datas).forEach(key => {
		formData.append(key, datas[key]);
	});

	return fetch(url, {
		method: type,
		credentials: "include",
		headers: getHeader(),
		body: formData
	}).then(res => {
		return res.json();
	}).then(res => {
		return res;
	});
}
