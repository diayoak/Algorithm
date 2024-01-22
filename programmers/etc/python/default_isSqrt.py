# rank:	    1
# title:	정수 제곱근 판별
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12934

import math

def solution(n):
    sqrt = math.sqrt(n)
    isRoot = sqrt == math.floor(sqrt)
    return math.pow(sqrt + 1, 2) if isRoot else -1