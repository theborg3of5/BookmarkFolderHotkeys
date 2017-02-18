// Saves options to chrome sync storage.
function saveOps() {
	
	chrome.storage.sync.set({
		"openBookmarkFolder1": document.getElementById("bm1").value,
		"openBookmarkFolder2": document.getElementById("bm2").value,
		"openBookmarkFolder3": document.getElementById("bm3").value,
		"openBookmarkFolder4": document.getElementById("bm4").value
	});

	// Update status to let user know options were saved.
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}

// Restores select box state to saved value from chrome sync storage.
function loadOps() {
	chrome.storage.sync.get(["openBookmarkFolder1", "openBookmarkFolder2", "openBookmarkFolder3", "openBookmarkFolder4"], 
		function(items) {
			
			document.getElementById("bm1").value = items["openBookmarkFolder1"];
			document.getElementById("bm2").value = items["openBookmarkFolder2"];
			document.getElementById("bm3").value = items["openBookmarkFolder3"];
			document.getElementById("bm4").value = items["openBookmarkFolder4"];
			
		}
	);
}

// Add the events to load/save from this page.
document.addEventListener('DOMContentLoaded', loadOps);
document.querySelector('#save').addEventListener('click', saveOps);