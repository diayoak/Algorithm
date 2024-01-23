/**
 * 개인정보 수집 유효기간
 * 난이도: Lv. 1
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370
 */

function solution(today, terms, privacies) {
    const termsMap = {};
    for (let i = 0; i < terms.length; i++) {
        const [key, value] = terms[i].split(" ");
        termsMap[key] = value;
    }
    
    const answer = [];
    const baseDay = convertToDay(today);
    for (let i = 0; i < privacies.length; i++) {
        const [date, termsType] = privacies[i].split(" ");
        const endDay = convertToDay(date) + termsMap[termsType] * 28;
        if (baseDay >= endDay) {
            answer.push(i + 1);
        }
    }
    return answer;
}


function convertToDay(date) {
    const [year, month, day] = date.split(".").map(Number);
    return (year * 12 + month) * 28 + day
}