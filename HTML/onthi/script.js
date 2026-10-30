function showToast(type = "info", message = "Hello", duration = 3000) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  toast.innerHTML = `
        <div class="toast-content">
            <i class="${getIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <div class="toast-progress" style="animation-duration: ${duration}ms"></div>
    `;

  container.appendChild(toast);

  // Auto remove
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Map icon
function getIcon(type) {
  switch (type) {
    case "success":
      return "fa-regular fa-circle-check";
    case "error":
      return "fa-regular fa-circle-xmark";
    case "warning":
      return "fa-solid fa-triangle-exclamation";
    default:
      return "fa-solid fa-circle-info";
  }
}

document.querySelector(".btn-success").onclick = () =>
  showToast("success", "Thành công rồi!", 3000);

document.querySelector(".btn-error").onclick = () =>
  showToast("error", "Có lỗi xảy ra!", 3000);

document.querySelector(".btn-info").onclick = () =>
  showToast("info", "Thông tin mới!", 3000);

document.querySelector(".btn-warning").onclick = () =>
  showToast("warning", "Cảnh báo!", 3000);