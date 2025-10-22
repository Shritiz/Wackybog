const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const bestScoreDisplay = document.getElementById('best-score');

function createTile(value, x, y) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.backgroundColor = getTileColor(value);
    tile.innerText = value === 0 ? '' : value;
    tile.style.gridRowStart = y + 1;
    tile.style.gridColumnStart = x + 1;
    gameBoard.appendChild(tile);
}

function getTileColor(value) {
    switch (value) {
        case 0: return '#ccc0b3';
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f67c5f';
        case 128: return '#f9f3d3';
        case 256: return '#f9f3d3';
        case 512: return '#f9f3d3';
        case 1024: return '#f9f3d3';
        case 2048: return '#f9f3d3';
        default: return '#3c3a32';
    }
}

function updateScore(score) {
    scoreDisplay.innerText = score;
}

function updateBestScore(bestScore) {
    bestScoreDisplay.innerText = bestScore;
}

function clearBoard() {
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
}

function renderBoard(board) {
    clearBoard();
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            createTile(board[y][x], x, y);
        }
    }
}