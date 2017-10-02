function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
 const lis = document.querySelectorAll('.ranked-list');
 for (let i=0; i < lis.length ; i++) {
    lis[i].innerHTML = parseInt(lis[i] + n)
  }
}

function deepestChild() {
  const current = document.querySelectorAll('div#grand-node');
  let next = []
  while (Array.isArray(current)) {
    for (let i =0; i < current.length; i++) {
      next.push(current[i])
    }
    current = next.shift()
  }
  return current
}
