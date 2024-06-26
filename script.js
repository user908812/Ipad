let searchbar = document.getElementById('searchbar');

    let renderTime = document.getElementById('time');

    function renderCurrentTime(date, hours, minutes, seconds, currentTime) {
        date = new Date();

        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        currentTime = `${hours}:${minutes}:${seconds}`.toString();
        renderTime.innerHTML = currentTime;
    }

    setInterval(renderCurrentTime, 950);
let appID = 0;

document.body.addEventListener('keydown', (e) => {

    if (e.key == 'ArrowUp' || e.key == 'ArrowRight') {
        appID++;
    } else if (e.key == 'ArrowDown' || e.key == 'ArrowLeft') {
        appID--;
    }

    if (appID <= 0) {
        searchbar.value = 'null';
        appID = 0;
    } else if (appID == 1) {
        searchbar.value = 'tictactoe';
        appID = 1;
    } else if (appID == 2) {
        searchbar.value = 'minecraft';
        appID = 2;
    } else if (appID == 3) {
        searchbar.value = 'amongTheBullets';
        appID = 3;
    } else if (appID == 4) {
        searchbar.value = 'orzechBrowser';
        appID = 4;
    } else if (appID == 5) {
        searchbar.value = 'robloxWebsite';
        appID = 5;
    } else if (appID == 6) {
        searchbar.value = 'orzechgpt';
        appID = 6;
    } else if (appID == 7) {
        searchbar.value = 'fnafMovie';
        appID = 7;
    } else if (appID == 8) {
        searchbar.value = 'weather';
        appID = 8;
    } else if (appID == 9) {
        searchbar.value = 'dino';
        appID = 9;
    } else if (appID >= 10) {
        searchbar.value = 'capybara';
        appID = 10;
    }

    if (e.key == 'Enter') {
        switch(appID) {
            case 0:
                alert('You have to select an app!');
                break;
            case 1:
                runTicTacToe();
                break;
            case 2:
                runMinecraft();
                break;
            case 3:
                runAmongTheBullets();
                break;
            case 4:
                runOrzechBrowser();
                break;
            case 5:
                runRobloxWebsite();
                break;
            case 6:
                runOrzechGPT();
                break;
            case 7:
                runFnaf();
                break;
            case 8:
                runWeatherAPP();
                break;
            case 9:
                runChromeDino();
                break;
            case 10:
                runCapybaraChatting();
                break;
        }
    }
    switch(e.key) {
        case '0':
            searchbar.value = 'null';
            appID = 0;
            break;
        case '1':
            searchbar.value = 'tictactoe';
            appID = 1;
            break;
        case '2':
            searchbar.value = 'minecraft';
            appID = 2;
            break;
        case '3':
            searchbar.value = 'amongTheBullets';
            appID = 3;
            break;
        case '4':
            searchbar.value = 'orzechBrowser';
            appID = 4;
            break;
        case '5':
            searchbar.value = 'robloxWebsite';
            appID = 5;
            break;
        case '6':
            searchbar.value = 'orzechgpt';
            appID = 6;
            break;
        case '7':
            searchbar.value = 'fnafMovie';
            appID = 7;
            break;
        case '8':
            searchbar.value = 'weather';
            appID = 8;
            break;
        case '9':
            searchbar.value = 'dino';
            appID = 9;
            break;
    }
});
function runTicTacToe() {
    window.open('https://user908812.github.io/TicTacToe/', '_blank');
}
function runMinecraft() {
    window.open('https://user908812.github.io/Minecraft/', '_blank');
}
function runAmongTheBullets() {
    window.open('https://user908812.github.io/AmongTheBullets/', '_blank');
}
function runOrzechBrowser() {
    window.open('https://user908812.github.io/OrzechBrowser/', '_blank');
}
function runRobloxWebsite() {
    window.open('https://user908812.github.io/Robloxcopy/', '_blank');
}
function runOrzechGPT() {
    window.open('https://user908812.github.io/Orzechgpt/', '_blank');
}
function runFnaf() {
    window.open('https://user908812.github.io/Fnaf/', '_blank');
}
function runWeatherAPP() {
    window.open('https://user908812.github.io/Weather/', '_blank');
}
function runChromeDino() {
    window.open('https://user908812.github.io/Dino/', '_blank');
}
function runCapybaraChatting() {
    window.open('https://user908812.github.io/Chat/', '_blank');
}

function openSelectedApp() {
    searchbar.value == 'tictactoe' ? runTicTacToe() : false;
    searchbar.value == 'minecraft' ? runMinecraft() : false;
    searchbar.value == 'amongTheBullets' ? runAmongTheBullets() : false;
    searchbar.value == 'orzechBrowser' ? runOrzechBrowser() : false;
    searchbar.value == 'robloxWebsite' ? runRobloxWebsite() : false;
    searchbar.value == 'orzechgpt' ? runOrzechGPT() : false;
    searchbar.value == 'fnafMovie' ? runFnaf() : false;
    searchbar.value == 'weather' ? runWeatherAPP() : false;
    searchbar.value == 'dino' ? runChromeDino() : false;
    searchbar.value == 'capybara' ? runCapybaraChatting() : false;
}

let powerButton = document.getElementById('powerButton');
powerButton.addEventListener('click', () => {
    let screen = document.getElementById('screen');
    screen.hidden = true;

    powerButton.style.position = 'absolute';
    powerButton.style.top = '800px';
    powerButton.style.left = '922px';
});