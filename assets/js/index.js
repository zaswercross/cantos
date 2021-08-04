var audio = new Audio();
document.querySelectorAll('.btn-play').forEach( e => {
	e.addEventListener('click', el => {
		let bpm = el.target.attributes['data-bpm'].value;
		bpm = 'assets/song/'+bpm+'.mp3';
		audio.src = bpm;
		audio.play();
	})
})
document.querySelector('.btn-stop').addEventListener('click', el =>{
	audio.pause();	
})

// const arNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm'];
