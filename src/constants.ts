import { piece } from "./types";

export const FIELD_WIDTH = 10;
export const FIELD_HEIGHT = 20;
export const BLOCK_SIZE = 20;


export const PIECES: piece[] = [
    {
        color: 'blue',
        shape: [
            [1, 1],
            [1, 1]
        ]
    },
    {
        color: 'red',
        shape: [
            [1, 1, 1, 1]
        ]
    },
    {
        color: 'yellow',
        shape: [
            [1, 1, 1],
            [0, 0, 1]
        ]
    },
    {
        color: 'magenta',
        shape: [
            [1, 1, 1],
            [1, 0, 0]
        ]
    },
    {
        color: 'cyan',
        shape: [
            [0, 1, 1],
            [1, 1, 0]
        ]
    },
    {
        color: 'lime',
        shape: [
            [1, 1, 1],
            [0, 1, 0]
        ]
    },
    {
        color: 'orange',
        shape: [
            [1, 1, 0],
            [0, 1, 1]
        ]
    }
]