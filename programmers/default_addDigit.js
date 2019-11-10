/*
	rank:	1
	title:	자릿수 더하기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12931
*/

function solution(n) {
    return [...String(n)].reduce((a, b) => a * 1 + b * 1, 0);
}