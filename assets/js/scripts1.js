const bukaUndangan = document.getElementById("buka");
const btnBukaUndangan = document.getElementById("buttonBukaUndangan");
const undanganTutup = document.getElementById("undanganTutup");
const undanganBuka = document.getElementById("content");
const btnSlideShow = document.getElementById("slide-show");
const hero = document.getElementById("slide");
const bg = document.getElementById("bg");
const btnMenu = document.getElementById("bottomMenu");

// Tombol Button Navigation
const btnHome = document.getElementById("btn-weeding");
const btnPasangan = document.getElementById("btn-pasangan");
const btnWaktu = document.getElementById("btn-waktu");
const btnUcapan = document.getElementById("btn-ucapan");
const btnHadiah = document.getElementById("btn-hadiah");

// Pages
const home = document.getElementById("home");
const pasangan = document.getElementById("pasangan");
const waktu = document.getElementById("waktu");
const ucapan = document.getElementById("ucapan");
const hadiah = document.getElementById("hadiah");

btnHome.addEventListener("click", function (e) {
  e.preventDefault();
  home.classList.remove("hidden");
  pasangan.classList.add("hidden");
  waktu.classList.add("hidden");
  ucapan.classList.add("hidden");
  hadiah.classList.add("hidden");
  window.location.href = "#home";
});

btnPasangan.addEventListener("click", function (e) {
  e.preventDefault();
  pasangan.classList.remove("hidden");
  home.classList.add("hidden");
  waktu.classList.add("hidden");
  ucapan.classList.add("hidden");
  hadiah.classList.add("hidden");
  window.location.href = "#pasangan";
});

btnWaktu.addEventListener("click", function (e) {
  e.preventDefault();
  waktu.classList.remove("hidden");
  home.classList.add("hidden");
  pasangan.classList.add("hidden");
  ucapan.classList.add("hidden");
  hadiah.classList.add("hidden");
  window.location.href = "#waktu";
});

btnUcapan.addEventListener("click", function (e) {
  e.preventDefault();
  ucapan.classList.remove("hidden");
  home.classList.add("hidden");
  pasangan.classList.add("hidden");
  waktu.classList.add("hidden");
  hadiah.classList.add("hidden");
  window.location.href = "#ucapan";
});

btnHadiah.addEventListener("click", function (e) {
  e.preventDefault();
  hadiah.classList.remove("hidden");
  home.classList.add("hidden");
  pasangan.classList.add("hidden");
  waktu.classList.add("hidden");
  ucapan.classList.add("hidden");
  window.location.href = "#hadiah";
});

if (localStorage.getItem("buka") == "buka") {
  //   playAudio();
  undanganTutup.innerHTML = "";
  undanganBuka.classList.remove("hidden");
  hero.classList.remove("animate-text-slide");
  btnMenu.classList.remove("hidden");
}

// btnSlideShow.addEventListener("click", function () {
//   console.log("Hello");
//   undanganBuka.classList.add("animate-text-slide");
//   setTimeout(() => {
//     undanganBuka.classList.remove("animate-text-slide");
//   }, 2000);
// });

const undangan = () => {
  bukaUndangan.addEventListener("click", function (e) {
    e.preventDefault();
    btnBukaUndangan.innerHTML = `
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    Loading...

                                `;
    setTimeout(() => {
      btnBukaUndangan.innerHTML = `<svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                          />
                        </svg>
                        Buka undangan`;
      hero.classList.add("animate-text-slide");
      bg.classList.remove("bg-white");
      bg.classList.add("bg-primary");
      setTimeout(() => {
        localStorage.setItem("buka", "buka");
        undanganTutup.innerHTML = "";
        hero.classList.remove("animate-text-slide");
        btnMenu.classList.remove("hidden");

        undanganBuka.classList.remove("hidden");
      }, 1500);
    }, 10000);
  });
};

undangan();
