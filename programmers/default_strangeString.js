/*
	rank:	1
	title:	이상한 문자 만들기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12930
*/

function solution(s) {
    return s.toUpperCase().replace(/(\w)(\w)/g, ([a, b]) => a.toUpperCase() + b.toLowerCase());
}