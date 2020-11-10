'use strict';

(() => {
	// Topのみで実行
	if (window.top !== window) return;

	const iframe = document.createElement('iframe');
	iframe.style.position = 'fixed';
	iframe.style.top = '0px';
	iframe.style.height = '100%';
	iframe.style.width = '100%';
	iframe.style.background = 'white';
	iframe.style.zIndex = 10000;
	iframe.src = location.pathname.replace(/[/][^/]*$/, '?in-iframe');
	window.addEventListener('load', () => {
		setTimeout(() => {
			document.body.appendChild(iframe);
		}, 500);
	});

	// 右側30%に表示する
	const iframeWidthPercent = 30; // [%]
	const width = `${100 - iframeWidthPercent}%`;
	document.querySelector('html').style.width = width;
	iframe.style.left = width;

	// 画像を表示したときにブラウザウィンドウの横幅が小さいと画像右側が隠れる問題対策
	// 既知の問題：画像クリックで拡大を許可すると拡大時に右側が隠れる
	if (document.querySelectorAll('body > img').length === 1) {
		const style = document.createElement('style');
		style.append(`
			img:not([style*="cursor: zoom-out;"]) {
				width: auto;
				height: auto;
				max-width: 100%;
				max-height: 100%;
			}
		`);
		document.head.append(style);
	}

	chrome.runtime.onMessage.addListener(message => {
		if (message.method === 'close-directory-list') {
			iframe.style.display = 'none';
			document.querySelector('html').style.width = null;
		}
	});
})();
