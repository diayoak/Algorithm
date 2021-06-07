/*
	rank:	1
	title:	2016년
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12901
*/

function solution(a,b) {
    return new Date(2016, (a - 1), b).toString("ko").slice(0, 3).toUpperCase();
}