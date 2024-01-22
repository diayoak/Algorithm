/*
	rank:	2
	title:	[3차] n진수 게임
	link: 	https://programmers.co.kr/learn/courses/30/lessons/17687
*/

function solution(n, t, m, p) {
    let result = "";
    let num = 0;

    while (result.length < t * m + p) {
        result += (num++).toString(n).toUpperCase();
    }

    return result.substring(p - 1).split("").filter((value, key) => key % m == 0).join("").substring(0, t);
}