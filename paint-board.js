"use strict";

// const board = document.getElementById('board');

// const COLORS = ['red', 'orange', 'yellow', 'green', 'skyblue', 'blue', 'purple', 'white'];

// const SQUARES_NUMBER = 378;

// for (let i = 0; i < SQUARES_NUMBER; i++) {
// 	const square = document.createElement('div');
// 	square.classList.add('square');

// 	square.addEventListener('click', () => setColor(square));

// 	board.append(square);
// }

// function setColor(element) {
// 	const randomColor = getRandomColor()
// 	element.style.backgroundColor = randomColor;
// 	element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
// }

// function removeColor(element) {
// 	element.style.backgroundColor = '#1d1d1d';
// 	element.style.boxShadow = `0 0 2px #000`;
// }

// function getRandomColor() {
// 	const randomIndex = Math.floor(Math.random() * COLORS.length);
// 	const randomColor = COLORS[randomIndex];

// 	return randomColor
// }
class Tools {
	constructor(selector, options) {
		this.tools = document.querySelector(selector);
		this.options = options;

		this.#render();
		this.#setup();
	}

	#render() {

	}

	#setup() {

	}
}

const tools = new Tools('#tools', {
	colors: ['red', '#000', '#fff'],
});

class Paint {
	constructor(selector, options) {
		this.board = document.querySelector(selector);
		this.options = options;

		this.#render();
		this.#setup();
	}

	#render() {
		const { squareNumber } = this.options;

		for (let i = 0; i < squareNumber; i++) {

			const square = document.createElement('div');
			square.classList.add('square');

			board.append(square);
		}
	}

	#setup() {
		this.squares = document.querySelectorAll('.square');
		this.squares.forEach(square => {
			square.addEventListener("click", () => this.setColor(square))
		})
	}

	setColor(element) {
		const currentColor = this.currentColor;

		element.style.backgroundColor = currentColor;
	}

	get currentColor() {
		return this.board.dataset.color;
	}

	get changeColor() {
	}
}

const paint = new Paint('#board', {
	squareNumber: 500,
});

const toolsColors = document.querySelectorAll("[data-tools-color]");

toolsColors.forEach(color => {
	color.addEventListener("click", () => {
		this.board.dataset.color = color.dataset.toolsColor;
	})
})

window.paint = paint;
