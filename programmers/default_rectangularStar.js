/*
	rank:	1
	title:	직사각형 별찍기
	link: 	https://programmers.co.kr/learn/courses/30/lessons/12969
*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a, b] = data.split(" ");
    console.log(("*".repeat(a) + "\n").repeat(b));
});