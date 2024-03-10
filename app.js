const inputvalue = document.getElementById("text");
const lielement = document.getElementById("listitem");

function addtask() {
  if (inputvalue.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputvalue.value;
    lielement.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputvalue.value = "";
  savedata();
}

lielement.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", listitem.innerHTML);
}

function showtask() {
  listitem.innerHTML = localStorage.getItem("data");
}
showtask();
