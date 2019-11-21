# rank:	    1
# title:	[2020카카오공채] 문자열 압축
# link: 	https://programmers.co.kr/learn/courses/30/lessons/60057

import math
from functools import cmp_to_key

def custom_compare(a, b):
    return len(a) - len(b)

def solution(s):
    list = [s]

    for i in range(1, math.floor(len(s) / 2) + 1):
        prevLetter = ""
        count = 1
        item = ""

        for j in range(0, len(s), i):
            if prevLetter == s[j:j+i]:
                count += 1
            else:
                if count >= 2:
                    item += str(count)
                item += prevLetter
                count = 1
            prevLetter = s[j:j+i]

        if count >= 2:
            item += str(count)
        item += prevLetter
        list.append(item)

    list.sort(key=cmp_to_key(custom_compare))
    return len(list[0])