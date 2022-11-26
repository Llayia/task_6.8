const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
}

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl1.style.background = ('black');
    trafficLightEl3.style.background = ('black');
}

function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
}



trafficLightEl1.addEventListener('click', makeGreen);
trafficLightEl2.addEventListener('click', makeYellow);
trafficLightEl3.addEventListener('click', makeRed);

