/*
	rank:	1
	title:	나누어 떨어지는 숫자 배열
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12910
*/

function solution(arr, divisor) {
    let list = arr.filter(value => value % divisor == 0);
    if (!list.length) list = [-1];
    return list.sort((a, b) => a - b);
}