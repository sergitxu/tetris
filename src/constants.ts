import { piece } from "./types";

export const FIELD_WIDTH = 10;
export const FIELD_HEIGHT = 20;
export const BLOCK_SIZE = 20;

export const PIECE: piece = {
    color: 'red',
    position: { x: 0, y: 0 },
    shape: [
        [1, 1],
        [1, 1]
    ]
}