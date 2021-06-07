/*
	rank:	1
	title:	완주하지 못한 선수
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42576
*/

function solution(participant, completion) {
    let users = {};

	for (let i = 0; i < participant.length; i++) {
		users[participant[i]] = users[participant[i]] - 1 || -1
	}

	for (let i = 0; i < completion.length; i++) {
		users[completion[i]] = users[completion[i]] + 1;
	}
    
    for (let key in users) {
        if (users[key]) return key;
    }
}