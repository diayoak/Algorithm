/*
	rank:	2
	title:	[1차] 프렌즈4블록
	link: 	https://programmers.co.kr/learn/courses/30/lessons/17679
*/

function solution(height, width, board) {
    let result = 0;
    let newBoard = [];

    for (let i = 0; i < width; i++) {
        let str = [];

        for (let j = 0; j < height; j++) {
            str.push(board[j][i]);
        }
        newBoard.push(str);
    }

    while (true) {
        let list = getDeleteBlock(newBoard, width, height);

        if (!list.length)  {
            break;
        }

        list.forEach(({x, y}) => {
            newBoard[y][x] = " ";
            newBoard[y][x + 1] = " ";
            newBoard[y + 1][x] = " ";
            newBoard[y + 1][x + 1] = " ";
        });

        newBoard = newBoard.map(row => {
            return row.filter(str => str != " ").join("").padStart(height, " ").split("");
        });
    }

    return newBoard.map(row => row.filter(str => str == " ").length).reduce((a, b) => a + b, 0);
}

function check(board, x, y) {
    if (board[y][x] == " ")  {
        return false;
    }

    let position = [[x, y], [x + 1, y], [x, y + 1], [x + 1, y + 1]];
    let list = position.filter(([x1, y1]) => {
        return board[y1][x1] == board[y][x];
    });

    return list.length == 4;
}

function getDeleteBlock(newBoard, width, height) {
    let list = [];

    for (let i = 0; i < width - 1; i++) {
        for (let j = 0; j < height - 1; j++) {
            if (check(newBoard, j, i))
                list.push({x: j, y: i});
        }
    }

    return list;
}