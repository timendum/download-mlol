(function(){
	let audio = document.getElementsByTagName('audio');
	if (audio.length != 1) {
		console.log('audio length invalid', audio.length);
		return;
	}
	
	let sources = audio[0].getElementsByTagName('source');
	if (sources.length < 1) {
		console.log('sources length invalid', sources.length);
		return;
	}
	let href = sources[0].src;
	
	let rootElement = document.getElementById('container_layer');
	let player = document.getElementById('html5player');
	let a = document.createElement('a');
	a.href = href;
	a.appendChild(document.createTextNode('Tasto destro, Salva come...'));
	rootElement.insertBefore(a, player);
})()
