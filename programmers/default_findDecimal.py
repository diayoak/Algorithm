# rank:	    1
# title:	소수 찾기
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12921

def solution(n):
    arr = [True for value in range(2, n + 1)]

    for i, value in enumerate(arr):
        for j in range((i + 2) ** 2, n + 1, i + 2):
            arr[j - 2] = False

    return len([value for value in arr if value])