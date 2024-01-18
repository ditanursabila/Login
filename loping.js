let teenagers = ["mardiyani", "felisha", "sabila", "triani", "jamilah", "tsani"];
let tampil = teenagers.length;

let text="";
for (let i = 0; i < tampil; i++) {
  text += "<li>" + teenagers[i] + "</li>";
}

document.getElementById("kita").innerHTML = text;
