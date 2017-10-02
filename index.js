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
  while (current.length > 0) {
    current = current.querySelector('div')
  }
  return current
}
deepestChild()
