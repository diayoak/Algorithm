/*
	rank:	2
	title:	[2020카카오공채] 괄호 변환
	link: 	https://programmers.co.kr/learn/courses/30/lessons/60058
*/

function solution(p) {
    if (p == "") return p;

    let u = "";
    let v = "";

    for (let i = 0, strCount = 0; i < p.length; i++) {
        strCount += p[i] == "(" ? 1 : -1;
        u += p[i];

        if (!strCount) {
            v = p.substring(i + 1, p.length);
            break;
        }
    }

    let status = true;
    for (let i = 0, strCount = 0; i < u.length; i++) {
        strCount += u[i] == "(" ? 1 : -1;

        if (strCount < 0) {
            status = false;
            break;
        }
    }

    if (status) {
        return u + solution(v);
    }

    let result = `(${solution(v)})`;
    let strKey = {
        "(": ")",
        ")": "("
    };

    for (let i = 1; i < u.length - 1; i++) {
        result += strKey[u[i]];
    }

    return result;
}