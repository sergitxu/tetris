import './style.css'
import * as contants from './constants'

const canvas = document.querySelector('canvas');
const ctx = canvas?.getContext('2d');

canvas!.width = contants.FIELD_WIDTH * contants.BLOCK_SIZE;
canvas!.height = contants.FIELD_HEIGHT * contants.BLOCK_SIZE;

ctx?.scale(contants.BLOCK_SIZE, contants.BLOCK_SIZE);

const field = Array(contants.FIELD_HEIGHT).fill(null).map(() => Array(contants.FIELD_WIDTH).fill(0));

let piece = pickRandomPiece();
piece.position = { x: 4, y: 0 } // TODO remove position from constants as are always the same.
let playButton = document.getElementById('playButton');
playButton?.addEventListener('click', playGame);

let dropCounter = 0;
let lastTime = 0;

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;

    if (dropCounter > 2000) {
        piece.position.y++;
        dropCounter = 0;
        if (checkCollisions()) {
            piece.position.y--;
            fixPiece();
        };

    }
    draw();
    window.requestAnimationFrame(update);
}

function playGame() {
    update();
    new Audio('public/TetrisRemix.mp3').play();
}

function draw() {
    ctx!.fillStyle = '#000';
    ctx?.fillRect(0, 0, canvas!.width, canvas!.height);
    field.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value === 1) {
                ctx!.fillStyle = 'white'; // TODO color of the fixedPiece
                ctx!.fillRect(x, y, 1, 1);
            }
        })
    })

    piece.shape.forEach((row: any[], y: number) => {
        row.forEach((value, x) => {
            if (value) {
                ctx!.fillStyle = piece.color;
                ctx!.fillRect(x + piece.position.x, y + piece.position.y, 1, 1);
            }
        })
    })
}

// USER INTERACTION
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        piece.position.x--;
        if (checkCollisions()) {
            piece.position.x++;
        };
    } else if (e.key === 'ArrowRight') {
        piece.position.x++;
        if (checkCollisions()) {
            piece.position.x--;
        };
    } else if (e.key === 'ArrowDown') {
        piece.position.y++;
        if (checkCollisions()) {
            piece.position.y--;
            fixPiece();
        };
    }
});

// LOGIC
function checkCollisions() {
    return piece.shape.find((row: any[], y: number) => {
        if (field[y + piece.position.y] === undefined) { return true }
        return row.find((value, x) => {
            return (
                value !== 0 &&
                field[y + piece.position.y][x + piece.position.x] !== 0
            )
        })
    })
}

function fixPiece() {
    piece.shape.forEach((row: any[], y: number) => {
        row.forEach((value, x) => {
            if (value === 1) {
                field[y + piece.position.y][x + piece.position.x] = 1;
            }
        })
    })
    resetPiecePosition();
    deteleRows();
    piece = pickRandomPiece();
}

function resetPiecePosition() {
    piece.position.y = 0;
    piece.position.x = 4;
}

function deteleRows() {
    let rows = 0;
    field.forEach((row, y) => {
        if (row.every(value => value === 1)) {
            rows++;
            field.splice(y, 1);
            field.unshift(Array(contants.FIELD_WIDTH).fill(0));
        }
    })
    return rows;
}

function pickRandomPiece() {
    const randomPiece = Math.floor(Math.random() * contants.PIECES.length);
    return contants.PIECES[randomPiece];
}

// update();

