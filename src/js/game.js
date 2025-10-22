// This file contains the core logic of the 2048 game, including the game state management, tile merging logic, and score tracking.

const GAME_SIZE = 4; // Size of the game board
let board = [];
let score = 0;

// Initialize the game board
function initGame() {
    board = Array.from({ length: GAME_SIZE }, () => Array(GAME_SIZE).fill(0));
    score = 0;
    addRandomTile();
    addRandomTile();
    updateUI();
}

// Add a random tile (2 or 4) to the board
function addRandomTile() {
    const emptyTiles = [];
    for (let r = 0; r < GAME_SIZE; r++) {
        for (let c = 0; c < GAME_SIZE; c++) {
            if (board[r][c] === 0) {
                emptyTiles.push({ r, c });
            }
        }
    }
    if (emptyTiles.length > 0) {
        const { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        board[r][c] = Math.random() < 0.9 ? 2 : 4;
    }
}

// Move tiles in the specified direction
function move(direction) {
    let moved = false;
    switch (direction) {
        case 'up':
            for (let c = 0; c < GAME_SIZE; c++) {
                for (let r = 1; r < GAME_SIZE; r++) {
                    if (board[r][c] !== 0) {
                        let targetRow = r;
                        while (targetRow > 0 && (board[targetRow - 1][c] === 0 || board[targetRow - 1][c] === board[r][c])) {
                            if (board[targetRow - 1][c] === board[r][c]) {
                                score += board[r][c];
                                board[targetRow - 1][c] *= 2;
                                board[r][c] = 0;
                                moved = true;
                                break;
                            }
                            board[targetRow - 1][c] = board[targetRow][c];
                            board[targetRow][c] = 0;
                            targetRow--;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'down':
            for (let c = 0; c < GAME_SIZE; c++) {
                for (let r = GAME_SIZE - 2; r >= 0; r--) {
                    if (board[r][c] !== 0) {
                        let targetRow = r;
                        while (targetRow < GAME_SIZE - 1 && (board[targetRow + 1][c] === 0 || board[targetRow + 1][c] === board[r][c])) {
                            if (board[targetRow + 1][c] === board[r][c]) {
                                score += board[r][c];
                                board[targetRow + 1][c] *= 2;
                                board[r][c] = 0;
                                moved = true;
                                break;
                            }
                            board[targetRow + 1][c] = board[targetRow][c];
                            board[targetRow][c] = 0;
                            targetRow++;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'left':
            for (let r = 0; r < GAME_SIZE; r++) {
                for (let c = 1; c < GAME_SIZE; c++) {
                    if (board[r][c] !== 0) {
                        let targetCol = c;
                        while (targetCol > 0 && (board[r][targetCol - 1] === 0 || board[r][targetCol - 1] === board[r][c])) {
                            if (board[r][targetCol - 1] === board[r][c]) {
                                score += board[r][c];
                                board[r][targetCol - 1] *= 2;
                                board[r][c] = 0;
                                moved = true;
                                break;
                            }
                            board[r][targetCol - 1] = board[r][targetCol];
                            board[r][targetCol] = 0;
                            targetCol--;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'right':
            for (let r = 0; r < GAME_SIZE; r++) {
                for (let c = GAME_SIZE - 2; c >= 0; c--) {
                    if (board[r][c] !== 0) {
                        let targetCol = c;
                        while (targetCol < GAME_SIZE - 1 && (board[r][targetCol + 1] === 0 || board[r][targetCol + 1] === board[r][c])) {
                            if (board[r][targetCol + 1] === board[r][c]) {
                                score += board[r][c];
                                board[r][targetCol + 1] *= 2;
                                board[r][c] = 0;
                                moved = true;
                                break;
                            }
                            board[r][targetCol + 1] = board[r][targetCol];
                            board[r][targetCol] = 0;
                            targetCol++;
                            moved = true;
                        }
                    }
                }
            }
            break;
    }
    if (moved) {
        addRandomTile();
        updateUI();
    }
}

// Update the user interface
function updateUI() {
    // This function will be implemented in ui.js
}

// Start the game
initGame();