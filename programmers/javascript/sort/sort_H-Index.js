/*
	rank:	2
	title:	H-Index
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42747
*/

function solution(citations) {
    let list = [];
    for (let i = 0; i <= citations.length; i++) {
        let count = citations.filter(value => i <= value).length;
        if (i <= count) list.push(i);
    }
    return Math.max(...list);
}
