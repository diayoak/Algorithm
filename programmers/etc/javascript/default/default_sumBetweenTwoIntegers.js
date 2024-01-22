/*
	rank:	1
	title:	두 정수 사이의 합
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12912
*/

function solution(a, b) {
    let result = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        result += i;
    }
    return result;
}