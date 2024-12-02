// card

const jsonData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com",
    image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 24 24" fill=white><path
            d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z">
        </path>
        </svg>`,
  },

  {
    name: "GitHub",
    link: "https://github.com",
    image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 30 30" fill="white">
        <path
            d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
        </path>
    </svg>`,
  },

  {
    name: "Gmail",
    link: "https://mail.google.com",
    image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256"
        style="fill:white">
        <g fill="white" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M12,23.403v-0.013v-13.001l-0.12,-0.089h-0.01l-2.73,-2.02c-1.67,-1.24 -4.05,-1.18 -5.53,0.28c-0.99,0.98 -1.61,2.34 -1.61,3.85v3.602zM38,23.39v0.013l10,-7.391v-3.602c0,-1.49 -0.6,-2.85 -1.58,-3.83c-1.46,-1.457 -3.765,-1.628 -5.424,-0.403l-2.876,2.123l-0.12,0.089zM14,24.868l10.406,7.692c0.353,0.261 0.836,0.261 1.189,0l10.405,-7.692v-13.001l-11,8.133l-11,-8.133zM38,25.889v15.111c0,0.552 0.448,1 1,1h6.5c1.381,0 2.5,-1.119 2.5,-2.5v-21.003zM12,25.889l-10,-7.392v21.003c0,1.381 1.119,2.5 2.5,2.5h6.5c0.552,0 1,-0.448 1,-1z"></path></g></g>
        </svg>`,
  },

  {
    name: "Codepen",
    link: "https://codepen.io/following",
    image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 50 50" fill="white">
        <path
            d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z">
        </path>
    </svg>`,
  },

  {
    name: "Chat-GPT",
    link: "https://chat.openai.com/",
    image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 24 24" fill="white">
        <path
            d="M 11.134766 1.0175781 C 10.87173 1.0049844 10.606766 1.0088281 10.337891 1.0332031 C 8.1135321 1.2338971 6.3362243 2.7940749 5.609375 4.8203125 C 3.8970488 5.1768547 2.4372723 6.3040092 1.671875 7.9570312 C 0.73398779 9.9832932 1.1972842 12.300966 2.5878906 13.943359 C 2.0402798 15.605243 2.2847784 17.435582 3.3320312 18.923828 C 4.6182099 20.749715 6.8585216 21.506646 8.9765625 21.123047 C 10.141577 22.428211 11.848518 23.131209 13.662109 22.966797 C 15.886468 22.766103 17.663776 21.205925 18.390625 19.179688 C 20.102951 18.823145 21.562728 17.695991 22.328125 16.042969 C 23.266012 14.016707 22.802716 11.699034 21.412109 10.056641 C 21.95972 8.394757 21.715222 6.5644177 20.667969 5.0761719 C 19.38179 3.2502847 17.141478 2.4933536 15.023438 2.8769531 C 14.031143 1.7652868 12.645932 1.0899306 11.134766 1.0175781 z M 11.025391 2.5136719 C 11.920973 2.5488153 12.753413 2.8736921 13.429688 3.4199219 C 13.316626 3.4759644 13.19815 3.514457 13.087891 3.578125 L 8.5820312 6.1796875 L 8.5175781 12.238281 L 6.75 11.189453 L 6.75 6.7851562 C 6.75 4.6491563 8.3075938 2.74225 10.433594 2.53125 C 10.632969 2.5115 10.83048 2.5060234 11.025391 2.5136719 z M 16.125 4.2558594 C 17.398584 4.263418 18.639844 4.8251563 19.417969 5.9101562 C 20.070858 6.819587 20.310242 7.9019929 20.146484 8.9472656 C 20.04127 8.8772414 19.948325 8.7942374 19.837891 8.7304688 L 15.332031 6.1289062 L 10.052734 9.1035156 L 10.076172 7.0488281 L 13.890625 4.8476562 C 14.584375 4.4471562 15.36085 4.2513242 16.125 4.2558594 z M 5.2832031 6.4726562 C 5.2752078 6.5985272 5.25 6.7203978 5.25 6.8476562 L 5.25 12.050781 L 10.464844 15.136719 L 8.6738281 16.142578 L 4.859375 13.939453 C 3.009375 12.871453 2.1375781 10.567094 3.0175781 8.6210938 C 3.4795583 7.6006836 4.2963697 6.8535791 5.2832031 6.4726562 z M 15.326172 7.8574219 L 19.140625 10.060547 C 20.990625 11.128547 21.864375 13.432906 20.984375 15.378906 C 20.522287 16.399554 19.703941 17.146507 18.716797 17.527344 C 18.724792 17.401473 18.75 17.279602 18.75 17.152344 L 18.75 11.949219 L 13.535156 8.8632812 L 15.326172 7.8574219 z M 12.025391 9.7109375 L 13.994141 10.878906 L 13.966797 13.167969 L 11.974609 14.287109 L 10.005859 13.121094 L 10.03125 10.832031 L 12.025391 9.7109375 z M 15.482422 11.761719 L 17.25 12.810547 L 17.25 17.214844 C 17.25 19.350844 15.692406 21.25775 13.566406 21.46875 C 12.450934 21.579248 11.393768 21.245187 10.570312 20.580078 C 10.683374 20.524036 10.80185 20.485543 10.912109 20.421875 L 15.417969 17.820312 L 15.482422 11.761719 z M 13.947266 14.896484 L 13.923828 16.951172 L 10.109375 19.152344 C 8.259375 20.220344 5.8270313 19.825844 4.5820312 18.089844 C 3.9291425 17.180413 3.6897576 16.098007 3.8535156 15.052734 C 3.9587303 15.122759 4.0516754 15.205763 4.1621094 15.269531 L 8.6679688 17.871094 L 13.947266 14.896484 z">
        </path>
    </svg>`,
  },

  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/",
    image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 64 64" fill="white">
        <path
            d="M 38.949219 6.9921875 L 35.730469 9.3886719 L 47.707031 25.492188 L 50.927734 23.097656 L 38.949219 6.9921875 z M 31.5625 13.402344 L 28.994141 16.486328 L 44.417969 29.330078 L 46.986328 26.246094 L 31.5625 13.402344 z M 25.654297 21.773438 L 23.960938 25.412109 L 42.152344 33.884766 L 43.847656 30.246094 L 25.654297 21.773438 z M 22.1875 30.888672 L 21.361328 34.816406 L 41.001953 38.943359 L 41.826172 35.017578 L 22.1875 30.888672 z M 13.003906 36.005859 L 13.003906 52 L 48.994141 52 L 48.994141 36.005859 L 44.994141 36.005859 L 44.994141 48.001953 L 17.003906 48.001953 L 17.003906 36.005859 L 13.003906 36.005859 z M 21.001953 40.003906 L 21.001953 44.001953 L 40.996094 44.001953 L 40.996094 40.003906 L 21.001953 40.003906 z">
        </path>
    </svg>`,
  },

  {
    name: "Google Drive",
    link: "https://drive.google.com",
    image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 50 50" fill="white">
        <path
            d="M45.58 31H32.61L19.73 6h10.754c.726 0 1.394.393 1.747 1.027L45.58 31zM23.37 17.43L9.94 43.2 3.482 33.04c-.395-.622-.417-1.411-.055-2.053L17.48 6 23.37 17.43zM45.54 33l-6.401 10.073C38.772 43.65 38.136 44 37.451 44H11.78l5.73-11H45.54z">
        </path>
    </svg>`,
  },

  {
    name: "Vs Code",
    link: "https://vscode.dev/",
    image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" fill="white">
        <path d="M 35.445312 2.0117188 C 35.056812 2.0253438 34.669266 2.1265938 34.322266 2.3085938 C 35.227266 2.7565937 35.865703 3.6414062 35.970703 4.6914062 C 35.988703 4.8174062 36 4.9322812 36 4.9882812 L 36 44.988281 C 36 46.174281 35.306594 47.190734 34.308594 47.677734 C 34.672594 47.876734 35.079 47.988281 35.5 47.988281 C 35.873 47.988281 36.224969 47.901859 36.542969 47.755859 L 36.544922 47.759766 C 38.152922 46.927766 46.192281 42.764703 46.488281 42.595703 C 47.421281 42.060703 48 41.061281 48 39.988281 L 48 9.9882812 C 48 8.9902813 47.505734 8.0619062 46.677734 7.5039062 C 46.357734 7.2869063 36.582031 2.2363281 36.582031 2.2363281 L 36.580078 2.2402344 C 36.224078 2.0727344 35.833813 1.9980938 35.445312 2.0117188 z M 33 3.9882812 C 32.744125 3.9882812 32.487969 4.08575 32.292969 4.28125 C 32.292969 4.28125 26.568469 10.718844 20.230469 17.839844 L 27.724609 23.970703 L 34 18.685547 L 34 4.9882812 C 34 4.7322812 33.902031 4.47625 33.707031 4.28125 C 33.511531 4.08575 33.255875 3.9882812 33 3.9882812 z M 8 10.988281 C 7.844 10.988281 7.5538594 10.988844 6.2558594 11.589844 C 5.5408594 11.920844 3.0507812 13.228516 3.0507812 13.228516 C 2.7207812 13.407516 2.4545781 13.687719 2.2675781 14.011719 C 2.3435781 13.999719 2.4190469 13.988281 2.4980469 13.988281 L 2.5 13.988281 C 3.168 13.988281 3.5776562 14.454469 3.7226562 14.605469 C 3.7226562 14.605469 31.929969 45.332313 32.292969 45.695312 C 32.487969 45.890313 32.742047 45.988281 32.998047 45.988281 C 33.254047 45.988281 33.510078 45.890313 33.705078 45.695312 C 33.900078 45.500312 34 45.244281 34 44.988281 L 34 31.658203 C 34 31.658203 9.53375 11.661813 9.34375 11.507812 C 8.97575 11.173813 8.497 10.988281 8 10.988281 z M 2.1992188 15.988281 C 2.0892188 15.988281 2 16.078453 2 16.189453 L 2 34.794922 C 2 34.901922 2.0873125 34.990234 2.1953125 34.990234 C 2.2513125 34.990234 2.3009375 34.964781 2.3359375 34.925781 L 8 28.638672 L 8 22.007812 L 2.3417969 16.046875 C 2.3057969 16.010875 2.2542188 15.988281 2.1992188 15.988281 z M 12.253906 26.802734 C 12.253906 26.802734 3.6585469 36.452781 3.5605469 36.550781 C 3.2895469 36.821781 2.915 36.988281 2.5 36.988281 C 2.422 36.988281 2.3464844 36.978797 2.2714844 36.966797 C 2.4734844 37.317797 2.7697188 37.607156 3.1367188 37.785156 L 3.1328125 37.791016 C 4.0028125 38.233016 6.8739531 39.691703 7.2519531 39.845703 C 7.4899531 39.940703 7.741 39.988281 8 39.988281 C 8.347 39.988281 8.6900469 39.898656 8.9980469 39.722656 C 9.0210469 39.709656 17.527344 32.552734 17.527344 32.552734 L 12.253906 26.802734 z"></path>
    </svg>`,
  },
];

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="cardv2" onclick="window.location.href='${data.link}';">
    <div class="content">
        <div class="back-card bg-dark">
            <div class="back-content bg-dark">
                ${data.image}
                <strong>${data.name}</strong>
            </div>
        </div>
        <div class="front-card bg-dark">

            <div class="img">
                <div class="circle">
                </div>
                <div class="circle" id="bottom">
                </div>
            </div>

            <div class="front-content">
                <div class="description bg-dark-2">
                    <div class="title">
                        <p class="title">
                            <strong>Get-Link</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
  return card;
}

let count = 0;
const maxItems = 9;

jsonData.some((data) => {
  if (count >= maxItems) {
    return true; // Berhenti loop
  }

  const card = createCard(data);
  const cardList = document.querySelector(".list-card");
  cardList.appendChild(card);

  count++;

  return false; // Lanjutkan loop
});

// seacrh
var searchInput = document.getElementById("input-google");
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function forceString(input) {
  return String(input);
}

function sanitizeInput(input) {
  var stringInput = forceString(input);
  var sanitizedInput = stringInput.replace(/[^a-zA-Z0-9 ]/g, "");
  return sanitizedInput;
}

function performSearch() {
  var searchTerms = document.getElementById("input-google").value;
  var sanitizedSearchTerms = sanitizeInput(searchTerms);
  window.location.href =
    "https://www.google.com/search?q=" +
    encodeURIComponent(sanitizedSearchTerms);
}

function openModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden");
  document.getElementById(modalId).classList.add("flex");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
  document.getElementById(modalId).classList.remove("flex");
  document.getElementById("temperatureOutput").textContent = "";
  document.getElementById("areaOutput").textContent = "";
  document.getElementById("celciusInput").value = "";
  document.getElementById("alasInput").value = "";
  document.getElementById("tinggiInput").value = "";
}

function convertTemperature() {
  let celcius = parseFloat(document.getElementById("celciusInput").value);
  if (isNaN(celcius)) {
    document.getElementById("temperatureOutput").textContent =
      "Harap masukkan suhu yang valid.";
    return;
  }
  let fahrenheit = (9 / 5) * celcius + 32;
  document.getElementById(
    "temperatureOutput"
  ).textContent = `Suhu dalam Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
}

function calculateArea() {
  let alas = parseInt(document.getElementById("alasInput").value);
  let tinggi = parseInt(document.getElementById("tinggiInput").value);

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    document.getElementById("areaOutput").textContent =
      "Harap masukkan nilai alas dan tinggi yang valid.";
    return;
  }

  let luas = 0.5 * alas * tinggi;
  document.getElementById(
    "areaOutput"
  ).textContent = `Luas segitiga: ${luas.toFixed(2)}`;
}

function calculateRectangleArea() {
  let panjang = parseInt(document.getElementById("panjangInput").value);
  let lebar = parseInt(document.getElementById("lebarInput").value);

  if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
    document.getElementById("rectangleAreaOutput").textContent =
      "Harap masukkan nilai panjang dan lebar yang valid.";
    return;
  }

  let luas = panjang * lebar;
  document.getElementById(
    "rectangleAreaOutput"
  ).textContent = `Luas persegi panjang: ${luas}`;
}

//   logika for kipas angin
// script.js
let isRunning = false; // Status kipas, apakah sedang berputar atau tidak
let currentSpeed = 2; // Kecepatan default (sedang)

// Pastikan kipas tidak berputar dan tombol dalam keadaan benar saat halaman dimuat
window.onload = function () {
  const kipas = document.getElementById("kipas");
  const button = document.getElementById("toggleButton");

  kipas.style.animationPlayState = "paused"; // Kipas tidak berputar saat halaman dimuat
  kipas.style.animationDuration = `${currentSpeed}s`; // Set kecepatan default

  // Sesuaikan tombol menjadi "Hidupkan Kipas"
  button.textContent = "ON";
};

// Menangani klik tombol untuk menghidupkan/mematikan kipas
document.getElementById("toggleButton").addEventListener("click", function () {
  const kipas = document.getElementById("kipas");
  const button = document.getElementById("toggleButton");

  if (isRunning) {
    // Jika kipas sedang berputar, hentikan animasi
    kipas.style.animationPlayState = "paused";
    button.textContent = "ON";
    isRunning = false;
  } else {
    // Jika kipas berhenti, mulai animasi dengan kecepatan yang sesuai
    kipas.style.animationPlayState = "running";
    kipas.style.animationDuration = `${currentSpeed}s`; // Mengatur durasi animasi sesuai kecepatan
    button.textContent = "OFF";
    isRunning = true;
  }
});

// Fungsi untuk mengatur kecepatan animasi
document.getElementById("lowSpeed").addEventListener("click", function () {
  currentSpeed = 4; // Kecepatan rendah, durasi 4 detik
  if (isRunning) {
    document.getElementById(
      "kipas"
    ).style.animationDuration = `${currentSpeed}s`;
  }
});

document.getElementById("mediumSpeed").addEventListener("click", function () {
  currentSpeed = 2; // Kecepatan sedang, durasi 2 detik
  if (isRunning) {
    document.getElementById(
      "kipas"
    ).style.animationDuration = `${currentSpeed}s`;
  }
});

document.getElementById("highSpeed").addEventListener("click", function () {
  currentSpeed = 1; // Kecepatan tinggi, durasi 1 detik
  if (isRunning) {
    document.getElementById(
      "kipas"
    ).style.animationDuration = `${currentSpeed}s`;
  }
});

// program simulasi lampu led
// Array warna untuk setiap lampu
const lampColors = [
  "red", // Lampu 1
  "blue", // Lampu 2
  "yellow", // Lampu 3
  "purple", // Lampu 4
  "orange", // Lampu 5
];

function toggleLamp(lampNumber) {
  const led = document.getElementById(`led${lampNumber}`);
  led.classList.toggle("on");

  // Mengatur warna LED saat dinyalakan
  if (led.classList.contains("on")) {
    led.style.backgroundColor = lampColors[lampNumber - 1]; // Menggunakan warna dari array
  } else {
    led.style.backgroundColor = "#ccc"; // Warna default saat mati
  }
}
