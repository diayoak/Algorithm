/*
	rank:	1
	title:	소수 찾기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12921
*/

function solution(n) {
    let arr = new Array(n - 1).fill(true);

    for (let i = 2; i <= arr.length; i++) {
        for (let j = i * i; j <= n; j += i) {
            arr[j - 2] = false;
        }
    }

    return arr.filter(value => value).length;
}