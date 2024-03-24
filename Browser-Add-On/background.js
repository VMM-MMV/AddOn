chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    if (details.url.includes('youtube.com') || details.url.includes('tiktok.com')) {
        chrome.tabs.executeScript(null, { file: "content.js" });
    }
}, { url: [
    { hostSuffix: 'youtube.com' }, 
    { hostSuffix: 'tiktok.com' }
]});

