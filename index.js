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
  let current = document.querySelectorAll('#grand-node');
  let c = '#grand-node'
  do {
    c += ' div'
    current = document.querySelectorAll(c)
  while (current.length > 1)

  return  document.querySelector(c)
}
