/*BaiTap1*/
// ===============================
// MẢNG SẢN PHẨM
// ===============================

const products = [
  {
    name: "iPhone 15 Pro Max",
    price: 29990000,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
  },

  {
    name: "Samsung Galaxy S24 Ultra",
    price: 26990000,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
  },

  {
    name: "Xiaomi 14",
    price: 18990000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },

  {
    name: "Google Pixel 9 Pro",
    price: 24990000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  },

  {
    name: "OPPO Find X8 Pro",
    price: 23990000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
  },

  {
    name: "Vivo X200 Pro",
    price: 21990000,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
];

// ===============================
// HIỂN THỊ SẢN PHẨM
// ===============================

function displayProducts(productArray) {
  const productList = document.getElementById("productList");
  const message = document.getElementById("message");

  // Xóa sản phẩm cũ
  productList.innerHTML = "";

  // Xóa thông báo cũ
  message.textContent = "";

  // Nếu không tìm thấy sản phẩm
  if (productArray.length === 0) {
    message.textContent = "❌ Không tìm thấy sản phẩm phù hợp.";

    return;
  }

  // Duyệt qua từng sản phẩm
  productArray.forEach((product) => {
    // Tạo thẻ div
    const productDiv = document.createElement("div");

    productDiv.className = "product";

    // Tạo hình ảnh
    const img = document.createElement("img");

    img.src = product.image;
    img.alt = product.name;

    // Tạo tên sản phẩm
    const name = document.createElement("h3");

    name.textContent = product.name;

    // Tạo giá
    const price = document.createElement("div");

    price.className = "price";

    price.textContent = product.price.toLocaleString("vi-VN") + " VNĐ";

    // Tạo nút
    const button = document.createElement("button");

    button.textContent = "Xem sản phẩm";

    // Đưa các phần tử vào productDiv
    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(button);

    // Đưa sản phẩm vào danh sách
    productList.appendChild(productDiv);
  });
}

// ===============================
// CHỨC NĂNG TÌM KIẾM
// ===============================

function searchProducts() {
  const input = document.getElementById("searchInput");

  // Lấy dữ liệu người dùng nhập
  // trim() bỏ khoảng trắng thừa
  // toLowerCase() chuyển thành chữ thường

  const keyword = input.value.trim().toLowerCase();

  // Lọc sản phẩm
  const result = products.filter((product) => {
    // Chuyển tên sản phẩm về chữ thường
    const productName = product.name.toLowerCase();

    // Kiểm tra từ khóa có nằm trong tên không
    return productName.includes(keyword);
  });

  // Hiển thị kết quả
  displayProducts(result);
}

// ===============================
// NÚT TÌM KIẾM
// ===============================

document
  .getElementById("searchButton")
  .addEventListener("click", searchProducts);

// ===============================
// NHẤN ENTER ĐỂ TÌM KIẾM
// ===============================

document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchProducts();
    }
  });

// ===============================
// HIỂN THỊ SẢN PHẨM BAN ĐẦU
// ===============================

displayProducts(products);

/*BaiTap2*/
// ===============================
// LẤY FORM
// ===============================

const registerForm = document.getElementById("registerForm");

// ===============================
// XỬ LÝ SỰ KIỆN SUBMIT
// ===============================

registerForm.addEventListener("submit", function (event) {
  // Ngăn form reload trang
  event.preventDefault();

  // ===============================
  // LẤY DỮ LIỆU
  // ===============================

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value;

  const terms = document.getElementById("terms").checked;

  // ===============================
  // LẤY CÁC Ô THÔNG BÁO LỖI
  // ===============================

  const nameError = document.getElementById("nameError");

  const emailError = document.getElementById("emailError");

  const passwordError = document.getElementById("passwordError");

  const termsError = document.getElementById("termsError");

  const successMessage = document.getElementById("successMessage");

  // Xóa lỗi cũ
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  termsError.textContent = "";

  successMessage.style.display = "none";

  // ===============================
  // BIẾN KIỂM TRA
  // ===============================

  let isValid = true;

  // ===============================
  // KIỂM TRA HỌ TÊN
  // ===============================

  if (name === "") {
    nameError.textContent = "Vui lòng nhập họ và tên.";

    isValid = false;
  }

  // ===============================
  // KIỂM TRA EMAIL
  // ===============================

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailError.textContent = "Email không hợp lệ.";

    isValid = false;
  }

  // ===============================
  // KIỂM TRA MẬT KHẨU
  // ===============================

  /*
        Mật khẩu phải có:
        - Ít nhất 8 ký tự
        - Ít nhất 1 chữ hoa
        - Ít nhất 1 chữ thường
        - Ít nhất 1 số
    */

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "Mật khẩu phải có ít nhất 8 ký tự, " + "gồm chữ hoa, chữ thường và số.";

    isValid = false;
  }

  // ===============================
  // KIỂM TRA ĐIỀU KHOẢN
  // ===============================

  if (!terms) {
    termsError.textContent = "Bạn phải đồng ý với điều khoản.";

    isValid = false;
  }

  // ===============================
  // NẾU DỮ LIỆU KHÔNG HỢP LỆ
  // ===============================

  if (!isValid) {
    return;
  }

  // ===============================
  // LƯU LOCAL STORAGE
  // ===============================

  const userData = {
    name: name,

    email: email,

    // Không lưu password
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  // ===============================
  // HIỂN THỊ THÔNG BÁO
  // ===============================

  successMessage.textContent = "✓ Đăng ký thành công! Dữ liệu đã được lưu.";

  successMessage.style.display = "block";

  // Xóa nội dung form
  registerForm.reset();
});

//* BaiTap3*//
// ===============================
// CẤU HÌNH BAN ĐẦU
// ===============================

// 10 phút = 600 giây
const initialTime = 10 * 60;

// Thời gian còn lại
let timeLeft = initialTime;

// Biến lưu ID của setInterval
let timerInterval = null;

// ===============================
// LẤY CÁC PHẦN TỬ HTML
// ===============================

const timer = document.getElementById("timer");

const startButton = document.getElementById("startButton");

const pauseButton = document.getElementById("pauseButton");

const resetButton = document.getElementById("resetButton");

const modal = document.getElementById("modal");

const closeModal = document.getElementById("closeModal");

// ===============================
// HIỂN THỊ THỜI GIAN
// ===============================

function updateDisplay() {
  // Tính số phút
  const minutes = Math.floor(timeLeft / 60);

  // Tính số giây
  const seconds = timeLeft % 60;

  // Thêm số 0 phía trước
  const formattedMinutes = String(minutes).padStart(2, "0");

  const formattedSeconds = String(seconds).padStart(2, "0");

  // Hiển thị MM:SS
  timer.textContent = `${formattedMinutes}:${formattedSeconds}`;

  // ===========================
  // ANIMATION DƯỚI 1 PHÚT
  // ===========================

  if (timeLeft <= 60 && timeLeft > 0) {
    timer.classList.add("warning");
  } else {
    timer.classList.remove("warning");
  }
}

// ===============================
// BẮT ĐẦU ĐẾM NGƯỢC
// ===============================

function startTimer() {
  // Nếu timer đang chạy
  // thì không tạo thêm interval
  if (timerInterval !== null) {
    return;
  }

  // Tạo interval chạy mỗi 1 giây
  timerInterval = setInterval(function () {
    // Giảm 1 giây
    timeLeft--;

    // Cập nhật giao diện
    updateDisplay();

    // ===========================
    // KIỂM TRA HẾT THỜI GIAN
    // ===========================

    if (timeLeft <= 0) {
      // Dừng interval
      clearInterval(timerInterval);

      // Đặt lại biến interval
      timerInterval = null;

      // Hiển thị 00:00
      timeLeft = 0;

      updateDisplay();

      // Hiển thị modal
      modal.style.display = "flex";
    }
  }, 1000);
}

// ===============================
// TẠM DỪNG
// ===============================

function pauseTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);

    timerInterval = null;
  }
}

// ===============================
// ĐẶT LẠI
// ===============================

function resetTimer() {
  // Dừng interval hiện tại
  if (timerInterval !== null) {
    clearInterval(timerInterval);

    timerInterval = null;
  }

  // Trả về 10 phút
  timeLeft = initialTime;

  // Xóa animation
  timer.classList.remove("warning");

  // Cập nhật giao diện
  updateDisplay();

  // Đóng modal
  modal.style.display = "none";
}

// ===============================
// ĐÓNG MODAL
// ===============================

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// ===============================
// GÁN SỰ KIỆN CHO BUTTON
// ===============================

startButton.addEventListener("click", startTimer);

pauseButton.addEventListener("click", pauseTimer);

resetButton.addEventListener("click", resetTimer);

// ===============================
// HIỂN THỊ BAN ĐẦU
// ===============================

updateDisplay();

/*BaiTapTuLuan*/
// Thêm công việc mới
const addButton = document.getElementById("addItem");
const input = document.getElementById("newItem");
const taskList = document.getElementById("taskList");

function addTask() {
  const value = input.value.trim();
  if (!value) {
    alert("Vui lòng nhập nội dung công việc.");
    input.focus();
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = value;
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.action = "delete";
  button.textContent = "Xóa";
  li.append(span, button);
  taskList.appendChild(li);
  input.value = "";
  input.focus();
}

addButton.addEventListener("click", addTask);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addTask();
});

// Event Delegation: xử lý xóa cho cả mục cũ và mục mới
taskList.addEventListener("click", function (event) {
  const deleteButton = event.target.closest('[data-action="delete"]');
  if (deleteButton && taskList.contains(deleteButton)) {
    deleteButton.closest("li").remove();
  }
});
