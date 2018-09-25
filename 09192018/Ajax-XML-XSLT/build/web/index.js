// Create the XMLHttpRequest 
var xHRObject = new XMLHttpRequest();
function registerEvents() {
	var menu = document.getElementById("menu");
	menu.onmouseout = function() {
		var submenu = document.getElementById('romesubmenu');
		submenu.style.visibility = 'hidden';
	};
	var td3 = document.getElementById("td3");
	var romesubmenu = document.getElementById("romesubmenu");
	td3.onmouseover = romesubmenu.onmouseover = function() {
		romesubmenu.style.visibility = 'visible';
	};
}
function getData() {
	// Check to see if the XMlHttpRequest object is ready and whether it has
	// returned a legitimate response
	if (xHRObject.readyState == 4 && xHRObject.status == 200) {
		var xmlDoc = xHRObject.responseXML;
		if (window.ActiveXObject) {
			// Load XSL
			var xsl = new ActiveXObject("Microsoft.XMLDOM");
			xsl.async = false;
			xsl.load("MenuDisplay.xsl");
			// Transform
			var transform = xmlDoc.transformNode(xsl);
			var spanb = document.getElementById("menuhere");
			if (spanb != null) {
				spanb.innerHTML = transform;
			}
		} else {
			var xsltProcessor = new XSLTProcessor();
			// Load XSL
			XObject = new XMLHttpRequest();
			XObject.open("GET", "MenuDisplay.xsl", false);
			XObject.send(null);
			xslStylesheet = XObject.responseXML;
			xsltProcessor.importStylesheet(xslStylesheet);
			// Transform
			var fragment = xsltProcessor.transformToFragment(xmlDoc, document);
			document.getElementById("menuhere").innerHTML = "";
			document.getElementById("menuhere").appendChild(fragment);
		}		
		registerEvents();
		// Clear the object and call the getDocument function in 10 seconds
		xHRObject.abort();
		setTimeout("getDocument()", 10000);
	}
}
function getDocument() {
	// Reset the function
	xHRObject.onreadystatechange = getData;
	// IE will cache the GET request; the only way around this is to append a
	// different querystring. We add a new date and append it as a querystring
	xHRObject.open("GET", "SuiteList.xml?id=" + Number(new Date), true);
	xHRObject.send(null);
}
onload = getDocument;