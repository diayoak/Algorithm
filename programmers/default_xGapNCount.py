# rank:	    1
# title:	x만큼 간격이 있는 n개의 숫자
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12954

def solution(x, n):
    return [x + x * i for i in range(n)]