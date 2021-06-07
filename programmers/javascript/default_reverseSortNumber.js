/*
	rank:	1
	title:	정수 내림차순으로 배치하기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12933
*/

function solution(n) {
    return Number([...String(n)].sort((a, b) => b - a).join(""));
}