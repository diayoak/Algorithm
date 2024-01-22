/*
	rank:	1
	title:	문자열 내 p와 y의 개수
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12916
*/

function solution(s){
    return s.match(/p/ig).length == s.match(/y/ig).length;
}