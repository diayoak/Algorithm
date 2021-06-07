/*
	rank:	1
	title:	문자열 내 마음대로 정렬하기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12915
*/

function solution(strings, n) {
    return strings.sort((a, b) => a[n] < b[n] ? -1 : (a[n] > b[n] ? 1 : (a < b ? -1 : 1)));
}