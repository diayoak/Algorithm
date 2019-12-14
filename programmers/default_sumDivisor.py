# rank:	    1
# title:	약수의 합
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12928

def solution(n):
    result = 0
    
    for i in range(1, n + 1):
        if n % i == 0:
            result += i
    
    return result