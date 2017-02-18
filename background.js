
function commandTriggered(command) {
	chrome.storage.sync.get(
		command, 
		function(items) {
			openBookmarkFolder(items[command]);
		}
	);
}
function openBookmarkFolder(folderId) {
	chrome.bookmarks.getChildren(
		folderId,
		function(results) {
			openURL(results[0].url, true); // First one is activated, others are not.
			
			for (var i = 1; i < results.length; i++)
				openURL(results[i].url);
		}
	);
}
function openURL(url, active = false) {
	if(!url)
		return;
	
	chrome.tabs.create(
		{
			"url":    url,
			"active": active
		},
		checkError
	);
}
function checkError() {
	var lastError = chrome.runtime.lastError; // Check lastError so Chrome doesn't output anything to the console.
	if(lastError)
		return false;
	
	return true;
}

chrome.commands.onCommand.addListener(commandTriggered);
