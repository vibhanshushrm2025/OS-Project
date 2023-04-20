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
    var doc = document.querySelector('.acd');
    doc.innerText = `Your Top ${n} messages are shown in below table : `
}
// function cnt() {
//     console.log(n);
// }
var cnt = [];
var arr = [];
function func(e) {
    var sh = document.querySelector('.abcd');
    sh.innerHTML = '';
    var varr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.innerHTML =
      `Messages&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
    sh.appendChild(varr);
    th2.innerHTML = 'Occurrance';
    //   th1.classList("aa");
    varr.appendChild(th1);
    varr.appendChild(th2);
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
    var sss;
    for (var i = k - 1; i >= 0; i--) {
      if (cnt[i] == ma && vis[i] == 0) {
        ss = arr[i];
        sss = cnt[i];
        vis[i] = 1;
        console.log('I' + i);
        break;
      }
    }

    // var h = document.getElementById('message').value;
      
      
      var ssss = document.createElement('tr');
      var td1 = document.createElement('td');
      td1.innerText = ss;
      var td2 = document.createElement('td');
      td2.innerText = sss;
      ssss.appendChild(td1);
      ssss.appendChild(td2);
      sh.appendChild(ssss);


    // var sp = document.createElement('h3');
    // sp.innerText = ss + '   ' + sss;
    // sh.appendChild(sp);

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
