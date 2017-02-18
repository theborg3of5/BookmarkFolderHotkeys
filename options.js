// Saves options to chrome sync storage.
function saveOptions() {
	chrome.storage.sync.set({
		"openBookmarkFolder1": document.getElementById("BookmarkFolderId1").value,
		"openBookmarkFolder2": document.getElementById("BookmarkFolderId2").value,
		"openBookmarkFolder3": document.getElementById("BookmarkFolderId3").value,
		"openBookmarkFolder4": document.getElementById("BookmarkFolderId4").value
	});
	
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(
		function() {
			status.innerHTML = "";
		},
		750
	);
}

// Restores select box state to saved value from chrome sync storage.
function loadOptions() {
	chrome.storage.sync.get(
		[
			"openBookmarkFolder1",
			"openBookmarkFolder2",
			"openBookmarkFolder3",
			"openBookmarkFolder4"
		],
		function(items) {
			if(items["openBookmarkFolder1"])
				document.getElementById("BookmarkFolderId1").value = items["openBookmarkFolder1"];
			if(items["openBookmarkFolder2"])
				document.getElementById("BookmarkFolderId2").value = items["openBookmarkFolder2"];
			if(items["openBookmarkFolder3"])
				document.getElementById("BookmarkFolderId3").value = items["openBookmarkFolder3"];
			if(items["openBookmarkFolder4"])
				document.getElementById("BookmarkFolderId4").value = items["openBookmarkFolder4"];
		}
	);
}

// Add the events to load/save from this page.
document.addEventListener('DOMContentLoaded', loadOptions);
document.querySelector('#save').addEventListener('click', saveOptions);
