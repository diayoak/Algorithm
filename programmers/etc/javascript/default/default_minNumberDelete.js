/*
	rank:	1
	title:	제일 작은 수 제거하기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12935
*/

function solution(arr) {
    return arr.length == 1 ? [-1] : arr.filter(value => value != Math.min(...arr));
}