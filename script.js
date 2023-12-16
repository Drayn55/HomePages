function updateDateTime() {

    updateDayList();

    const Today = new Date();
    const Month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const TodayString = Today.getDate() + ' ' + Month[Today.getMonth()] + ' ' + Today.getFullYear();
    const HoursAndMinutes = new Intl.DateTimeFormat('default', { hour: '2-digit', minute: '2-digit' }).format(Today);
    const dayListItems = document.querySelectorAll('#day-list li');

    document.getElementById('datehours').innerHTML = HoursAndMinutes;
    document.getElementById('datetime').innerHTML = TodayString;

    for (let i = 0; i < dayListItems.length; i++) {
        if (i === Today.getDay()) {
            dayListItems[i].classList.add('active');
        } else {
            dayListItems[i].classList.remove('active');
        }
    }
}

function updateDayList() {
    const days = ['Sun', 'Mon', 'Tus', 'We', 'The', 'Fri', 'Sat'];
    const dayList = document.getElementById('day-list');

    while (dayList.firstChild) {
        dayList.removeChild(dayList.firstChild);
    }

    for (let i = 0; i < days.length; i++) {
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days[i];
        dayList.appendChild(dayListItem);
    }
}

updateDateTime();
setInterval(updateDateTime, 5000);

var searchInput = document.getElementById('input-google');
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function forceString(input) {
    return String(input);
}

function sanitizeInput(input) {
    var stringInput = forceString(input);
    var sanitizedInput = stringInput.replace(/[^a-zA-Z0-9 ]/g, '');
    return sanitizedInput;
}

function performSearch() {
    var searchTerms = document.getElementById('input-google').value;
    var sanitizedSearchTerms = sanitizeInput(searchTerms);
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(sanitizedSearchTerms);
}

// dark mode

const oclock = document.querySelector('.oclock');
const header = document.querySelector('.header');
const backContent = document.querySelectorAll(".back-content");
const navigator = document.querySelector('.navigator');
const optionNavigation = document.querySelector('.opstion');
const modeTheme = document.querySelector('.mode-theme');
const inputGoogle = document.getElementById('input-google');

let darkMode = false;
function toggleDarkMode() {
    darkMode = !darkMode;
    const applyDarkMode = (darkMode) => {
        navigator.classList.toggle('text-dark-mode', darkMode);
        header.classList.toggle('background-transparant-dark-mode', darkMode);
        oclock.classList.toggle('text-dark-mode', darkMode);
        oclock.classList.toggle('background-dark-mode', darkMode);
        inputGoogle.classList.toggle('background-transparant-day-mode', darkMode);
        backContent.forEach(backContent => {
            backContent.classList.toggle('background-dark-mode-item', darkMode);
        });
    };
    applyDarkMode(darkMode);
}
modeTheme.addEventListener('click', toggleDarkMode);

// dark sun

const sun = document.querySelectorAll('.sun')[1];
const container = document.querySelector('.container');
const moon = document.querySelector('.moon');

modeTheme.addEventListener("click", function () {
    moon.classList.toggle('moonActive');
    sun.classList.toggle('dark-sun');
    container.classList.toggle('bg-dark')
})

// card

const jsonData = [
    {
        name: 'YouTube',
        link: 'https://www.youtube.com',
        image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 24 24" fill=white><path
            d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z">
        </path>
        </svg>`
    },

    {
        name: 'GitHub',
        link: 'https://github.com',
        image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 30 30" fill="white">
        <path
            d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
        </path>
    </svg>`
    },

    {
        name: 'Netflix',
        link: 'https://www.netflix.com',
        image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 24 24" fill="white">
        <path
            d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M16,17.625 c0,0-0.009,0.003-0.011,0.004c-0.001,0.09-0.023,0.178-0.086,0.248C15.83,17.957,15.729,18,15.625,18c-0.009,0-0.06,0-0.132-0.023 c-0.301-0.097-1.07-0.373-1.635-0.474c-0.15-0.027-0.276-0.127-0.346-0.262L10.5,11.352v5.773c0,0.184-0.132,0.34-0.313,0.37 c-0.704,0.117-1.67,0.478-1.68,0.481C8.464,17.992,8.419,18,8.375,18c-0.075,0-0.15-0.022-0.213-0.066 C8.061,17.863,8,17.748,8,17.625V6.375C8,6.168,8.168,6,8.375,6h1.75l0,0l0,0c0.143,0,0.274,0.081,0.336,0.21l3.038,6.214V6.375 C13.5,6.168,13.668,6,13.875,6h1.75C15.832,6,16,6.168,16,6.375V17.625z">
        </path>
    </svg>`
    },

    {
        name: 'Codepen',
        link: 'https://codepen.io/following',
        image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 50 50" fill="white">
        <path
            d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z">
        </path>
    </svg>`
    },

    {
        name: 'Chat-GPT',
        link: 'https://chat.openai.com/',
        image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 24 24" fill="white">
        <path
            d="M 11.134766 1.0175781 C 10.87173 1.0049844 10.606766 1.0088281 10.337891 1.0332031 C 8.1135321 1.2338971 6.3362243 2.7940749 5.609375 4.8203125 C 3.8970488 5.1768547 2.4372723 6.3040092 1.671875 7.9570312 C 0.73398779 9.9832932 1.1972842 12.300966 2.5878906 13.943359 C 2.0402798 15.605243 2.2847784 17.435582 3.3320312 18.923828 C 4.6182099 20.749715 6.8585216 21.506646 8.9765625 21.123047 C 10.141577 22.428211 11.848518 23.131209 13.662109 22.966797 C 15.886468 22.766103 17.663776 21.205925 18.390625 19.179688 C 20.102951 18.823145 21.562728 17.695991 22.328125 16.042969 C 23.266012 14.016707 22.802716 11.699034 21.412109 10.056641 C 21.95972 8.394757 21.715222 6.5644177 20.667969 5.0761719 C 19.38179 3.2502847 17.141478 2.4933536 15.023438 2.8769531 C 14.031143 1.7652868 12.645932 1.0899306 11.134766 1.0175781 z M 11.025391 2.5136719 C 11.920973 2.5488153 12.753413 2.8736921 13.429688 3.4199219 C 13.316626 3.4759644 13.19815 3.514457 13.087891 3.578125 L 8.5820312 6.1796875 L 8.5175781 12.238281 L 6.75 11.189453 L 6.75 6.7851562 C 6.75 4.6491563 8.3075938 2.74225 10.433594 2.53125 C 10.632969 2.5115 10.83048 2.5060234 11.025391 2.5136719 z M 16.125 4.2558594 C 17.398584 4.263418 18.639844 4.8251563 19.417969 5.9101562 C 20.070858 6.819587 20.310242 7.9019929 20.146484 8.9472656 C 20.04127 8.8772414 19.948325 8.7942374 19.837891 8.7304688 L 15.332031 6.1289062 L 10.052734 9.1035156 L 10.076172 7.0488281 L 13.890625 4.8476562 C 14.584375 4.4471562 15.36085 4.2513242 16.125 4.2558594 z M 5.2832031 6.4726562 C 5.2752078 6.5985272 5.25 6.7203978 5.25 6.8476562 L 5.25 12.050781 L 10.464844 15.136719 L 8.6738281 16.142578 L 4.859375 13.939453 C 3.009375 12.871453 2.1375781 10.567094 3.0175781 8.6210938 C 3.4795583 7.6006836 4.2963697 6.8535791 5.2832031 6.4726562 z M 15.326172 7.8574219 L 19.140625 10.060547 C 20.990625 11.128547 21.864375 13.432906 20.984375 15.378906 C 20.522287 16.399554 19.703941 17.146507 18.716797 17.527344 C 18.724792 17.401473 18.75 17.279602 18.75 17.152344 L 18.75 11.949219 L 13.535156 8.8632812 L 15.326172 7.8574219 z M 12.025391 9.7109375 L 13.994141 10.878906 L 13.966797 13.167969 L 11.974609 14.287109 L 10.005859 13.121094 L 10.03125 10.832031 L 12.025391 9.7109375 z M 15.482422 11.761719 L 17.25 12.810547 L 17.25 17.214844 C 17.25 19.350844 15.692406 21.25775 13.566406 21.46875 C 12.450934 21.579248 11.393768 21.245187 10.570312 20.580078 C 10.683374 20.524036 10.80185 20.485543 10.912109 20.421875 L 15.417969 17.820312 L 15.482422 11.761719 z M 13.947266 14.896484 L 13.923828 16.951172 L 10.109375 19.152344 C 8.259375 20.220344 5.8270313 19.825844 4.5820312 18.089844 C 3.9291425 17.180413 3.6897576 16.098007 3.8535156 15.052734 C 3.9587303 15.122759 4.0516754 15.205763 4.1621094 15.269531 L 8.6679688 17.871094 L 13.947266 14.896484 z">
        </path>
    </svg>`
    },

    {
        name: 'Stack Overflow',
        link: 'https://stackoverflow.com/',
        image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 64 64" fill="white">
        <path
            d="M 38.949219 6.9921875 L 35.730469 9.3886719 L 47.707031 25.492188 L 50.927734 23.097656 L 38.949219 6.9921875 z M 31.5625 13.402344 L 28.994141 16.486328 L 44.417969 29.330078 L 46.986328 26.246094 L 31.5625 13.402344 z M 25.654297 21.773438 L 23.960938 25.412109 L 42.152344 33.884766 L 43.847656 30.246094 L 25.654297 21.773438 z M 22.1875 30.888672 L 21.361328 34.816406 L 41.001953 38.943359 L 41.826172 35.017578 L 22.1875 30.888672 z M 13.003906 36.005859 L 13.003906 52 L 48.994141 52 L 48.994141 36.005859 L 44.994141 36.005859 L 44.994141 48.001953 L 17.003906 48.001953 L 17.003906 36.005859 L 13.003906 36.005859 z M 21.001953 40.003906 L 21.001953 44.001953 L 40.996094 44.001953 L 40.996094 40.003906 L 21.001953 40.003906 z">
        </path>
    </svg>`
    },

    {
        name: 'Google Drive',
        link: 'https://drive.google.com',
        image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 50 50" fill="white">
        <path
            d="M45.58 31H32.61L19.73 6h10.754c.726 0 1.394.393 1.747 1.027L45.58 31zM23.37 17.43L9.94 43.2 3.482 33.04c-.395-.622-.417-1.411-.055-2.053L17.48 6 23.37 17.43zM45.54 33l-6.401 10.073C38.772 43.65 38.136 44 37.451 44H11.78l5.73-11H45.54z">
        </path>
    </svg>`
    },

    {
        name: 'Jira',
        link: 'https://www.atlassian.com/software/jira?&aceid=&adposition=&adgroup=151705168060&campaign=20329855374&creative=679894919195&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p77096705535&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gad_source=1&gclid=CjwKCAiAvdCrBhBREiwAX6-6UjpizaiYkhjIpCBGohPmZrM6tdEf8V3dR1QYKtN80focw1Iay33B3BoC8uYQAvD_BwE&gclsrc=aw.ds',
        image: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
        viewBox="0 0 44.169 45.988" fill="white">
        <path
            d="M 21.955078 0 A 1.029 1.029 0 0 0 21.292969 0.28125 A 11.988 11.988 0 0 0 18 7.9882812 A 11.982 11.982 0 0 0 21.292969 15.699219 L 22.169922 16.578125 L 23.5 17.900391 L 28.585938 22.986328 L 23.5 28.074219 L 24.292969 28.867188 A 13.886 13.886 0 0 1 28.171875 37.988281 A 11.481 11.481 0 0 1 27.880859 40.521484 L 43.292969 25.109375 A 3 3 0 0 0 43.292969 20.867188 L 22.705078 0.28125 A 1.029 1.029 0 0 0 21.955078 0 z M 16.289062 5.4550781 L 0.87695312 20.867188 A 3 3 0 0 0 0.87695312 25.109375 L 21.462891 45.699219 A 1 1 0 0 0 22.876953 45.699219 A 11.982 11.982 0 0 0 26.169922 37.992188 A 11.988 11.988 0 0 0 22.876953 30.285156 L 15.583984 22.988281 L 20.669922 17.900391 L 19.876953 17.107422 A 13.877 13.877 0 0 1 16 7.9882812 A 11.478 11.478 0 0 1 16.289062 5.4550781 z">
        </path>
    </svg>`
    },

];

function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card" onclick="window.location.href='${data.link}';">
    <div class="content">
        <div class="back-card">
            <div class="back-content">
                ${data.image}
                <strong>${data.name}</strong>
            </div>
        </div>
        <div class="front-card">

            <div class="img">
                <div class="circle">
                </div>
                <div class="circle" id="bottom">
                </div>
            </div>

            <div class="front-content">
                <div class="description">
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

jsonData.forEach(data => {
    const card = createCard(data);
    const cardList = document.querySelector('.list-card');
    cardList.appendChild(card);
});