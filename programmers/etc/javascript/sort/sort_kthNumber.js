/*
	rank:	1
	title:	K번째수
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42748
*/

function solution(array, commands) {
    let answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let [start, end, idx] = commands[i];
        let arr = array.slice(start - 1, end).sort((a, b) => a - b);
        
        answer.push(arr[idx - 1]);
    }
    
    return answer;
}