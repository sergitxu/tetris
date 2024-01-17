import { piece } from "./types";

export const FIELD_WIDTH = 10;
export const FIELD_HEIGHT = 20;
export const BLOCK_SIZE = 20;


export const PIECES: piece[] = [
    {
        color: 'blue',
        position: { x: 4, y: 0 },
        shape: [
            [1, 1],
            [1, 1]
        ]
    },
    {
        color: 'red',
        position: { x: 4, y: 0 },
        shape: [
            [1, 1, 1, 1]
        ]
    },
    {
        color: 'yellow',
        position: { x: 4, y: 0 },
        shape: [
            [1, 1, 1],
            [0, 0, 1]
        ]
    },
    {
        color: 'magenta',
        position: { x: 4, y: 0 },
        shape: [
            [1, 1, 1],
            [1, 0, 0]
        ]
    },
    {
        color: 'cyan',
        position: { x: 4, y: 0 },
        shape: [
            [0, 1, 1],
            [1, 1, 0]
        ]
    },
    {
        color: 'lime',
        position: { x: 4, y: 0 },
        shape: [
            [1, 1, 1],
            [0, 1, 0]
        ]
    },
    {
        color: 'orange',
        position: { x: 4, y: 0 },
        shape: [
            [1, 1, 0],
            [0, 1, 1]
        ]
    }
]