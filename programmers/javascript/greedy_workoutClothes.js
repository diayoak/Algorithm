/*
	rank:	1
	title:	체육복
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42862
*/

function solution(n, lost, reserve) {
    let setReserve = reserve.filter(value => lost.indexOf(value) == -1);
    let setLost = lost.filter(value => reserve.indexOf(value) == -1);

    setReserve.forEach(value => {
        let idx = [setLost.indexOf(value - 1), setLost.indexOf(value + 1)].find(value => value !== -1);
        if (idx != undefined) setLost.splice(idx, 1).length;
    });

    return n - setLost.length;
}