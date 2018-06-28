

function loadOldJsWay() {
	var yin; 
	var yang;
		
	loadYin(tryFinish);
	loadYang(tryFinish);

	
	function loadYin(cb) {
		console.log('loadYin');
		setTimeout(function(){yin = 3; cb();}, 1000);
	}

	function loadYang(cb) {
		console.log('loadYang');
		setTimeout(function(){yang = 4; cb();}, 2000);
	}

	function tryFinish() {
		console.debug('try finish', yin, yang);
		if (yin && yang) {
			console.debug('Loading finished!');
		}
	}
}


function loadNewWay() {
	const x = 4;
	let v = [0,1,2,3].map(x=>x+1);
	for (let key of v) {
		 console.log(key);
		}
}

//loadOldJsWay();
loadNewWay();
