/*
	rank:	1
	title:	수박수박수박수박수박수?
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12922
*/

function solution(n) {
    return "수박".repeat(~~(n / 2) + 1).substr(0, n);
}