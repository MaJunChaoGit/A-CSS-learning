;(function TimeThisMother(){
	window.onload = function () {
		setTimeout(function(){
			var t = performance.timing;
			var localStorage = window.localStorage || window.Storage
			if(localStorage.count=== undefined || localStorage.count >= 11 ){
				localStorage.count = Number(0);
				localStorage.time = Number(0);
			}

			if(localStorage.count >5){
				localStorage.time =  parseInt(t.loadEventEnd - t.responseEnd) + Number(localStorage.time)
			}
			++localStorage.count;

			if(Number(localStorage.count) === 11){
				alert(Number(localStorage.time / 5))
				localStorage.count = 0;
				localStorage.time = 0;
			}
			
		}, 0);
	}
})();