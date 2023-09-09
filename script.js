let isAM = true; 

function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");


  if (!isAM && hours > 12) {
    hours -= 12;
  }

  const period = isAM ? "AM" : "PM";
  const timeString = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${period}`;
  clockElement.textContent = timeString;
}

function toggleAMPM() {
    isAM = !isAM;
    updateClock();
  }
  
  document.getElementById("clock").addEventListener("click", toggleAMPM);
// Update jam setiap detik
setInterval(updateClock, 1000);

//untuk lagu
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var toggleButton = document.getElementById("toggleButton");
var currentAudio = audio1; // Lagu pertama sebagai lagu saat ini
var pausedTime = 0;

toggleButton.addEventListener("click", function () {
  if (currentAudio.paused) {
    currentAudio.play();
    toggleButton.textContent = "Pause";
  } else {
    currentAudio.pause();
    pausedTime = currentAudio.currentTime; // Simpan waktu saat di-pause
    toggleButton.textContent = "Lanjut";
  }
});

audio1.addEventListener("ended", function () {
  currentAudio = audio2; // Ganti lagu saat lagu pertama selesai
  currentAudio.currentTime = 0; // Kembalikan waktu pemutaran ke awal
  currentAudio.play();
  toggleButton.textContent = "Pause";
});

audio2.addEventListener("ended", function () {
  currentAudio = audio3; // Ganti lagu saat lagu kedua selesai
  currentAudio.currentTime = 0; // Kembalikan waktu pemutaran ke awal
  currentAudio.play();
  toggleButton.textContent = "Pause";
});

audio3.addEventListener("ended", function () {
  currentAudio = audio4; // Ganti lagu saat lagu ketiga selesai
  currentAudio.currentTime = 0; // Kembalikan waktu pemutaran ke awal
  currentAudio.play();
  toggleButton.textContent = "Pause";
});

audio4.addEventListener("ended", function () {
  currentAudio = audio1; // Ganti lagu saat lagu ketiga selesai (kembali ke awal)
  currentAudio.currentTime = 0; // Kembalikan waktu pemutaran ke awal
  currentAudio.play();
  toggleButton.textContent = "Pause";
});

//BIAR SMOOTYHH
const navbarLinks = document.querySelectorAll('.navbar a');
const footerLink = document.querySelector('.footer a');

// event listener untuk setiap tautan navbar
navbarLinks.forEach(link => {
  link.addEventListener('click', smoothScrollNavbar);
});

// event listener untuk tautan di footer
footerLink.addEventListener('click', smoothScroll);

// untuk smooth scroll pada tautan navbar
function smoothScrollNavbar(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  // Scroll dengan animasi
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

// untuk smooth scroll pada tautan footer
function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  // Scroll dengan animasi
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

