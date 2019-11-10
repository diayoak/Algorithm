/*
	rank:	1
	title:	콜라츠 추측
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12943
*/

function solution(num) {
    for (let i = 0; i < 500; i++) {
        if (num == 1) return i;
        num = num % 2 ? num * 3 + 1 : num / 2
    }
    return -1;
}