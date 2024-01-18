function tampil() {
  let user = document.getElementById("user").value;
  let pwd = document.getElementById("pwd").value;

  if (user == "ditanrs" && pwd == "dta123") {
    alert("Selamat Anda Berhasil Login");
    window.location = "lop.html";
  } else {
    alert("Maaf Anda Gagal Login");
  }
}
document.getElementById("login1").addEventListener("submit", function (event) {
  event.preventDefault();
  tampil();
});
