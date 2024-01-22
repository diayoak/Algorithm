/*
	rank:	1
	title:	모의고사
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42840
*/

function solution(answers) {
    let answer = [0, 0, 0];
    let userPattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    for (let i = 0; i < answer.length; i++)
        for (let j = 0; j < answers.length; j++) 
            if (userPattern[i][j % userPattern[i].length] == answers[j]) answer[i]++;   

    return Object.entries(answer).filter(([, value]) => value == Math.max(...answer)).map(([idx]) => idx * 1 + 1).sort();
}