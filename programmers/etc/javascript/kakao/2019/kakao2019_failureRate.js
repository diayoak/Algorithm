/*
	rank:	1
	title:	실패율
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42889
*/

function solution(N, stages) {
    var answer = [];

	for(let i = 1; i <= N; i++) {
		let data = stages.filter(x => x >= i);
		let count = data.length
		let clear = count - data.filter(x => x > i).length;

		answer.push({idx: i, ratio: clear / count});
	}

	answer = answer.sort((a, b) => {
		if (a.ratio > b.ratio) return -1;
		else if (a.ratio < b.ratio) return 1;
		else if (a.idx < b.idx) return -1;
		else return 1;
	})

	answer = answer.map(x => x.idx);

    return answer;
}