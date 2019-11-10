/*
	rank:	1
	title:	하샤드 수
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12947
*/

function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.substr(-4);
}