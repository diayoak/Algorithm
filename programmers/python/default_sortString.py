# rank:	1
# title:	문자열 내 마음대로 정렬하기
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12915

def solution(strings, n):
    return sorted(sorted(strings), key = lambda x: x[n])