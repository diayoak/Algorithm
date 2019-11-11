/*
	rank:	2
	title:	피보나치 수
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12945
*/

function solution(n) {
    let arr = [0, 1];
    for (let i = 1; i <= n; i++) {
        arr.push((arr[i - 1] + arr[i]) % 1234567);
    }
    return arr[n];
}
