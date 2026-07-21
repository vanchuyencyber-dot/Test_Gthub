// Hàm chuyển đổi giữa các Tab Tool
function switchTab(index, filename) {
    // 1. Xử lý đổi màu nút bấm trên Menu
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Xử lý ẩn/hiện các khung iFrame
    const frames = document.querySelectorAll('.tab-frame');
    frames.forEach((frame, idx) => {
        if (idx === index) {
            frame.classList.add('active');
            // Tự động load lại file nếu cần refresh dữ liệu mới
            if(!frame.src.endsWith(filename)) {
                frame.src = filename;
            }
        } else {
            frame.classList.remove('active');
        }
    });
}