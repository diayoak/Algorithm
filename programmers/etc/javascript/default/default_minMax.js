/*
	rank:	2
	title:	최댓값과 최솟값
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12939
*/

function solution(s) {
    let arr = s.split(" ");
    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
