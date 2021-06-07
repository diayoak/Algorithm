/*
	rank:	1
	title:	정수 제곱근 판별
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12934
*/

function solution(n) {
    return Math.sqrt(n) % 1 ? -1 : Math.pow(Math.sqrt(n) + 1, 2);
}