/*
	rank:	1
	title:	핸드폰 번호 가리기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12948
*/

function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.substr(-4);
}