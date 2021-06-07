# rank:	1
# title:	나누어 떨어지는 숫자 배열
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12910

def solution(arr, divisor):
    return sorted([value for value in arr if value % divisor == 0]) or [-1]