let hs = document.getElementById("homeScore");
let gs = document.getElementById("guestScore");
let dbg = document.getElementById("debugging");
// let areWeDebugging = true;

document.getElementById("home1").addEventListener("click", () => add(1, hs));
document.getElementById("home2").addEventListener("click", () => add(2, hs));
document.getElementById("home3").addEventListener("click", () => add(3, hs));

document.getElementById("guest1").addEventListener("click", () => add(1, gs));
document.getElementById("guest2").addEventListener("click", () => add(2, gs));
document.getElementById("guest3").addEventListener("click", () => add(3, gs));

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
