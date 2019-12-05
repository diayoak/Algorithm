# rank:		1
# title:	자연수 뒤집어 배열로 만들기
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12932

def solution(n):
    return [int(value) for value in reversed(str(n))]