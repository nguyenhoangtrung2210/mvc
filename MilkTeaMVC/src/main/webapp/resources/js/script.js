// JavaScript Document
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

let cate = document.querySelector(".box-container")
console.log(cate)





var bodyObj1, bodyObj2, bodyObj3, className, index;

bodyObj1 = document.getElementById('body1');
bodyObj2 = document.getElementById('body2');
bodyObj3 = document.getElementById('body3');
index1 = 0;
index2 = 0;
index3 = 1;
className = [
  'order-bar-option-phobien',
  'order-bar-option-new',
  'order-bar-option-sale'
];

function updateIndex1() {
  if (index1 === 0) {
    index1 = 1;
    body1.style.background = "red";
	body1.style.color = "white"
    index2 = 0;
    body2.style.background = "white";
	body2.style.color = "black"
    index3 = 0;
    body3.style.background = "white";
	body3.style.color = "black"
  } else {
    index1 = 0;
    body1.style.background = "white";
	body1.style.color = "black"
    index2 = 0;
    body2.style.background = "white";
	body2.style.color = "black"
    index3 = 1;
    body3.style.background = "red";
	body3.style.color = "white"
  }
}

function updateIndex2() {
  if (index2 === 0) {
    index2 = 1;
    body2.style.background = "red";
	body2.style.color = "white"
    index1 = 0;
    body1.style.background = "white";
	body1.style.color = "black"
    index3 = 0;
    body3.style.background = "white";
	body3.style.color = "black"
  } else {
    index2 = 0;
    body2.style.background = "white";
	body2.style.color = "black"
    index1 = 1;
    body1.style.background = "red";
	body1.style.color = "white"
    index3 = 0;
    body3.style.background = "white";
	body3.style.color = "black"
  }
}

function updateIndex3() {
  if (index3 === 0) {
    index3 = 1;
    body3.style.background = "red";
	body3.style.color = "white"
    index1 = 0;
    body1.style.background = "white";
	body1.style.color = "black"
    index2 = 0;
    body2.style.background = "white";
	body2.style.color = "black"
  } else {
    index3 = 0;
    body3.style.background = "white";
	body3.style.color = "black"
    index1 = 1;
    body1.style.background = "red";
	body1.style.color = "white"
    index2 = 0;
    body2.style.background = "white";
	body2.style.color = "black"
  }
}

bodyObj1.onclick = function(e) {
  e.currentTarget.className = className[index1];
  updateIndex1();

}
bodyObj2.onclick = function(e) {
  e.currentTarget.className = className[index2];

  updateIndex2();

}
bodyObj3.onclick = function(e) {
  e.currentTarget.className = className[index3];

  updateIndex3();
}






