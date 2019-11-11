/*
	rank:	2
	title:	최솟값 만들기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12941
*/

function solution(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => b - a);

    return arr1
        .map((value, idx) => value * arr2[idx])
        .reduce((a, b) => a + b, 0);
}
