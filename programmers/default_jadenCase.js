/*
	rank:	2
	title:	JadenCase 문자열 만들기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12951
*/

function solution(s) {
    return s.split(" ").map(str => str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()).join(" ");
}