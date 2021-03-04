chrome.browserAction.onClicked.addListener(() =>
  chrome.tabs.create({ url: "https://www.theguardian.com/crosswords" })
);
