;(function TimeThisMother(){
	window.onload = function () {
		setTimeout(function(){
			var t = performance.timing;
			var localStorage = window.localStorage || window.Storage
			if(localStorage.count=== undefined || localStorage.count >= 10 ){
				localStorage.count = Number(0);
				localStorage.time = Number(0);
			}

			++localStorage.count;

			localStorage.time =  parseInt(t.loadEventEnd - t.responseEnd) + Number(localStorage.time)

			if(Number(localStorage.count) === 10){
				alert(Number(localStorage.time / 10))
				localStorage.count = 0;
				localStorage.time = 0;
			}
		}, 0);
	}
})();