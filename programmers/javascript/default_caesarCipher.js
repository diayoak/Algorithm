/*
	rank:	1
	title:	시저 암호
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12926
*/

function solution(s, n) {
    let str_arr = [];
    
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        
        if (65 <= charCode && charCode <= 90) 
            str_arr.push(String.fromCharCode((charCode - 65 + n) % 26 + 65));
        else if (97 <= charCode && charCode <= 122)
            str_arr.push(String.fromCharCode((charCode - 97 + n) % 26 + 97));
        else 
            str_arr.push(s[i]);
    }
    return str_arr.join("");
}