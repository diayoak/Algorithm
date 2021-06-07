/*
	rank:	1
	title:	행렬의 덧셈
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12950
*/

function solution(arr1, arr2) {
    return arr2.map((data, idx) => data.map((value, key) => value + arr1[idx][key]));
}