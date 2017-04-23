"use strict";

(() => {
	const base = document.createElement("base");
	base.target = "_top";
	document.head.appendChild(base);

	const header = document.getElementById("header");
	header.title = header.innerText;

	const closeButton = document.createElement("button");
	closeButton.innerText = "閉じる";
	closeButton.style.position = "fixed";
	closeButton.style.top = "0";
	closeButton.style.left = "0";
	closeButton.addEventListener("click", () => {
		const message = {
			method: "close-this-directory-list"
		};
		chrome.runtime.sendMessage(message);
	});
	document.body.appendChild(closeButton);
})();
