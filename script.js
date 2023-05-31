// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Search active
document.getElementById("search").addEventListener("click", function () {
  // Kode untuk tindakan pencarian
  window.location.href = "https://google.com";
  // Ganti dengan logika atau fungsi yang sesuai dengan fitur pencarian
  //console.log("Fitur Pencarian diklik");
});

// Shopping-cart active
document.getElementById("shopping-cart").addEventListener("click", function () {
  // Kode untuk tindakan keranjang belanja
  var item = "item yang ingin dibeli"; // Ganti dengan item yang sesuai
  window.location.href = "https://www.example.com/purchase?item=" + item;
  // Ganti dengan logika atau fungsi yang sesuai dengan fitur keranjang belanja
  //console.log("Fitur Keranjang Belanja diklik");
});

// Purchase Item from Menu
function redirectToPurchase(item) {
  // Ganti URL berikut dengan URL halaman pembelian yang sesuai
  window.location.href = "https://www.example.com/purchase?item=" + item;
}
