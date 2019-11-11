/*
	rank:	2
	title:	가장 큰 수
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42746
*/

function solution(numbers) {
    numbers.sort((a, b) => {
        return Number(String(b) + String(a)) - Number(String(a) + String(b));
    });

    return numbers.join("").replace(/^0+(\w+)/g, "$1");
}
