/*
	rank:	2
	title:	올바른 괄호
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12909
*/

function solution(s){
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count +=  s[i] == "(" ? 1 : -1;
        if (count < 0) {
            return false;
        }
    }
    return count == 0;
}