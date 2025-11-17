// ========== PRICE DATABASE - CẬP NHẬT GIÁ THỊ TRƯỜNG 2025 ==========
// Giá tham khảo theo thị trường Việt Nam (Hà Nội/HCM)

const priceDatabase = {
  // THỊT (giá/kg)
  "Thịt ba chỉ": { price: 95000, unit: "kg" },
  "Thịt bằm": { price: 85000, unit: "kg" },
  "Thịt gà": { price: 65000, unit: "kg" },
  "Thịt bò": { price: 180000, unit: "kg" },
  "Thịt heo": { price: 90000, unit: "kg" },
  "Thịt nạc vai": { price: 110000, unit: "kg" },
  "Thịt nạc đùi": { price: 105000, unit: "kg" },
  "Sườn": { price: 110000, unit: "kg" },
  "Sườn non": { price: 120000, unit: "kg" },

  // CÁ (giá/kg) - Điều chỉnh thực tế
  "Cá thu": { price: 75000, unit: "kg" },
  "Cá basa": { price: 55000, unit: "kg" },
  "Cá lóc": { price: 95000, unit: "kg" },
  "Cá nục": { price: 60000, unit: "kg" },
  "Cá hồi": { price: 280000, unit: "kg" },
  "Cá diêu hồng": { price: 130000, unit: "kg" },
  "Cá lóc/cá basa": { price: 70000, unit: "kg" },
  "Cá nục/cá thu": { price: 68000, unit: "kg" },
  "Cá thu/cá basa": { price: 65000, unit: "kg" },

  // HẢI SẢN (giá/kg) - Điều chỉnh thực tế
  "Tôm": { price: 160000, unit: "kg" },
  "Tôm tươi": { price: 165000, unit: "kg" },
  "Mực": { price: 120000, unit: "kg" },
  "Mực tươi": { price: 125000, unit: "kg" },
  "Nghêu": { price: 40000, unit: "kg" },
  "Ngao": { price: 45000, unit: "kg" },

  // RAU CỦ (giá/kg) - Điều chỉnh để phù hợp ngân sách
  "Cải xanh": { price: 10000, unit: "kg" },
  "Cải ngọt": { price: 10000, unit: "kg" },
  "Cải xanh/cải ngọt": { price: 10000, unit: "kg" },
  "Rau muống": { price: 7000, unit: "kg" },
  "Rau lang": { price: 8000, unit: "kg" },
  "Rau ngót": { price: 12000, unit: "kg" },
  "Rau ngổ": { price: 15000, unit: "kg" },
  "Rau sống": { price: 20000, unit: "kg" },
  "Rau ăn lẩu": { price: 25000, unit: "kg" },
  "Xà lách": { price: 28000, unit: "kg" },

  "Bí đỏ": { price: 8000, unit: "kg" },
  "Bí đao": { price: 6000, unit: "kg" },
  "Mướp": { price: 10000, unit: "kg" },
  "Bạc hà": { price: 15000, unit: "kg" },
  "Khổ qua": { price: 18000, unit: "kg" },

  "Khoai mỡ": { price: 8000, unit: "kg" },
  "Khoai tây": { price: 15000, unit: "kg" },
  "Cà rốt": { price: 10000, unit: "kg" },
  "Cà chua": { price: 15000, unit: "kg" },
  "Cà chua cherry": { price: 30000, unit: "kg" },
  "Dưa leo": { price: 10000, unit: "kg" },
  "Đậu que": { price: 18000, unit: "kg" },
  "Su hào": { price: 8000, unit: "kg" },
  "Củ cải trắng": { price: 7000, unit: "kg" },
  "Cần tây": { price: 38000, unit: "kg" },

  // GIA VỊ & CỦ
  "Hành tím": { price: 18000, unit: "kg" },
  "Hành lá": { price: 20000, unit: "kg" },
  "Hành tây": { price: 15000, unit: "kg" },
  "Tỏi": { price: 60000, unit: "kg" },
  "Gừng": { price: 30000, unit: "kg" },
  "Sả": { price: 15000, unit: "kg" },
  "Lá chanh": { price: 70000, unit: "kg" },
  "Lá giang": { price: 85000, unit: "kg" },
  "Ớt": { price: 45000, unit: "kg" },
  "Ớt chuông": { price: 35000, unit: "kg" },
  "Chanh": { price: 20000, unit: "kg" },

  // QUẢ
  "Thơm": { price: 20000, unit: "quả" },
  "Giá đỗ": { price: 12000, unit: "kg" },
  "Ngò rí": { price: 25000, unit: "kg" },

  // TRỨNG (giá/quả)
  "Trứng gà": { price: 3500, unit: "quả" },
  "Trứng cút": { price: 1000, unit: "quả" },
  "Trứng vịt": { price: 4000, unit: "quả" },
  "Trứng muối": { price: 5000, unit: "quả" },

  // ĐỒ KHÔ (giá/kg)
  "Nấm mèo": { price: 180000, unit: "kg" },
  "Nấm rơm": { price: 45000, unit: "kg" },
  "Nấm": { price: 50000, unit: "kg" },
  "Tôm khô": { price: 280000, unit: "kg" },
  "Bánh phở": { price: 28000, unit: "kg" },
  "Bún tươi": { price: 12000, unit: "kg" },
  "Bún khô": { price: 25000, unit: "kg" },
  "Hủ tiếu khô": { price: 35000, unit: "kg" },
  "Gạo": { price: 18000, unit: "kg" },

  // KHÁC
  "Đậu hũ": { price: 5000, unit: "miếng" },
  "Nước dừa": { price: 12000, unit: "lít" },
  "Nước cốt dừa": { price: 28000, unit: "lít" },
  "Bơ": { price: 180000, unit: "kg" },

  // GIA VỊ KHÔNG TÍNH GIÁ (hoặc giá thấp)
  "Nước mắm": { price: 0, unit: "muỗng" },
  "Dầu ăn": { price: 0, unit: "muỗng" },
  "Dầu hào": { price: 0, unit: "muỗng" },
  "Dầu oliu": { price: 0, unit: "muỗng" },
  "Nước tương": { price: 0, unit: "muỗng" },
  "Tương cà": { price: 0, unit: "muỗng" },
  "Tương đen": { price: 0, unit: "muỗng" },
  "Đường": { price: 0, unit: "muỗng" },
  "Muối": { price: 0, unit: "muỗng" },
  "Tiêu": { price: 0, unit: "muỗng" },
  "Me": { price: 0, unit: "muỗng" },
  "Giấm": { price: 0, unit: "muỗng" },
  "Bột cà ri": { price: 0, unit: "muỗng" },
  "Mắm ruốc": { price: 0, unit: "muỗng" },
  "Mắm tôm": { price: 0, unit: "muỗng" },
  "Mật ong": { price: 0, unit: "muỗng" }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { priceDatabase };
}
