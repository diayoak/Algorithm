# rank:	1
# title:	문자열 다루기 기본
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12918
    
import re

def solution(s):
    reg = re.compile("^(\d{4}|\d{6})$");
    return bool(reg.match(s))