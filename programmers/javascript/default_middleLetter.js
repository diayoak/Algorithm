/*
	rank:	1
	title:	가운데 글자 가져오기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12903
*/

function solution(s) {
    return Array.from(new Set([Math.floor(s.length / 2 - 0.5), Math.ceil(s.length / 2 - 0.5)])).map(idx => s[idx]).join("");
}