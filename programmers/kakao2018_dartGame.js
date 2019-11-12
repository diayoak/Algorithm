/*
	rank:	1
	title:	[1차] 다트 게임
	link: 	https://programmers.co.kr/learn/courses/30/lessons/17682
*/

function solution(dartResult) {
    let prev = 0;
    let result = 0;
    let datas = dartResult.split(/([0-9]+[SDT][\*\#]*)/).filter(item => item);

    datas.forEach((data, key) => {
        let [, num, type, bounce] = /(\d+)([SDT])([\*\#]*)/g.exec(data);
        let number = Math.pow(num, "SDT".indexOf(type) + 1);

        if (bounce) {
            bounce.split("").forEach(bType => {
                if (bType == "*") {
                    number *= 2;
                    result += prev;
                } else {
                    number *= -1;
                }
            });
        }

        prev = number;
        result += number;
    });

    return result;
}