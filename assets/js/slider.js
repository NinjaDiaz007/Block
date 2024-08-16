let slider = document.querySelector(".slider");
let sliderIndividual = document.querySelectorAll("section");
let contador = 1;
let ancho = sliderIndividual[0].clientWidth;

let skill = document.getElementById("skill");
let acercade = document.getElementById('acercade');
let work = document.getElementById('work');
let contact = document.getElementById('contact');

acercade.addEventListener('click', ()=>{
	Slider(1);
});

skill.addEventListener('click', ()=>{
	Slider(2);
});

work.addEventListener('click', ()=>{
	Slider(3);
});

contact.addEventListener('click', ()=>{
	Slider(4)
})


function Init() {}
Init();

function Slider(s){
	if(s === 0){
		slider.style.transform = "translate("+(-ancho*s)+"px)";
		slider.style.transition = "transform .8s";
		Circulos(0);
	}
	else if(s === 1){
		slider.style.transform = "translate("+(-ancho*s)+"px)";
		slider.style.transition = "transform .8s";
		Circulos(s);
	}
	else if(s === 2){
		slider.style.transform = "translate("+(-ancho*s)+"px)";
		slider.style.transition = "transform .8s";
		Circulos(s);
	}
	else if(s === 3){
		slider.style.transform = "translate("+(-ancho*s)+"px)";
		slider.style.transition = "transform .8s";
		Circulos(s);
	}
	else{
		slider.style.transform = "translate("+(-ancho*s)+"px)";
		slider.style.transition = "transform .8s";
		Circulos(s);
	}
}

function Circulos(cir){
	let cir_1 = document.getElementById('cir_1');
	let cir_2 = document.getElementById('cir_2');
	let cir_3 = document.getElementById('cir_3');
	let cir_4 = document.getElementById('cir_4');
	let cir_5 = document.getElementById('cir_5');

	if(cir === 0){
		cir_1.classList.add('active');
		cir_2.classList.remove('active');
		cir_3.classList.remove('active');
		cir_4.classList.remove('active');
		cir_5.classList.remove('active');

		cir_1.style.transition = "ease 1s";
	}

	if(cir === 1){
		cir_1.classList.remove('active');
		cir_2.classList.add('active');
		cir_3.classList.remove('active');
		cir_4.classList.remove('active');
		cir_5.classList.remove('active');

		cir_2.style.transition = "ease 1s";
	}

	if(cir === 2){
		cir_1.classList.remove('active');
		cir_2.classList.remove('active');
		cir_3.classList.add('active');
		cir_4.classList.remove('active');
		cir_5.classList.remove('active');

		cir_3.style.transition = "ease 1s";
	}

	if(cir === 3){
		cir_1.classList.remove('active');
		cir_2.classList.remove('active');
		cir_3.classList.remove('active');
		cir_4.classList.add('active');
		cir_5.classList.remove('active');

		cir_4.style.transition = "ease 1s";
	}

	if(cir === 4){
		cir_1.classList.remove('active');
		cir_2.classList.remove('active');
		cir_3.classList.remove('active');
		cir_4.classList.remove('active');
		cir_5.classList.add('active');

		cir_5.style.transition = "ease 1s";
	}
}

