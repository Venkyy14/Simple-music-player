const audio = document.getElementById('audio');

const playPauseBtn = document.getElementById('play-pause');

const prevBtn = document.getElementById('prev');

const nextBtn = document.getElementById('next');

const seekBar = document.getElementById('seek-bar');

const volumeUp = document.getElementById('volume-up');

const volumeDown = document.getElementById('volume-down');

const songImage = document.getElementById('song-image');



// Song List

const songs = [

  { src: 'song1.mp3', image: 'song1.jpg' },

  { src: 'song2.mp3', image: 'song2.jpg' },

  { src: 'song3.mp3', image: 'song3.jpg' },

];



let currentSongIndex = 0;



// Load Song

function loadSong(index) {

  audio.src = songs[index].src;

  songImage.src = songs[index].image;

  audio.load();

}



// Play or Pause Song

function togglePlayPause() {

  if (audio.paused) {

    audio.play();

    playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause Icon

  } else {

    audio.pause();

    playPauseBtn.innerHTML = '&#9658;'; // Play Icon

  }

}



// Previous Song

function prevSong() {

  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;

  loadSong(currentSongIndex);

  audio.play();

  playPauseBtn.innerHTML = '&#10074;&#10074;';

}



// Next Song

function nextSong() {

  currentSongIndex = (currentSongIndex + 1) % songs.length;

  loadSong(currentSongIndex);

  audio.play();

  playPauseBtn.innerHTML = '&#10074;&#10074;';

}



// Update Seek Bar

audio.addEventListener('timeupdate', () => {

  seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;

});



// Seek Song

seekBar.addEventListener('input', () => {

  audio.currentTime = (seekBar.value / 100) * audio.duration;

});



// Volume Control

volumeUp.addEventListener('click', () => {

  audio.volume = Math.min(audio.volume + 0.1, 1);

});



volumeDown.addEventListener('click', () => {

  audio.volume = Math.max(audio.volume - 0.1, 0);

});



// Event Listeners

playPauseBtn.addEventListener('click', togglePlayPause);

prevBtn.addEventListener('click', prevSong);

nextBtn.addEventListener('click', nextSong);



// Initialize

loadSong(currentSongIndex);