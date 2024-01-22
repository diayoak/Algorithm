# rank:	    1
# title:	핸드폰 번호 가리기
# link: 	https://programmers.co.kr/learn/courses/30/lessons/12948

def solution(phone_number):
    count = (len(phone_number) - 4)
    return "*" * count + phone_number[count:]