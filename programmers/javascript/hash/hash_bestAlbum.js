/*
	rank:	3
	title:	베스트앨범  
	link: 	https://programmers.co.kr/learn/courses/30/lessons/42579
*/

function solution(genres, plays) {
    let genresRanking = Array.from(new Set(genres));
    let genresCountList = {};
    let genresCount = {};
    let result = [];
    
    // 노래 정보 분류
    for (let i = 0; i < genres.length; i++) {
        genresCount[genres[i]] = genresCount[genres[i]] + plays[i] || plays[i];
        
        if (genresCountList[genres[i]] == undefined) {
            genresCountList[genres[i]] = [];    
        }
        
        genresCountList[genres[i]].push({idx: i, count: plays[i]});
    }    
    
    // 장르 정렬
    genresRanking.sort((a, b) => {
        return genresCount[b] - genresCount[a];
    });
    
    // 장르 별 노래 순위
    for (let i = 0; i < genresRanking.length; i++) {
        genresCountList[genresRanking[i]].sort((a, b) => {
            if (a.count - b.count == 0) {
                return a.idx - b.idx;
            }
            return b.count - a.count;
        });
    
        let list = genresCountList[genresRanking[i]].slice(0, 2);

        for (let j = 0; j < list.length; j++) {
            result.push(list[j].idx);
        }
    }
    
    return result;
}