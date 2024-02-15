// These are the command names and the sync settings keys where the bookmark folder IDs are stored.
const settingKeys = ["openBookmarkFolder1", "openBookmarkFolder2", "openBookmarkFolder3", "openBookmarkFolder4"];

/** Page load - load settings from sync storage and populate the fields with them. */
document.addEventListener('DOMContentLoaded', async () => {
	const settings = await chrome.storage.sync.get(settingKeys);
	
	for (let key of settingKeys) {
		if(settings[key])
			document.getElementById(key).value = settings[key];
	}
});

/** Save button click - read values from fields and save them to sync storage. */
document.querySelector('#save').addEventListener('click', async () =>
{
	// Compile and save settings.
	let settings = {};
	for (let key of settingKeys)
	{
		settings[key] = document.getElementById(key).value
	}
	await chrome.storage.sync.set(settings);

	// Flash an indicator to let the user know we saved.
	const status = document.getElementById("divStatus");
	status.innerHTML = "Options Saved.";
	setTimeout(() => { status.innerHTML = ""; }, 750);
});
