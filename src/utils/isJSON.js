export const isJSON = (str) => {
	if (typeof str === "string") {
		try {
			let obj = JSON.parse(str);
			if (typeof obj === "object" && obj) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}
};
