import { piece } from "./types";

export const FIELD_WIDTH = 10;
export const FIELD_HEIGHT = 20;
export const BLOCK_SIZE = 20;
const INITIALPOSITION = { x: 4, y: 0 }

export const PIECES: piece[] = [
    {
        color: 'blue',
        position: INITIALPOSITION,
        shape: [
            [1, 1],
            [1, 1]
        ]
    },
    {
        color: 'red',
        position: INITIALPOSITION,
        shape: [
            [1, 1, 1, 1]
        ]
    },
    {
        color: 'yellow',
        position: INITIALPOSITION,
        shape: [
            [1, 1, 1],
            [0, 0, 1]
        ]
    },
    {
        color: 'magenta',
        position: INITIALPOSITION,
        shape: [
            [1, 1, 1],
            [1, 0, 0]
        ]
    },
    {
        color: 'cyan',
        position: INITIALPOSITION,
        shape: [
            [0, 1, 1],
            [1, 1, 0]
        ]
    },
    {
        color: 'lime',
        position: INITIALPOSITION,
        shape: [
            [1, 1, 1],
            [0, 1, 0]
        ]
    },
    {
        color: 'orange',
        position: INITIALPOSITION,
        shape: [
            [1, 1, 0],
            [0, 1, 1]
        ]
    }
]