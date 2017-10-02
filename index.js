function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
 var a = document.querySelectorAll('.ranked-list');
  for (let i=0; i < a.length; i++) {
    a[i] = parseInt(a[i]) + parseInt(n)
  }
  return document.querySelectorAll('.ranked-list') = a;
}

function deepestChild() {

}
