/*
	rank:	2
	title:	소수 찾기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42839
*/

function solution(numbers) {
    let arr = numbers.split("");
    let list = proc("", arr, []);
    let decimal = new Array(Math.max(...list) - 1).fill(true);

    for (let i = 2; i <= decimal.length + 1; i++)
        for (let j = i * i; j <= decimal.length + 1; j += i)
            decimal[j - 2] = false;

    return new Set(list.filter(key => decimal[key - 2])).size;
}

function proc(output = "", arr = [], list = []) {
    if (!arr.length && output.length) list.push(output * 1);

    for (let i = 0; i < arr.length; i++) {
        if (i == 0 && output && list.indexOf(output) == -1)
            list.push(output * 1);
        proc(output + arr[i], arr.slice(0, i).concat(arr.slice(i + 1)), list);
    }

    return list;
}
