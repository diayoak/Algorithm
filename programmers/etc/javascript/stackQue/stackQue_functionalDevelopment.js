/*
	rank:	2
	title:	기능개발
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42586
*/

function solution(progresses, speeds) {
    let list = [];
    let prev = 0;

    progresses.forEach((value, idx) => {
        let now = Math.ceil((100 - value) / speeds[idx]);

        if (prev < now) {
            list.push(0);
            prev = now;
        }

        list[list.length - 1]++;
    });

    return list;
}
