/**
 * 가장 많이 받은 선물
 * 난이도: Lv. 1
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712
 */

function solution(friends, gifts) {
    const userStatistics = {
        total: {},
        each: {}
    };

    for (let name of friends) {
        userStatistics.total[name] = 0
        userStatistics.each[name] = {}
        for (let name2 of friends) {
            userStatistics.each[name][name2] = 0
        }
    }
    
    for (let gift of gifts) {
        const [sender, receiver] = gift.split(" ");
        userStatistics.each[sender][receiver] += 1
        userStatistics.each[receiver][sender] -= 1
        userStatistics.total[sender] += 1
        userStatistics.total[receiver] -= 1
    }
    
    let result = 0;
    for (let name of friends) {
        let count = 0;
        for (let friend in userStatistics.each[name]) {
            const value = userStatistics.each[name][friend];
            if (value > 0 || (value == 0 && userStatistics.total[name] > userStatistics.total[friend])) {
                count += 1;
            }
        }
        result = result < count ? count : result
    }
    
    return result;
}