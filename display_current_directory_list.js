"use strict";

(() => {
	// Topのみで実行
	if (window.top !== window) return;

	const iframe = document.createElement("iframe");
	iframe.style.position = "fixed";
	iframe.style.top = "0px";
	iframe.style.right = "0px";
	iframe.style.height = "100%";
	iframe.style.width = "500px";
	iframe.style.background = "white";
	iframe.src = document.URL.replace(/[/][^/]+$/, "?in-iframe");
	document.body.appendChild(iframe);
})();
