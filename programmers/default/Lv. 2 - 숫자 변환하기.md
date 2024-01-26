
[`Lv. 2` 숫자 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/154538)
===
>자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.  
> - x에 n을 더합니다.  
> - x에 2를 곱합니다.  
> - x에 3을 곱합니다.  
>
> 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.   

BFS 알고리즘을 활용한 문제
## 첫번째 시도 (런타임 에러 + 시간 초과)
```js
function solution(x, y, n) {
    const resolveCounts = bfs(x, y, n);
    const answer = resolveCounts.length ? Math.min(...resolveCounts) : -1;
    return answer;
}

function bfs(x, y, n, count = 0, resolveCounts = []) {
    if (x > y || Math.floor(y) != y) {
        return resolveCounts;
    }
    if (x == y) {
        resolveCounts.push(count);
        return resolveCounts;
    }
    bfs(x, y - n, n, count + 1, resolveCounts);
    bfs(x, y / 2, n, count + 1, resolveCounts);
    bfs(x, y / 3, n, count + 1, resolveCounts);
    return resolveCounts;
}
```
## 두번째 시도 (시간 초과)
런타임 에러(Maximum call stack size exceeded) 해결을 위해 재귀 호출 제거
```js
function solution(x, y, n) {
    const queue = [{y: y, count: 0}];
    const resolves = [];
    while (queue.length > 0) {
        const item = queue.shift();
        if (x == item.y) {
            resolves.push(item.count);
            continue;
        }
        
        const case1 = item.y - n;
        if (x <= case1) {
            queue.push({y: case1, count: item.count + 1});
        }

        const case2 = item.y / 2;
        if (x <= case2 && case2 == Math.floor(case2)) {
            queue.push({y: case2, count: item.count + 1});
        }
        
        const case3 = item.y / 3;
        if (x <= case3 && case3 == Math.floor(case3)) {
            queue.push({y: case3, count: item.count + 1});
        }
    }
    return resolves.length ? Math.min(...resolves) : -1;
}
```
### 새번째 시도