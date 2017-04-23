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
	const iframeWidthPercent = 30; // [%]
	const width = `${100 - iframeWidthPercent}%`;
	document.querySelector("html").style.width = width;
	iframe.style.left = width;

	chrome.runtime.onMessage.addListener(message => {
		if (message.method === "close-directory-list") {
			document.body.removeChild(iframe);
			document.querySelector("html").style.width = null;
		}
	});
})();
