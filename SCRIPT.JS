
// this is cursor

	var cursor = document.querySelector(".cursor");
	var cursor2 = document.querySelector(".cursor2");
	document.addEventListener("mousemove",function (e) {
		cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX +"px; top:" + e.clientY + "px;";
	});


// this is typing effects
const text = document.querySelector(".sec-text")

	const textLoad = () =>{
		setTimeout(() =>{
			text.textContent = "Web Designing"
		} , 0)	
		setTimeout(() =>{
			text.textContent = "Digital Marketing (SEO)"
		} , 4000)
		setTimeout(() =>{
			text.textContent = "DevOps"
		} , 8000)
		
	}
	textLoad();
	setInterval(textLoad, 12000)