/*
	rank:	2
	title:	프린터
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42587
*/

function solution(priorities, location) {
    let pCount = priorities.length;
    priorities = priorities.map((value, idx) => Object({idx, value}));
    
    while(priorities.length) {
        let maxValue = Math.max(...priorities.map(({value}) => value));
        
        if (priorities[0].value < maxValue) {
            priorities.push(priorities.shift());
            continue;
        }
        
        if (priorities[0].idx == location) {
            return pCount - priorities.length + 1;
        }
        
        priorities.shift();
    }
}