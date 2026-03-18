let blocks = 100;
let blockMaxHeight = 100;
let blockHeightScale;
let blockWidth;

function createRandomArr(blockMaxHeight, blocks) {
	arr = []
	for (let i = 0; i < blocks; i++) {
		arr[i] = Math.round(Math.random()*blockMaxHeight);
	}
	return arr
}

function visualBoard(blocks, blockHeightScale, blockWidth, board, current, found) {
	if (!found) {
		for (let i = 0; i < blocks; i++) {
			posX = i * blockWidth;

			if (i == current) {
				fill(255);
			}
			else {
				fill(`rgb(255, 128, 0)`);
			}
			rect(posX, height, blockWidth, -(blockHeightScale*board[i]));
		}
	}
	if (found) {
		console.log("found");
		posX = current * blockWidth
		fill(`rgb(255, 0, 0)`);
		rect(posX, height, blockWidth, -(blockHeightScale*board[current]));

	}

}

function linearSearch(board, blocks, x, item) {
	if (x >= blocks) {
		console.log("Item not found");
		return [[0], 0];
	}
	else if (x < blocks) {
		if (board[x] == item) {
			return [board, x, true];
		}
	}

	return [board, x+1, false]
	
}


let board;
let delta = 0;

function setup() {

	createCanvas(800, 800);
	blockHeightScale = Math.floor(height/blockMaxHeight);
	blockWidth = Math.floor(width/blocks); // Add a padding
	board = createRandomArr(blockMaxHeight, blocks);
	console.log(board);




}
let x = 0;
let item = 100;
let found;
function draw() {
	background(0);
	if (Math.round(delta) == 2) {
		items = linearSearch(board, blocks, x, item);
		board = items[0];	
		x = items[1];
		found = items[2];



		delta = 0;
	}
	delta += 2;
	visualBoard(blocks, blockHeightScale, blockWidth, board, x, found);




}