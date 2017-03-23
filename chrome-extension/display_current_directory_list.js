"use strict";

(() => {
	// Topのみで実行
	if (window.top !== window) return;

	const iframe = document.createElement("iframe");
	iframe.style.position = "fixed";
	iframe.style.top = "0px";
	iframe.style.height = "100%";
	iframe.style.width = "100%";
	iframe.style.background = "white";
	iframe.src = document.URL.replace(/[/][^/]*$/, "?in-iframe");
	document.body.appendChild(iframe);

	// 右側30%に表示する
	const width = "70%";
	document.querySelector("html").style.width = width;
	iframe.style.left = width;
})();
