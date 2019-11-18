# rank:	    1
# title:	완주하지 못한 선수
# link: 	https://programmers.co.kr/learn/courses/30/lessons/42576

def solution(participant, completion):
    list = {}
    
    for name in participant:
        if (name in list.keys()):
            list[name] = list[name] + 1
        else:
            list[name] = 1
            
    for name in completion:
        list[name] = list[name] - 1
        
    for name in list.keys():
        if (list[name] > 0):
            return name