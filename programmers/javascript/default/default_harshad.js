/*
	rank:	1
	title:	하샤드 수
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12947
*/

function solution(x) {
    return x % [...String(x)].reduce((a, b) => a * 1 + b * 1, 0) == 0;
}