/*
	rank:	2
	title:	다음 큰 숫자
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12911
*/

function solution(n) {
    let result = n;
    let count = Number(n)
        .toString(2)
        .replace(/0/g, "").length;

    while (1) {
        let len = Number(++result)
            .toString(2)
            .replace(/0/g, "").length;

        if (count == len) return result;
    }
}
