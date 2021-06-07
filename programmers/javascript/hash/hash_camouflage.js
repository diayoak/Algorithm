/*
	rank:	2
	title:	위장
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42578
*/

function solution(clothes) {
    let answer = 1;
    let obj = {};

    for (let i = 0; i < clothes.length; i++) {
        let [, type] = clothes[i];
        obj[type] = obj[type] + 1 || 1;
    }

    for (let key in obj) {
        answer *= obj[key] + 1;
    }

    return answer - 1;
}
