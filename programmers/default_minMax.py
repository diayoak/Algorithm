# rank:	    2
# title:	최댓값과 최솟값
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12939

def solution(s):
    arr = [int(num) for num in s.split(" ")]
    return "{} {}".format(min(arr), max(arr))