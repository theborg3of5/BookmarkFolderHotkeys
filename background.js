
// Bind hotkeys.
chrome.commands.onCommand.addListener(function(command) {

	chrome.storage.sync.get(command, 
		function(items) {
			openBookmarkFolder(items[command]);
		}
	);
	
});


function openBookmarkFolder(id) {

	// Get all bookmarks in the given folder (not including subfolders).
	chrome.bookmarks.getChildren(id, 
		function(results) {
		
			// Open the first one, activate it.
			chrome.tabs.create({url: results[0].url, active: true});
			
			// Open the rest, in order, deactivated.
			for (var i = 1; i < results.length; i++) {
			
				// If it's not a folder, open it.
				if(results[i].url != null) {
					chrome.tabs.create({url: results[i].url, active: false});
				}
				
			}
			
		}
	);
	
}