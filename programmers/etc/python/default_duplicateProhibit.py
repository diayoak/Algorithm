# rank:	1
# title:	같은 숫자는 싫어
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12906

def solution(arr):
    return [value for idx, value in enumerate(arr) if idx == 0 or arr[idx - 1] != value]