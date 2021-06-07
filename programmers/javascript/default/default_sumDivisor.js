/*
	rank:	1
	title:	약수의 합
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12928
*/

function solution(n) {
    let result = 0;
    
    for (let i = 1; i <= n; i++)
        if (n % i == 0) result += i;
        
    return result;
}