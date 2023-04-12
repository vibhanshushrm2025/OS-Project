var n;
function set() {
  n = document.getElementById('limit').value;
  // cnt();
  var ele = document.getElementById('limit');
  ele.remove();
  document.getElementById(
    'lab'
  ).innerText = `Your current limit for text message are set to be ${n} . Start Messaging........`;
  document.getElementById('setbtn').remove();
}
// function cnt() {
//     console.log(n);
// }
var cnt = [];
var arr = [];
function func(e) {
  // e.preventDefault();
  document.getElementById('show').innerHTML = '';
  var h = document.getElementById('message').value;
  // var sh = document.getElementById('show');
  // var sp = document.createElement('h3');
  // sp.innerText = h;
  // sh.appendChild(sp);
  // console.log("hii");
  // console.log(arr.length);
  var tt = true;
  for (var i = 0; i < arr.length; i++) {
    console.log('sl');
    if (arr[i] == h) {
      tt = false;
      cnt[i]++;
    }
  }
  if (tt) {
    arr.push(h);
    cnt.push(1);
  }
  // console.log(arr.length);
  // console.log(arr);
  // for (var i = 0; i < arr.length; i++){
  //     console.log(arr[i]);
  // }
  var vis = [];
  for (var i = 0; i < arr.length; i++) {
    vis.push(0);
  }
  var k = arr.length;
  var j = 0;
  var temp = true;
  console.log('n' + n);
  console.log(arr);
  console.log(cnt);
  console.log(vis);
  while (temp && j < n) {
    console.log('j' + j);
    j++;
    var ma = 0;
    var ss;
    for (var i = 0; i < k; i++) {
      if (ma < cnt[i] && vis[i] == 0) ma = cnt[i];
    }
    console.log(vis);
    console.log(ma);
    for (var i = 0; i < k; i++) {
      if (cnt[i] == ma && vis[i] == 0) {
        ss = arr[i];
        vis[i] = 1;
        console.log('I' + i);
        break;
      }
    }

    // var h = document.getElementById('message').value;
    var sh = document.getElementById('show');
    var sp = document.createElement('h3');
    sp.innerText = ss;
    sh.appendChild(sp);

    temp = false;
    for (var i = 0; i < k; i++) {
      if (vis[i] == 0) temp = true;
    }
  }
  // console.log(arr);
}
// function pd(e) {
//     e.preventDefault();
// }
