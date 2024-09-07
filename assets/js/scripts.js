const clickBukaUndangan = document.getElementById("buka");
const undanganTutup = document.getElementById("undanganTutup");
const undanganBuka = document.getElementById("content");
const song = document.querySelector("#song");

const audioContainer = document.querySelector("#audio-container");
const iconSong = document.querySelector("#icon-song");
let isPlaying = false;
const btnRekBRI = document.getElementById("btn-bri");
const btnRekMandiri = document.getElementById("btn-mandiri");
const tooltipCopyBRI = document.getElementById("tooltip-copy-bri");
const tooltipCopyMandiri = document.getElementById("tooltip-copy-mandiri");
const form = document.getElementById("my-form");
document.getElementById("Nama").value = localStorage.getItem("tamu_undangan");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyoZ02Bee4rBLhiescNLj1GAY5iVJHZ_-LeY6ggYsNnWjnEraXcNwcOp5XWY1g7rojq/exec";

  const responseBody = new FormData(form);
  const TrendBody = responseBody.getAll("TRENDS").join(" ");
  responseBody.set("TRENDS", TrendBody);
  fetch(scriptURL, { method: "POST", body: responseBody })
    .then((response) => {
      Swal.fire({
        title: "Sukses",
        text: "Anda berhasil mengirimkan konfirmasi kehadiran!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => alert("Error!", error.message));
});

if (localStorage.getItem("buka") == "buka") {
  playAudio();
  undanganTutup.innerHTML = "";
  undanganBuka.classList.remove("hidden");
}

// Rek BRI
const btnBRI = async () => {
  try {
    await navigator.clipboard.writeText(489701025465539);
    btnRekBRI.innerHTML = "";
    btnRekBRI.innerHTML = `<svg
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
      tooltipCopyBRI.classList.remove("hidden");
      btnRekBRI.innerHTML = "";
      btnRekBRI.innerHTML = "Salin No. Rekening";
      setTimeout(() => {
        tooltipCopyBRI.classList.add("hidden");
      }, 1000);
    }, 500);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Rek Mandiri
const rekMandiri = async () => {
  try {
    await navigator.clipboard.writeText(1540016077574);
    btnRekMandiri.innerHTML = "";
    btnRekMandiri.innerHTML = `<svg
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
      btnRekMandiri.innerHTML = "";
      btnRekMandiri.innerHTML = "Salin No. Rekening";
      setTimeout(() => {
        tooltipCopyMandiri.classList.add("hidden");
      }, 1000);
    }, 500);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
const bukaUndangan = () => {
  clickBukaUndangan.addEventListener("click", function () {
    clickBukaUndangan.innerHTML = "";
    clickBukaUndangan.innerHTML = `<div class="flex flex-row items-center justify-center gap-x-2">
                <svg
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
                </svg>
                Loading...
              </div>`;
    setTimeout(() => {
      playAudio();
      localStorage.setItem("buka", "buka");
      undanganTutup.innerHTML = "";
      undanganBuka.classList.remove("hidden");
    }, 10000);
  });
};

// Playing AUdio
function playAudio() {
  song.volume = 0.1;
  song.play();
  isPlaying = true;
}

//   Click button play
iconSong.addEventListener("click", function () {
  if (isPlaying) {
    iconSong.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            id="icon-song"
            class="w-7 h-7 text-pink-500 animate-spin transition duration-200 font-bold cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>`;
    song.pause();
  } else {
    song.play();
    iconSong.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 text-pink-500 animate-spin transition duration-200 font-bold cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>`;
  }
  isPlaying = !isPlaying;
});

bukaUndangan();
