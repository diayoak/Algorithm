# rank:	1
# title:	2016년
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12901

import datetime

def solution(a, b):
    return datetime.datetime(2016, a, b, 0, 0).strftime("%a").upper()