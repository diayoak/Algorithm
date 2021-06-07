/*
	rank:	1
	title:	[1차] 비밀지도
	link: 	https://programmers.co.kr/learn/courses/30/lessons/17681
*/

function solution(n, arr1, arr2) {
    return arr1.map((value, key) =>
        (value | arr2[key])
            .toString(2)
            .replace(/0/g, " ")
            .replace(/1/g, "#")
            .padStart(n, " ")
    );
}