"use strict";

(() => {
	const base = document.createElement("base");
	base.target = "_top";
	document.head.appendChild(base);

	const header = document.getElementById("header");
	header.title = header.innerText;
})();
