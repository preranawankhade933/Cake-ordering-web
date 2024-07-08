let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
}

window.onscroll = () => {
	 navbar.classList.remove('active');
}
/*
const searchBox =document.querySelector('.search-box');
const searchBtn =document.querySelector('.search-btn');
const search =document.querySelector('.search');
const closeBtn =document.querySelector('.close-btn');

searchBtn.addEventListener('click',function(){
	console.log(search.classList.contains('active'));
	if(search.classList.contains('active')){
		searchBox.value=''
	}
	else{
		search.classList.add('active');
		searchBox.focus();
	}
})

closeBtn.addEventListener('click',function(){
	search.classList.remove('active');
	searchBox.value='';
})*/

let slides=document.querySelectorAll('.home .slides-container .slide');
let index=0;

function next(){
	slides[index].classList.remove('active');
	index=(index +1) % slides.length;
	slides[index].classList.add('active');
}

function prev(){
	slides[index].classList.remove('active');
	index=(index -1 + slides.length) % slides.length;
	slides[index].classList.add('active');
}