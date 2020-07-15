var request = new XMLHttpRequest();
request.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200) {
	//Do something with response
	document.getElementById("hits").innerHTML = request.responseText;
	console.log("API response: " + request.responseText);
	} else {
	console.log(" Error")
	}
}
request.open("GET", "https://k9ew9tt6yj.execute-api.us-east-1.amazonaws.com/prod/hitCounter_test", true)
request.send()
