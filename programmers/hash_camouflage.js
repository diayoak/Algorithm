/*
	스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.

	예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 
	다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.
*/
function solution(clothes) {
    let answer = 1;
	let obj = {};

	for (let i = 0; i < clothes.length; i++) {
		let [name, type] = clothes[i];
		obj[type] = obj[type] + 1 || 1;
	}
    
	for (let key in obj){
        answer *= (obj[key] + 1);
    }

    return answer - 1;
}