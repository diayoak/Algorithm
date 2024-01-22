/*
	rank:	1
	title:	문자열 내림차순으로 배치하기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12917
*/

function solution(s) {
    return [...s].sort().reverse().join("");
}