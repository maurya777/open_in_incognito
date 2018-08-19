function openInIncognito() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    try {
      const url = tabs[0].url;
      if (url && url.indexOf('http') === 0) {
        chrome.windows.create({
          url: tabs[0].url,
          incognito: true
        });
      }
    } catch (e) {
      console.log('Could not open current window in incognito', e);
    }
  });
}

chrome.commands.onCommand.addListener(function (command){
  openInIncognito();
})
chrome.browserAction.onClicked.addListener(function (tab){
  openInIncognito();
})