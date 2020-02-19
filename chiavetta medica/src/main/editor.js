document.getElementById("fileLoader").onchange = function() {
	var file = document.getElementById("fileLoader").files[0];
	var filename = file.name;
	var pathfile = file.path;
	document.getElementById("name").innerHTML = filename;
	var fileReader = new FileReader();
	fileReader.onload = function(e) {
		var text = e.target.result;
		document.getElementById("myText").value =text;
	}
	fileReader.readAsText(file,"UTF-8");
};
function saveFile() {
	var saveText = document.getElementById("myText").value;
	var textBLOB = new Blob([saveText], {type:"text/plain"});
	var fileName = document.getElementById("name").innerHTML;
	var link = document.createElement("a");
	link.download = fileName;
	link.innerHTML = "Download File";
	
	if (window.URL != null) {
		link.href = window.URL.createObjectURL(textBLOB);
	} else {
		link.href = window.URL.createObjectURL(textBLOB);
		link.onclick = destroy;
		link.style.display ="none";
		document.body.appendChild(link);
	}
	link.click();
}
function destroy(e) {
	document.body.removeChild(e.target);
}
	