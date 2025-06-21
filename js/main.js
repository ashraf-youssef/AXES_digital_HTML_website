// تخزين الوضع في localStorage
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// تفعيل الوضع المحفوظ عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }
});

// عند الضغط على الزر
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // تخزين الوضع الحالي
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
