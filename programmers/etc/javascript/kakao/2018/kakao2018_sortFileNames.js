/*
	rank:	2
	title:	[3차] 파일명 정렬
	link: 	https://programmers.co.kr/learn/courses/30/lessons/17686
*/

function solution(files) {
    return files.slice().sort((a, b) => {
        let [, head_a, number_a] = /^([^0-9]+)([0-9]+)/g.exec(a);
		let [, head_b, number_b] = /^([^0-9]+)([0-9]+)/g.exec(b);
		
		if (head_a.toLowerCase() < head_b.toLowerCase()) return -1;
		else if (head_a.toLowerCase() > head_b.toLowerCase()) return 1;
		
		if (number_a * 1 < number_b * 1) return -1;
		else if (number_a * 1 > number_b * 1) return 1;

		return files.indexOf(a) - files.indexOf(b);
    });
}
