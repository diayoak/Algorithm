/*
	rank:	1
	title:	짝수와 홀수
	link: 	https://programmers.co.kr/learn/challenges?tab=all_challenges
*/

function getGCD(a, b) {
    return b > 0 ? getGCD(b, a % b) : a;
};

function solution(n, m) {
    return [getGCD(n, m), (n * m) / getGCD(n, m)]
}