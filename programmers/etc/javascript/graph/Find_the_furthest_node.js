/*
	rank:	  3
	title:	가장 먼 노드
	link: 	https://programmers.co.kr/learn/courses/30/lessons/49189?language=javascript
*/

function searchDepth (nodeTree, nodeDistance, depth = 1) {
  let nodeChildList = []
  
  for (let key in nodeTree) {
      if (nodeDistance[key - 1] == 0) {
          nodeDistance[key - 1] = depth
          if (nodeTree[key] != {}) {
              nodeChildList.push(nodeTree[key])
          }
      }
  }

  nodeChildList.forEach(item => searchDepth(item, nodeDistance, depth + 1))
}

function solution(n, vertex) {
  const nodeTree = new Array(n).fill(0).map(() => Object({}))
  const nodeDistance = new Array(n - 1).fill(0)

  vertex.forEach(([a, b]) => {
      nodeTree[a - 1][b - 1] = nodeTree[b - 1]
      nodeTree[b - 1][a - 1] = nodeTree[a - 1]
  })
  searchDepth(nodeTree[0], nodeDistance)

  return nodeDistance.filter(val => val == Math.max(...nodeDistance)).length;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))