# rank:	    1
# title:	자릿수 더하기
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12931

def solution(n):
    result = 0
    
    for num in str(n):
        result += int(num)
        
    return result