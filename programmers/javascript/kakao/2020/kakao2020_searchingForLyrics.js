/*
	rank:	4
	title:	[2020카카오공채] 가사 검색
	link: 	https://programmers.co.kr/learn/courses/30/lessons/60060
*/

function solution(words, queries) {
    let wordsList = {};
    let matchList = {};
    let result = [];

    for (let item of words) {
        if (wordsList[item.length] == undefined)
            wordsList[item.length] = [];
        wordsList[item.length].push(item);
    }

    for (let i = 0; i < queries.length; i++) {
        let item = queries[i];

        if (matchList[item] == undefined) {
            let list = wordsList[item.length];
            let count = 0;

            if (list != undefined) {
                let idx = item.indexOf("?");
                let sidx = idx ? 0 : item.lastIndexOf("?") + 1;
                let eidx = idx ? idx : item.length;
                let word = item.substring(sidx, eidx);
                let start = 0;
                let end = list.length - 1;

                list.sort((a, b) => a.substring(sidx, eidx) < b.substring(sidx, eidx) ? -1 : 1);

                while (start < end) {
                    let status = true;
                    let step = Math.ceil(((end + start) / 2 - start) / 2);

                    if (list[start].substring(sidx, eidx) < word)
                        (start += step), (status = false);
                    else if (list[start].substring(sidx, eidx) > word)
                        (start -= step), (status = false);

                    if (list[end].substring(sidx, eidx) < word)
                        (end += step), (status = false);
                    else if (list[end].substring(sidx, eidx) > word)
                        (end -= step), (status = false);

                    if (start < 0 || end > list.length) {
                        start = 1;
                        end = 0;
                        break;
                    }

                    if (status) {
                        break;
                    }
                }
                count = end - (start - 1);
            }
            matchList[item] = count;
        }

        result.push(matchList[item]);
    }

    return result;
}