/*
	rank:	1
	title:	같은 숫자는 싫어
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12906
*/

function solution(arr)
{
    let prev = null;
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (prev != arr[i]) {
            prev = arr[i];
            stack.push(arr[i]);
        }
    }
    return stack;
}