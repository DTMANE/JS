// function timed() {
//   const d = new Date();
//   var refresh = 1000;
//   let msg = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//   console.log(msg);
//   const heading = document.querySelector("#t");
//   heading.innerHTML = msg;
//   if (msg.equals("10:7:00")) {
//     console.log("true");
//   }
// }

// function display(params) {}
function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  var x = new Date();
  var y = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
  var yy = "" + x.getHours() + x.getMinutes() + x.getSeconds();
  document.getElementById("t").innerHTML = y;
  var s = parseInt(yy);
  console.log(s);
  if (s == 10460) {
    document.getElementById("t").innerHTML = "night mode on";
  } else {
    // display_c();
  }
}

function myFunction() {
  console.log(document.getElementById("hr").value);
}
var btn = document.getElementsByTagName("button");
btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("nightMode");
});
