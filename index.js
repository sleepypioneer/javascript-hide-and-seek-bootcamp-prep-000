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
  let current = document.querySelectorAll('div#grand-node');
  if (Array.isArray(current)) {
    let a = current[0]
    current = document.querySelectorAll(a)
  else {
    return current
  }
}
  
