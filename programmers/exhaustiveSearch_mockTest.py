# rank:	    1
# title:	모의고사
# link: 	https://programmers.co.kr/learn/courses/30/lessons/42840

def solution(answers):
    userPattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    list = [0, 0, 0]
    
    for idx, value in enumerate(answers):
        for uidx, pattern in enumerate(userPattern):
            if value == pattern[idx % len(pattern)]:
                list[uidx] += 1
    
    result = []
    maxValue = max(list);
    for uidx, value in enumerate(list):
        if value == maxValue:
            result.append(uidx + 1)
    
    return result