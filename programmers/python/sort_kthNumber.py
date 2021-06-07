# rank:	    1
# title:	K번째수
# link: 	https://programmers.co.kr/learn/courses/30/lessons/42748

def solution(array, commands):
    answer = []
    
    for [sp, ep, idx] in commands:
        list = sorted(array[sp - 1:ep])
        answer.append(list[idx - 1])
    
    return answer