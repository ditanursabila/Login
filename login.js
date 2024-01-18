function tampil() {

    let nama = document.getElementById("nama").value
    let pw = document.getElementById("pw").value

    if (nama == "admin" && pw == "ditanr") {
        alert("Selamat Berhasil Login");
        window.location = "index.html";
    }
    else {
        alert("Anda Gagal");
    }
}
document.getElementById("login1").addEventListener("button", function(event){
  event.preventDefault();
  admin();
});