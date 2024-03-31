let cityNames = Array.from(document.getElementsByClassName('main__city'));

let dot = Array.from(document.getElementsByClassName('dot'));

let arrowLeft = document.querySelector('.arrow__left');
let arrowRight = document.querySelector('.arrow__right');

let imageRoom = document.querySelector('.main__room');
let city = document.querySelector('.main__span_city');
let apartmentArea = document.querySelector('.main__span_m2');
let repairTime = document.querySelector('.main__span_months');
let repairCost = document.querySelector('.main__span_request');

let currentIndex = 0;

const slider = [
  {
    imageLink: 'Images/PNG/room01.png',
    city: 'Rostov-on-Don LCD admiral',
    apartmentArea: '81 m2',
    repairTime: '3.5 months',
    repairCost: 'Upon request'
  },
  {
    imageLink: 'Images/PNG/room02.png',
    city: 'Sochi Thieves',
    apartmentArea: '105 m2',
    repairTime: '4 months',
    repairCost: 'Upon request'
  },
  {
    imageLink: 'Images/PNG/room03.png',
    city: 'Rostov-on-Don Patriotic',
    apartmentArea: '93 m2',
    repairTime: '3 months',
    repairCost: 'Upon request'
  }
];

function updateSlider(){
  cityNames.forEach((item, index) => {
    item.classList.remove('main__city_active');
  });
  cityNames[currentIndex].classList.add('main__city_active');
  imageRoom.setAttribute('src', slider[currentIndex].imageLink);
  city.textContent = slider[currentIndex].city;
  apartmentArea.textContent = slider[currentIndex].apartmentArea;
  repairTime.textContent = slider[currentIndex].repairTime;
  repairCost.textContent = slider[currentIndex].repairCost;
  dots(currentIndex);
}

for(let i = 0; i < cityNames.length; i++) {
  cityNames[i].addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
  });
}

function dots(){
  dot.forEach((item, index) => {
    item.classList.remove('dot_active');
  });
  dot[currentIndex].classList.add('dot_active');
}

for(let i = 0; i < dot.length; i++){
  dot[i].addEventListener('click', () => {
    currentIndex = i;
    updateSlider(currentIndex);
  });
}

arrowLeft.addEventListener('click', () => {
  if(currentIndex === 0){
    currentIndex = slider.length - 1;
  } else {
    currentIndex--
  }
  updateSlider();
})

arrowRight.addEventListener('click', () => {
  if(currentIndex === slider.length - 1){
    currentIndex = 0
  } else {
    currentIndex++
  }
  updateSlider();
})

imageRoom.addEventListener('click', () => {
  if(currentIndex === slider.length - 1){
    currentIndex = 0
  } else {
    currentIndex++
  }
  updateSlider();
})

updateSlider();