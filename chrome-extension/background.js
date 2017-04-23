
chrome.runtime.onMessage.addListener((message, sender) => {
	if (message.method === "close-this-directory-list") {
		const message = {
			method: "close-directory-list"
		};
		chrome.tabs.sendMessage(sender.tab.id, message);
	}
});
