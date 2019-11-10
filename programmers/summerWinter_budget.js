/*
	rank:	1
	title:	예산
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12982
*/

function solution(d, budget) {
    return d.sort((a, b) => a - b).filter(value => (budget -= value) >= 0).length;
}