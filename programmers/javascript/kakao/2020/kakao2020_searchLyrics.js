/*
	rank:	4
	title:	[2020카카오공채] 가사 검색
	link: 	https://programmers.co.kr/learn/courses/30/lessons/60060
*/

function solution(words, queries) {
    let trie = {};
    let result = [];
    
    for (let word of words) {
        if (trie[word.length] == undefined) {
            trie[word.length] = [{}, {}];
        }
        
        [word, [...word].reverse()].forEach((word_item, idx) => {
            let t = trie[word.length][idx];
            for (let i = 0; i < word.length; i++) {
                let char = word_item[i];
                
                if (t[char] == undefined) {
                    t[char] = {};
                }

                t.count = t.count + 1 || 1;
                t = t[char];
            }
        });
    }
    
    for (let word of queries) {
        if (trie[word.length] == undefined) {
            result.push(0);
            continue;
        }
        
        let t = trie[word.length];
        t = word.indexOf("?") == 0 ? t[1] : t[0];
        word = word.indexOf("?") == 0 ? [...word].reverse() : word;
        
        for (let i = 0; i < word.length; i++) {
            if (word[i] == "?") {
                break;
            }
            if (t[word[i]] == undefined) {
                t = {count: 0};
                break;
            }
            
            t = t[word[i]];
        }
             
        result.push(t.count);
    }
    
    return result;
}