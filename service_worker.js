
/**
 * Whenever a command is triggered (using a hotkey), open the bookmarks from the relevant folder.
 * https://developer.chrome.com/docs/extensions/reference/api/commands#event-onCommand
 * @param {string} command The command that was triggered.
 */
chrome.commands.onCommand.addListener(async (command) =>
{
	// Settings are stored under the command name, settings[command] => bookmarkFolderId.
	const settings = await chrome.storage.sync.get(command);
	const folderId = settings[command];

	// Open all of the (direct) child bookmarks.
	const childBookmarks = await chrome.bookmarks.getChildren(folderId);
	for (let i = 0; i < childBookmarks.length; i++)
	{
		const url = childBookmarks[i].url;
		chrome.tabs.create({ "url": url, "active": (i === 0) }); // First one is activated, others are not.
	}
});
