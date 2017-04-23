
const ID_CLOSE_DIRECTORY_LIST = "close-directory-list";

const createContextMenu = () => {
	chrome.contextMenus.create({
		title: "同一フォルダ内のファイル一覧を閉じる",
		contexts: [
			"all"
		],
		documentUrlPatterns: [
			"file:///*"
		],
		id: ID_CLOSE_DIRECTORY_LIST
	});
};

chrome.runtime.onInstalled.addListener(createContextMenu);
chrome.runtime.onStartup.addListener(createContextMenu);

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === ID_CLOSE_DIRECTORY_LIST) {
		const message = {
			method: "close-directory-list"
		};
		chrome.tabs.sendMessage(tab.id, message);
	}
});

chrome.runtime.onMessage.addListener((message, sender) => {
	if (message.method === "close-this-directory-list") {
		const message = {
			method: "close-directory-list"
		};
		chrome.tabs.sendMessage(sender.tab.id, message);
	}
});
