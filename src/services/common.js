import queryString from "query-string";
import Store from "store";

const getUrl = (url, query) => {
	return url + "?" + queryString.stringify(query);
};
const getHeader = () => {
	let headers = {};
	headers["X-User-Token"] = Store.get("X-User-Token");
	return headers;
};
const deleteEmptyObjItem = (obj) => {
	for (let i in obj) {
		let value = obj[i];
		if (!value && value !== 0 && value !== false) {
			delete obj[i];
		}
	}
	return obj;
};
export {
	getUrl,
	getHeader,
	deleteEmptyObjItem
};
