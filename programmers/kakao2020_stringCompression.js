/*
	rank:	1
	title:	[2020카카오공채] 문자열 압축
	link: 	https://programmers.co.kr/learn/courses/30/lessons/60057
*/

function solution(inputStr) {
    let list = [inputStr];

    for (let i = 1; i <= Math.floor(inputStr.length / 2); i++) {
        let count = 1;
        let output = "";
        let prevStr = "";

        for (let j = 0; j < inputStr.length / i; j++) {
            let subString = inputStr.substr(j * i, i);

            if (prevStr == subString) {
                count++;
            } else {
                if (count >= 2) {
                    output += count;
                }
                output += prevStr;
                count = 1;
            }

            prevStr = subString;
        }

        if (count >= 2) {
            output += count;
        }
        output += prevStr;

        list.push(output);
    }

    return Math.min(...list.map(str => str.length));
}