import './style.css'
import * as contants from './constants'

const canvas = document.querySelector('canvas');
const ctx = canvas?.getContext('2d');

canvas!.width = contants.FIELD_WIDTH * contants.BLOCK_SIZE;
canvas!.height = contants.FIELD_HEIGHT * contants.BLOCK_SIZE;

ctx?.scale(contants.BLOCK_SIZE, contants.BLOCK_SIZE);

const field = Array(canvas!.height).fill(null).map(() => Array(contants.FIELD_WIDTH).fill(0));

function update() {
    draw();
    window.requestAnimationFrame(update);

}
function draw() {
    ctx!.fillStyle = '#000';
    ctx?.fillRect(0, 0, canvas!.width, canvas!.height);
    field.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value === 1) {
                ctx!.fillStyle = 'orange';
                ctx!.fillRect(x, y, 1, 1);
            }
        })
    })

    contants.PIECE.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                ctx!.fillStyle = contants.PIECE.color;
                ctx!.fillRect(x + contants.PIECE.position.x, y + contants.PIECE.position.y, 1, 1);
            }
        })
    })
}

// USER INTERACTION
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        contants.PIECE.position.x--;
    } else if (e.key === 'ArrowRight') {
        contants.PIECE.position.x++;
    } else if (e.key === 'ArrowDown') {
        contants.PIECE.position.y++;
    }
});



update();

