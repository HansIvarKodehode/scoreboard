let hs = document.getElementById("homeScore");
let gs = document.getElementById("guestScore");
let dbg = document.getElementById("debugging");
// let areWeDebugging = true;

document.getElementById("home1").addEventListener("click", h1);
document.getElementById("home2").addEventListener("click", h2);
document.getElementById("home3").addEventListener("click", h3);

document.getElementById("guest1").addEventListener("click", g1);
document.getElementById("guest2").addEventListener("click", g2);
document.getElementById("guest3").addEventListener("click", g3);

function add(numb, whom) {
  let toBeAdded = Number(whom.textContent);
  whom.textContent = toBeAdded + numb;
  console.log(whom.textContent);

  //   since vs code doesn't like showing the console
  // i have added a rather stupiddebugging method.
  if (areWeDebugging) {
    if (whom == gs) {
      dbg.textContent = "gs: " + whom.textContent;
    }
    if (whom == hs) {
      dbg.textContent = "hs: " + whom.textContent;
    }
  }
}

function h1() {
  add(1, hs);
}
function h2() {
  add(2, hs);
}
function h3() {
  add(3, hs);
}

function g1() {
  add(1, gs);
}
function g2() {
  add(2, gs);
}
function g3() {
  add(3, gs);
}
