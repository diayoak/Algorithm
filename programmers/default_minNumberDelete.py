# rank:	    1
# title:	제일 작은 수 제거하기
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12935

def solution(arr):
    minValue = min(arr)
    return [i for i in arr if i != minValue] or [-1]