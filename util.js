//科学计数法转字符串数字
const getNumberString = number => {
	let st = number.toString().toLowerCase();
	let res = "";
	if (st.indexOf("e-") != -1) {
		let stArr = st.split("e-");
		let p = stArr[1];
		let t = stArr[0];
		if (t.indexOf(".") == -1) {
			let r = "0.";
			for (let i = 0; i < p - t.length; i++) {
				r = r + "0";
			}
			res = r + t;
		} else {
			let h1 = t.split(".");
			let h2 = h1[0];
			let h3 = h1[1];
			if (h2.length > p) {
				res =
					h3.substring(0, h3.length - p) +
					"." +
					h3.substring(h3.length - p, h3.length) +
					h3;
			} else {
				res = h2 + "" + h3;
				for (let i = 0; i < p - h2.length; i++) {
					res = "0" + res;
				}
				res = "0." + res;
			}
		}
		return res;
	} else if (st.indexOf("e") != -1) {
		let stArr;
		if (st.indexOf("e+") != -1) {
			stArr = st.split("e+");
		} else {
			stArr = st.split("e");
		}
		let p = stArr[1];
		let t = stArr[0];
		if (t.indexOf(".") == -1) {
			for (let i = 0; i < p - t.length; i++) {
				t = t + "0";
			}
		} else {
			let h1 = t.split(".");
			let h2 = h1[0];
			let h3 = h1[1];
			if (h3.length > p) {
				h3 = h3.substring(0, p) + "." + h3.substring(p, h3.length);
				res = h2 + "" + h3;
			} else {
				res = h2 + "" + h3;
				for (let i = 0; i < p - h3.length; i++) {
					res = res + "0";
				}
			}
		}
		return res;
	} else {
		return number;
	}
};
