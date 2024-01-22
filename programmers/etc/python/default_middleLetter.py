# rank:	1
# title:	가운데 글자 가져오기
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12903

import math

def solution(s):
    idx = len(s) / 2 - 0.5
    return s[math.floor(idx):math.ceil(idx) + 1]