// script.js

function thayDoiChu() {
  const header = document.querySelector("header h1");
  if (header.textContent.includes("Xin chào")) {
    header.textContent = "Chào bạn, tôi là một lập trình viên!";
  } else {
    header.textContent = "Xin chào, tôi là Lê Thiên";
  }
}
