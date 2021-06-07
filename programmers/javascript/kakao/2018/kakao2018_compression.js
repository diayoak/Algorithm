/*
	rank:	2
	title:	[3차] 압축
	link: 	https://programmers.co.kr/learn/courses/30/lessons/17684
*/

function solution(msg) {
    let result = [];
    let strArray = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let idx = 0;
    let length = 1;
    
    while (idx < msg.length) {
        let str = msg.substr(idx, length);
        
        while (idx + length + 1 <= msg.length) {
            let nextStr = msg.substr(idx, length + 1);
            
            if (strArray.indexOf(nextStr) == -1) {
                strArray.push(nextStr);
                break;
            }
            
            str = nextStr;
            length += 1;
        }
        
        idx += length;
        length = 1;
        result.push(strArray.indexOf(str) + 1);
    }
    
    return result;
}