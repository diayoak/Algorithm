/*
	rank:	2
	title:	[1차] 뉴스 클러스터링
	link: 	https://programmers.co.kr/learn/courses/30/lessons/17677
*/

function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    if (str1 == str2) return 65536;
    
    let result = 0;
    let datas = [str1, str2];
    let list = [[], []];
    
    for (let i = 0; i < datas.length; i++) {
        for (let j = 0; j < datas[i].length - 1; j++) {
            let str = datas[i].substr(j, 2);
            
            if (/^[a-z]+$/g.test(str)) {
                list[i].push(str);   
            }
        }
    }
    
    let default_set = new Set(list[0].filter(str => list[1].indexOf(str) != -1));
    let multi_set = [];
    
    Array.from(default_set).forEach(item => {
        let a = list[0].filter(x => x == item).length;
        let b = list[1].filter(x => x == item).length;
        let count = Math.min(a, b);
        
        multi_set = multi_set.concat(new Array(count).fill(item));
    });
    
    result = multi_set.length / (list[0].length + list[1].length - multi_set.length);
    
    return ~~(result * 65536);
}