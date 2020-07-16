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
request.open("GET", "https://zzjy0wcsm3.execute-api.us-east-1.amazonaws.com/Prod/hitCount", true)
request.send()
