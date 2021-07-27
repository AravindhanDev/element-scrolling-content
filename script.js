/** @format */

const button = document.querySelector('button');
const cElement = document.getElementById('cElement');
const sElement = document.getElementById('sElement');
const speed = document.querySelector('input');
const output = document.querySelector('.output');
let scroller = true;

const content = `
	<p>let’s explore 10 compelling reasons to learn JavaScript.
	</p>

	<br>

	<ul>
	<li>It’s the most popular programming language </li>
	<br>
	<li>It’s in your browser</li>
	<br>
	<li>JavaScript also exists outside of the internet</li>
	<br>
	<li>JavaScript is Ideal for Newbies </li>
	<br>
	<li>JavaScript is Easy to Learn</li>
	<br>
	<li>You Can Create Visual Effects and Other Eye-catching Aesthetic Features</li>
	<br>
	<li>JavaScript is Versatile</li>
	<br>
	<li>JavaScript also Affects Big Data and the Cloud</li>
	<br>
	<li>It’s a Valuable Tool for Game Designers</li>
	<br>
	<li>Finally, the Career Potential is Skyrocketing</li>
	<br>
	</ul>

	`;

window.onload = setupScroll;

button.addEventListener('click', function () {
	console.log('click');
	scroller ^= true;
	button.innerHTML = scroller ? 'Stop' : 'Start';
});

cElement.addEventListener('mouseover', scrollSpeed);
cElement.addEventListener('mouseout', scrollSpeed);

function scrollSpeed(e) {
	scroller = e.type == 'mouseover' ? false : true;
	output.innerHTML = 'Mouse stopped';
}

function setupScroll() {
	sElement.innerHTML = content;
	let temp = sElement.getBoundingClientRect();
	console.log(temp);
	cElement.style.height = temp.height / 2 + 'px';
	sElement.style.top = temp.height + 'px';
	scrollInt = setInterval(scrollingEle, 50);
}

function scrollingEle() {
	let scrollSpeed = speed.value;
	if (scroller) {
		let posY = parseInt(sElement.style.top);
		if (posY + sElement.clientHeight > 0) {
			sElement.style.top = posY - scrollSpeed + 'px';
		} else {
			sElement.style.top = sElement.clientHeight + 'px';
		}
		output.innerHTML =
			'Scroll Speed ' +
			scrollSpeed +
			'ms<sup>-1</sup> &nbsp; Y-Position ' +
			posY;
	}
}
