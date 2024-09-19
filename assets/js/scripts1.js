const bukaUndangan = document.getElementById("buka");
const btnBukaUndangan = document.getElementById("buttonBukaUndangan");
const undanganTutup = document.getElementById("undanganTutup");
const undanganBuka = document.getElementById("content");
const btnSlideShow = document.getElementById("slide-show");
const hero = document.getElementById("slide");
const bg = document.getElementById("bg");
const btnMenu = document.getElementById("bottomMenu");
const audio = document.getElementById("audio-container");
const screen = document.getElementById("screen-container");
const dataComment = document.getElementById("dataComments");
const btnShowRek = document.getElementById("btnTampilRek");
const modalBNI = document.getElementById("modal-bni");
const btnModalClose = document.getElementById("btn-modal-close");
const cModal = document.getElementById("container-modal");
let isPlaying = false;
var elem = document.documentElement;
const d = new Date();
const time = d.getTime();

// Tombol Button Navigation
const btnHome = document.getElementById("btn-weeding");
const btnPasangan = document.getElementById("btn-pasangan");
const btnWaktu = document.getElementById("btn-waktu");
const btnUcapan = document.getElementById("btn-ucapan");
const btnHadiah = document.getElementById("btn-hadiah");
const btnLokasi = document.getElementById("btn-lokasi");

// Pages
const home = document.getElementById("home");
const pasangan = document.getElementById("pasangan");
const waktu = document.getElementById("waktu");
const ucapan = document.getElementById("ucapan");
const hadiah = document.getElementById("hadiah");
const lokasi = document.getElementById("lokasi");

const textParam = window.location.search;
const deletePeren = textParam.replace("?", "");
const queryString = deletePeren.replaceAll("%20", " ");
const namaTU = (document.getElementById("tamu-undangan").innerHTML =
  queryString);

// Form Kehadiran
const form = document.getElementById("my-form");

// Bottom Konfirmasi Kehadiran
const btnKonfirm = document.getElementById("btnKonfirm");

// Bank
const btnRekBni = document.getElementById("btn-bni");
const tooltipCopyMandiri = document.getElementById("tooltip-copy-bni");

// Play Audio
function playAudio() {
  song.volume = 1;
  song.play();
  isPlaying = true;
}

// Rek Mandiri
const rekBni = async () => {
  try {
    await navigator.clipboard.writeText("1147467346");
    btnRekBni.innerHTML = "";
    btnRekBni.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  class="w-5 h-5 animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>`;
    setTimeout(() => {
      tooltipCopyMandiri.classList.remove("hidden");
      btnRekBni.innerHTML = "";
      btnRekBni.innerHTML = "Salin No. Rekening";
      setTimeout(() => {
        tooltipCopyMandiri.classList.add("hidden");
      }, 1000);
    }, 500);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  btnKonfirm.innerHTML = "";
  btnKonfirm.innerHTML = `
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                        Loading...
                                `;
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyoZ02Bee4rBLhiescNLj1GAY5iVJHZ_-LeY6ggYsNnWjnEraXcNwcOp5XWY1g7rojq/exec";

  const responseBody = new FormData(form);
  const TrendBody = responseBody.getAll("TRENDS").join(" ");
  responseBody.set("TRENDS", TrendBody);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  fetch(scriptURL, {
    method: "POST",
    body: responseBody,
  })
    .then((response) => {
      setTimeout(() => {
        btnKonfirm.innerHTML = "";
        btnKonfirm.innerHTML = "Konfirmasi kehadiran";
        Toast.fire({
          title: "Anda berhasil mengirimkan konfirmasi kehadiran!",
          icon: "success",
        });
        setTimeout(() => {
          const urlScript =
            "https://docs.google.com/spreadsheets/d/19tOoH-kcvWrmnw_pzHUewAgeE2QzGum9WX6DiaSRRzU/gviz/tq?tqx=out:csv&sheet=Sheet1";
          $.ajax({
            type: "GET",
            url: urlScript,
            dataType: "text",
            success: function (response) {
              console.log(response);
              var data = $.csv.toObjects(response);
              dataComment.innerHTML = "";
              for (let index = 0; index < data.length; index++) {
                dataComment.innerHTML += `<div class="flex flex-col gap-y-2 py-2 ">
                    <div class="flex flex-row gap-x-2">
                      <h1 class="font-bold text-primary font-kurale text-[16px]">${data[index]["nama"]}</h1>
                      <div
                        class="flex flex-row text-[10px] font-bold font-kurale text-white bg-primary rounded-md shadow-md px-[2px] py-[1px] justify-center items-center">
                        ${data[index]["status"]}
                      </div>
                    </div>
                    <p class="w-full text-primary font-kurale text-justify text-[10px]"> ${data[index]["ket"]}</p>
                  </div>`;
              }
            },
          });
        }, 10);
      }, 3000);
    })
    .catch((error) => alert("Error!", error.message));
});

document.getElementById("timeOut").value = time;
window.addEventListener("load", function () {
  sheetdb_upd();
  playAudio();
});
window.addEventListener("mousemove", function () {
  playAudio();
});

window.addEventListener("scroll", function () {
  playAudio();
});

const framePasangan = document.getElementById("frame-pasangan");
const frameHome = document.getElementById("frame-home");
const frameWaktu = document.getElementById("frame-waktu");
const frameLokasi = document.getElementById("frame-lokasi");
const frameUcapan = document.getElementById("frame-ucapan");
const frameHadiah = document.getElementById("frame-hadiah");

// Scroll
window.addEventListener("scroll", function () {
  console.log(this.window.scrollY);
  if (this.window.scrollY >= 0 && this.window.scrollY <= 150) {
    frameHome.classList.remove("hidden");
    framePasangan.classList.add("hidden");
    frameWaktu.classList.add("hidden");
    frameLokasi.classList.add("hidden");
  }

  if (this.window.scrollY >= 200 && this.window.scrollY <= 731) {
    frameWaktu.classList.add("hidden");
    framePasangan.classList.remove("hidden");
    frameLokasi.classList.add("hidden");
    frameUcapan.classList.add("hidden");
  }

  if (this.window.scrollY == 731) {
    frameWaktu.classList.add("hidden");
    frameHome.classList.add("hidden");
    frameLokasi.classList.add("hidden");
    frameUcapan.classList.add("hidden");
  }
  if (this.window.scrollY >= 1000 && this.window.scrollY <= 1262) {
    frameHome.classList.add("hidden");
    frameWaktu.classList.remove("hidden");
    framePasangan.classList.remove("hidden");
    frameLokasi.classList.add("hidden");
    frameUcapan.classList.add("hidden");
  }
  if (this.window.scrollY == 1462) {
    frameHome.classList.add("hidden");
    framePasangan.classList.add("hidden");
    frameLokasi.classList.add("hidden");
    frameUcapan.classList.add("hidden");
    frameHadiah.classList.add("hidden");
  }
  if (this.window.scrollY >= 1670 && this.window.scrollY <= 2191) {
    frameHome.classList.add("hidden");
    framePasangan.classList.add("hidden");
    frameWaktu.classList.remove("hidden");
    frameLokasi.classList.remove("hidden");
    frameUcapan.classList.add("hidden");
    frameHadiah.classList.add("hidden");
  }
  if (this.window.scrollY == 2193) {
    frameHome.classList.add("hidden");
    framePasangan.classList.add("hidden");
    frameWaktu.classList.add("hidden");
    frameLokasi.classList.remove("hidden");
    frameUcapan.classList.add("hidden");
    frameHadiah.classList.add("hidden");
  }

  if (this.window.scrollY >= 2345 && this.window.scrollY <= 2921) {
    frameHome.classList.add("hidden");
    framePasangan.classList.add("hidden");
    frameWaktu.classList.add("hidden");
    frameLokasi.classList.remove("hidden");
    frameUcapan.classList.remove("hidden");
    frameHadiah.classList.add("hidden");
  }
  if (this.window.scrollY == 2924) {
    frameHome.classList.add("hidden");
    framePasangan.classList.add("hidden");
    frameWaktu.classList.add("hidden");
    frameLokasi.classList.add("hidden");
    frameUcapan.classList.remove("hidden");
    frameHadiah.classList.add("hidden");
  }
  if (this.window.scrollY >= 2999 && this.window.scrollY <= 3600) {
    frameHome.classList.add("hidden");
    framePasangan.classList.add("hidden");
    frameWaktu.classList.add("hidden");
    frameLokasi.classList.add("hidden");
    frameUcapan.classList.remove("hidden");
    frameHadiah.classList.remove("hidden");
  }
  if (this.window.scrollY == 3655) {
    frameHome.classList.add("hidden");
    framePasangan.classList.add("hidden");
    frameWaktu.classList.add("hidden");
    frameLokasi.classList.add("hidden");
    frameUcapan.classList.add("hidden");
  }
});

btnHome.addEventListener("click", function (e) {
  e.preventDefault();
  framePasangan.classList.add("hidden");
  frameHome.classList.remove("hidden");
  window.location.href = "#home";
});

btnPasangan.addEventListener("click", function (e) {
  e.preventDefault();
  frameHome.classList.add("hidden");
  framePasangan.classList.remove("hidden");
  window.location.href = "#pasangan";
});

btnWaktu.addEventListener("click", function (e) {
  e.preventDefault();

  window.location.href = "#waktu";
});

btnUcapan.addEventListener("click", function (e) {
  e.preventDefault();

  window.location.href = "#ucapan";
});

btnHadiah.addEventListener("click", function (e) {
  e.preventDefault();

  window.location.href = "#hadiah";
});

btnLokasi.addEventListener("click", function (e) {
  e.preventDefault();

  window.location.href = "#lokasi";
});

// if (localStorage.getItem("buka") == "buka") {
//   playAudio();
//   sheetdb_upd();
//   // window.location.search = "";
//   bg.classList.remove("bg-primary");
//   bg.classList.add("bg-white");
//   audio.classList.remove("hidden");
//   // screen.classList.remove("hidden");
//   document.getElementById("nama").value = localStorage.getItem("tamu_undangan");
//   undanganTutup.innerHTML = "";
//   undanganBuka.classList.remove("hidden");
//   hero.classList.remove("animate-text-slide");
//   btnMenu.classList.remove("hidden");
// }

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
    // btnBukaUndangan.innerHTML = `
    //                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin">
    //                                     <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    //                                 </svg>
    //                                 Loading...

    //                             `;
    // setTimeout(() => {
    // btnBukaUndangan.innerHTML = `<svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       fill="none"
    //                       viewBox="0 0 24 24"
    //                       stroke-width="1.5"
    //                       stroke="currentColor"
    //                       class="w-5 h-5"
    //                     >
    //                       <path
    //                         strokeLinecap="round"
    //                         strokeLinejoin="round"
    //                         d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
    //                       />
    //                     </svg>
    //                     Buka undangan`;
    hero.classList.add("animate-text-slide");
    bg.classList.add("bg-primary");
    setTimeout(() => {
      // window.location.search = "";
      localStorage.setItem("buka", "buka");
      localStorage.setItem("tamu_undangan", queryString);
      bg.classList.remove("bg-primary");
      bg.classList.add("bg-white");
      undanganTutup.innerHTML = "";
      hero.classList.remove("animate-text-slide");
      btnMenu.classList.remove("hidden");
      document.getElementById("nama").value =
        localStorage.getItem("tamu_undangan");

      undanganBuka.classList.remove("hidden");
      audio.classList.remove("hidden");
      playAudio();
    }, 1500);
    // }, 10000);
  });
};

// function fullScreen() {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) {
//     /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) {
//     /* IE11 */
//     elem.msRequestFullscreen();
//   }
// }

function dataItemTemplate(item) {
  console.log(item);
  return `<li>
      <p>${item.name}</p>
      <p>${item.email}</p>
    </li>`;
}

const urlScript =
  "https://docs.google.com/spreadsheets/d/19tOoH-kcvWrmnw_pzHUewAgeE2QzGum9WX6DiaSRRzU/gviz/tq?tqx=out:csv&sheet=Sheet1";
$.ajax({
  type: "GET",
  url: urlScript,
  dataType: "text",
  success: function (response) {
    var data = $.csv.toObjects(response);

    for (let index = 0; index < data.length; index++) {
      dataComment.innerHTML += `<div class="flex flex-col gap-y-2 py-2 ">
                    <div class="flex flex-row gap-x-2">
                      <h1 class="font-bold text-primary font-kurale text-[16px]">${data[index]["nama"]}</h1>
                      <div
                        class="flex flex-row text-[10px] font-bold font-kurale text-white bg-primary rounded-md shadow-md px-[2px] py-[1px] justify-center items-center">
                        ${data[index]["status"]}
                      </div>
                    </div>
                    <p class="w-full text-primary font-kurale text-justify text-[10px]"> ${data[index]["ket"]}</p>
                  </div>`;
    }
  },
});
btnShowRek.addEventListener("click", function (e) {
  e.preventDefault();
  modalBNI.classList.add("flex");
  modalBNI.classList.remove("hidden");
});

btnModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  cModal.classList.add("fadeInTop");
  modalBNI.classList.add("hidden");
  modalBNI.classList.remove("flex");
});
// fullScreen();

undangan();
