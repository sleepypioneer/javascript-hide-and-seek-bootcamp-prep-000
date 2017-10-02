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
  while (current.length > 1) {
    console.log(current)
    c += ' div'
    console.log(c)
    current = document.querySelectorAll(c)
    console.log(current)
  }
  c -= ' div'

  return  document.querySelector(c)
}
