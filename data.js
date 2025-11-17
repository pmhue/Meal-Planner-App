// DATABASE MÓN ĂN VIỆT NAM
// Cấu trúc: Tên món, nguyên liệu (cho 2-3 người), nhóm món, bữa ăn phù hợp

const dishesDatabase = [
  // ========== MÓN CANH ==========
  {
    id: 1,
    name: "Canh chua cá",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    estimatedPrice: 65000,
    prepTime: 15,
    cookTime: 20,
    ingredients: [
      { name: "Cá lóc/cá basa", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Cà chua", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Thơm", amount: 0.25, unit: "quả", group: "Rau củ" },
      { name: "Bạc hà", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Giá đỗ", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Me", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Hành lá", amount: 1, unit: "cây", group: "Rau củ" }
    ]
  },
  {
    id: 2,
    name: "Canh bí đỏ nấu tôm",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Bí đỏ", amount: 300, unit: "g", group: "Rau củ" },
      { name: "Tôm tươi", amount: 200, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Hành lá", amount: 1, unit: "cây", group: "Rau củ" }
    ]
  },
  {
    id: 3,
    name: "Canh cải thịt bằm",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cải xanh/cải ngọt", amount: 300, unit: "g", group: "Rau củ" },
      { name: "Thịt bằm", amount: 150, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Nước mắm", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 4,
    name: "Canh mướp nấu tôm",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Mướp", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Tôm", amount: 150, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Nước mắm", amount: 1.5, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 5,
    name: "Canh khoai mỡ nấu tôm",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Khoai mỡ", amount: 300, unit: "g", group: "Rau củ" },
      { name: "Tôm khô", amount: 50, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Nước mắm", amount: 1.5, unit: "muỗng", group: "Gia vị" }
    ]
  },

  // ========== MÓN THỊT ==========
  {
    id: 6,
    name: "Thịt kho trứng",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt ba chỉ", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Trứng gà", amount: 5, unit: "quả", group: "Khác" },
      { name: "Nước dừa", amount: 300, unit: "ml", group: "Khác" },
      { name: "Nước mắm", amount: 3, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Hành tím", amount: 3, unit: "củ", group: "Rau củ" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 7,
    name: "Sườn xào chua ngọt",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Sườn non", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Cà chua", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Thơm", amount: 0.25, unit: "quả", group: "Rau củ" },
      { name: "Ớt chuông", amount: 1, unit: "quả", group: "Rau củ" },
      { name: "Tương cà", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Giấm", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" }
    ]
  },
  {
    id: 8,
    name: "Thịt luộc chấm mắm",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt ba chỉ", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Muối", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dưa leo", amount: 1, unit: "quả", group: "Rau củ" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Ớt", amount: 2, unit: "quả", group: "Rau củ" }
    ]
  },
  {
    id: 9,
    name: "Thịt bằm xào đậu que",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt bằm", amount: 200, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Đậu que", amount: 300, unit: "g", group: "Rau củ" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Nước mắm", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 10,
    name: "Bò xào cần tây",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt bò", amount: 300, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Cần tây", amount: 200, unit: "g", group: "Rau củ" },
      { name: "Hành tây", amount: 1, unit: "củ", group: "Rau củ" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Dầu hào", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Nước tương", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },

  // ========== MÓN GÀ ==========
  {
    id: 11,
    name: "Gà chiên nước mắm",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt gà", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Tỏi", amount: 4, unit: "tép", group: "Rau củ" },
      { name: "Đường", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 100, unit: "ml", group: "Gia vị" }
    ]
  },
  {
    id: 12,
    name: "Gà kho gừng",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt gà", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Gừng", amount: 50, unit: "g", group: "Rau củ" },
      { name: "Nước mắm", amount: 2.5, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Hành tím", amount: 3, unit: "củ", group: "Rau củ" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 13,
    name: "Cà ri gà",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt gà", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Khoai tây", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Cà rốt", amount: 1, unit: "củ", group: "Rau củ" },
      { name: "Hành tây", amount: 1, unit: "củ", group: "Rau củ" },
      { name: "Bột cà ri", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Nước cốt dừa", amount: 200, unit: "ml", group: "Khác" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" }
    ]
  },

  // ========== MÓN CÁ ==========
  {
    id: 14,
    name: "Cá kho tộ",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cá thu/cá basa", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Thịt ba chỉ", amount: 100, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nước mắm", amount: 3, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Nước dừa", amount: 200, unit: "ml", group: "Khác" },
      { name: "Hành tím", amount: 3, unit: "củ", group: "Rau củ" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Ớt", amount: 2, unit: "quả", group: "Rau củ" }
    ]
  },
  {
    id: 15,
    name: "Cá chiên nước mắm",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cá nục/cá thu", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Tỏi", amount: 3, unit: "tép", group: "Rau củ" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 100, unit: "ml", group: "Gia vị" }
    ]
  },
  {
    id: 16,
    name: "Cá hồi áp chảo",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cá hồi", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Bơ", amount: 20, unit: "g", group: "Gia vị" },
      { name: "Chanh", amount: 1, unit: "quả", group: "Rau củ" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" },
      { name: "Muối", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },

  // ========== MÓN HẢI SẢN ==========
  {
    id: 17,
    name: "Tôm rim thịt",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Tôm", amount: 300, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Thịt ba chỉ", amount: 150, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 18,
    name: "Mực xào hành cần",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Mực tươi", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Hành tây", amount: 1, unit: "củ", group: "Rau củ" },
      { name: "Cần tây", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Nước tương", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 19,
    name: "Nghêu hấp xả",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Nghêu", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Sả", amount: 2, unit: "cây", group: "Rau củ" },
      { name: "Ớt", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Hành lá", amount: 1, unit: "cây", group: "Rau củ" },
      { name: "Nước mắm", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },

  // ========== MÓN RAU ==========
  {
    id: 20,
    name: "Rau muống xào tỏi",
    category: "Rau",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Rau muống", amount: 400, unit: "g", group: "Rau củ" },
      { name: "Tỏi", amount: 3, unit: "tép", group: "Rau củ" },
      { name: "Nước mắm", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 21,
    name: "Cải xào nấm",
    category: "Rau",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cải ngọt", amount: 300, unit: "g", group: "Rau củ" },
      { name: "Nấm rơm", amount: 150, unit: "g", group: "Rau củ" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Dầu hào", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 22,
    name: "Cải luộc chấm tương",
    category: "Rau",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cải xanh", amount: 400, unit: "g", group: "Rau củ" },
      { name: "Muối", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Tương đen", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Tỏi", amount: 1, unit: "tép", group: "Rau củ" }
    ]
  },
  {
    id: 23,
    name: "Su hào xào",
    category: "Rau",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Su hào", amount: 300, unit: "g", group: "Rau củ" },
      { name: "Cà rốt", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Nước mắm", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 24,
    name: "Salad rau trộn",
    category: "Rau",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Xà lách", amount: 200, unit: "g", group: "Rau củ" },
      { name: "Cà chua cherry", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Dưa leo", amount: 1, unit: "quả", group: "Rau củ" },
      { name: "Dầu oliu", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Giấm", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Muối", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },

  // ========== MÓN TRỨNG - ĐẬU HŨ ==========
  {
    id: 25,
    name: "Trứng chiên",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Trứng gà", amount: 5, unit: "quả", group: "Khác" },
      { name: "Hành lá", amount: 1, unit: "cây", group: "Rau củ" },
      { name: "Nước mắm", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 2, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 26,
    name: "Trứng hấp",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Trứng gà", amount: 4, unit: "quả", group: "Khác" },
      { name: "Thịt bằm", amount: 100, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Hành lá", amount: 1, unit: "cây", group: "Rau củ" },
      { name: "Nước mắm", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 27,
    name: "Đậu hũ nhồi thịt",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Đậu hũ", amount: 4, unit: "miếng", group: "Khác" },
      { name: "Thịt bằm", amount: 150, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nấm mèo", amount: 50, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Hành lá", amount: 1, unit: "cây", group: "Rau củ" },
      { name: "Nước mắm", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 28,
    name: "Đậu hũ sốt cà chua",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Đậu hũ", amount: 4, unit: "miếng", group: "Khác" },
      { name: "Cà chua", amount: 3, unit: "quả", group: "Rau củ" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Đường", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Nước mắm", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },

  // ========== MÓN SÁNG / PHỞ BÚN ==========
  {
    id: 29,
    name: "Phở gà",
    category: "Món sáng",
    mealType: ["breakfast", "lunch"],
    servings: 3,
    ingredients: [
      { name: "Thịt gà", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Bánh phở", amount: 500, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Hành tây", amount: 1, unit: "củ", group: "Rau củ" },
      { name: "Gừng", amount: 30, unit: "g", group: "Rau củ" },
      { name: "Hành lá", amount: 2, unit: "cây", group: "Rau củ" },
      { name: "Giá đỗ", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Ngò rí", amount: 50, unit: "g", group: "Rau củ" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 30,
    name: "Bún bò",
    category: "Món sáng",
    mealType: ["breakfast", "lunch"],
    servings: 3,
    ingredients: [
      { name: "Thịt bò", amount: 300, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Bún tươi", amount: 500, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Sả", amount: 3, unit: "cây", group: "Rau củ" },
      { name: "Hành tím", amount: 3, unit: "củ", group: "Rau củ" },
      { name: "Mắm ruốc", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Rau sống", amount: 200, unit: "g", group: "Rau củ" }
    ]
  },
  {
    id: 31,
    name: "Hủ tiếu",
    category: "Món sáng",
    mealType: ["breakfast", "lunch"],
    servings: 3,
    ingredients: [
      { name: "Hủ tiếu khô", amount: 500, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Thịt heo", amount: 200, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Tôm", amount: 150, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Giá đỗ", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Hành lá", amount: 2, unit: "cây", group: "Rau củ" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 32,
    name: "Cháo gà",
    category: "Món sáng",
    mealType: ["breakfast", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt gà", amount: 300, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Gạo", amount: 200, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Gừng", amount: 20, unit: "g", group: "Rau củ" },
      { name: "Hành lá", amount: 2, unit: "cây", group: "Rau củ" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 33,
    name: "Cháo sườn",
    category: "Món sáng",
    mealType: ["breakfast", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Sườn non", amount: 300, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Gạo", amount: 200, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Gừng", amount: 20, unit: "g", group: "Rau củ" },
      { name: "Hành lá", amount: 2, unit: "cây", group: "Rau củ" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },

  // ========== MÓN LẨU ==========
  {
    id: 34,
    name: "Lẩu gà lá giang",
    category: "Lẩu",
    mealType: ["dinner"],
    servings: 4,
    ingredients: [
      { name: "Thịt gà", amount: 600, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Lá giang", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Nấm", amount: 200, unit: "g", group: "Rau củ" },
      { name: "Rau ăn lẩu", amount: 400, unit: "g", group: "Rau củ" },
      { name: "Nước mắm", amount: 3, unit: "muỗng", group: "Gia vị" },
      { name: "Sả", amount: 2, unit: "cây", group: "Rau củ" },
      { name: "Gừng", amount: 30, unit: "g", group: "Rau củ" }
    ]
  },
  {
    id: 35,
    name: "Lẩu thái",
    category: "Lẩu",
    mealType: ["dinner"],
    servings: 4,
    ingredients: [
      { name: "Tôm", amount: 300, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Mực", amount: 200, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Cá", amount: 200, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nấm", amount: 200, unit: "g", group: "Rau củ" },
      { name: "Rau ăn lẩu", amount: 400, unit: "g", group: "Rau củ" },
      { name: "Sả", amount: 3, unit: "cây", group: "Rau củ" },
      { name: "Ớt", amount: 5, unit: "quả", group: "Rau củ" },
      { name: "Nước mắm", amount: 3, unit: "muỗng", group: "Gia vị" }
    ]
  },

  // ========== MÓN THÊM ==========
  {
    id: 36,
    name: "Thịt rim",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt ba chỉ", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Trứng cút", amount: 10, unit: "quả", group: "Khác" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Tỏi", amount: 3, unit: "tép", group: "Rau củ" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 37,
    name: "Cá nục kho",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cá nục", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nước mắm", amount: 2.5, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Hành tím", amount: 3, unit: "củ", group: "Rau củ" },
      { name: "Ớt", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 38,
    name: "Rau lang luộc",
    category: "Rau",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Rau lang", amount: 400, unit: "g", group: "Rau củ" },
      { name: "Muối", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Mắm tôm", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 39,
    name: "Bí đao xào",
    category: "Rau",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Bí đao", amount: 400, unit: "g", group: "Rau củ" },
      { name: "Tôm khô", amount: 30, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Nước mắm", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 40,
    name: "Khổ qua xào trứng",
    category: "Rau",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Khổ qua", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Trứng gà", amount: 3, unit: "quả", group: "Khác" },
      { name: "Tỏi", amount: 2, unit: "tép", group: "Rau củ" },
      { name: "Nước mắm", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 41,
    name: "Gà rang muối",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt gà", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Tỏi", amount: 5, unit: "tép", group: "Rau củ" },
      { name: "Ớt", amount: 3, unit: "quả", group: "Rau củ" },
      { name: "Lá chanh", amount: 5, unit: "lá", group: "Rau củ" },
      { name: "Muối", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 2, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 42,
    name: "Sườn nướng",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Sườn", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Tỏi", amount: 4, unit: "tép", group: "Rau củ" },
      { name: "Nước tương", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Mật ong", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 43,
    name: "Canh rau ngót nấu tôm",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Rau ngót", amount: 300, unit: "g", group: "Rau củ" },
      { name: "Tôm", amount: 150, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Hành tím", amount: 2, unit: "củ", group: "Rau củ" },
      { name: "Nước mắm", amount: 1.5, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 44,
    name: "Canh khổ qua nhồi thịt",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Khổ qua", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Thịt bằm", amount: 200, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nấm mèo", amount: 30, unit: "g", group: "Đồ khô/Đồ hộp" },
      { name: "Hành lá", amount: 1, unit: "cây", group: "Rau củ" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 0.5, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 45,
    name: "Thịt kho củ cải",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt ba chỉ", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Củ cải trắng", amount: 300, unit: "g", group: "Rau củ" },
      { name: "Nước mắm", amount: 3, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Hành tím", amount: 3, unit: "củ", group: "Rau củ" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 46,
    name: "Cá diêu hồng hấp",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cá diêu hồng", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Gừng", amount: 30, unit: "g", group: "Rau củ" },
      { name: "Hành lá", amount: 2, unit: "cây", group: "Rau củ" },
      { name: "Nước tương", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Dầu ăn", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 47,
    name: "Thịt ba chỉ nướng",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Thịt ba chỉ", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Tỏi", amount: 4, unit: "tép", group: "Rau củ" },
      { name: "Sả", amount: 2, unit: "cây", group: "Rau củ" },
      { name: "Mật ong", amount: 1, unit: "muỗng", group: "Gia vị" },
      { name: "Nước tương", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 48,
    name: "Canh chua cá lóc",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cá lóc", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Thơm", amount: 0.25, unit: "quả", group: "Rau củ" },
      { name: "Cà chua", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Bạc hà", amount: 100, unit: "g", group: "Rau củ" },
      { name: "Me", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Nước mắm", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  },
  {
    id: 49,
    name: "Cá kho tiêu",
    category: "Món mặn",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Cá thu", amount: 400, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Nước mắm", amount: 3, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Tiêu", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Hành tím", amount: 4, unit: "củ", group: "Rau củ" },
      { name: "Ớt", amount: 3, unit: "quả", group: "Rau củ" }
    ]
  },
  {
    id: 50,
    name: "Canh ngao nấu chua",
    category: "Canh",
    mealType: ["lunch", "dinner"],
    servings: 3,
    ingredients: [
      { name: "Ngao", amount: 500, unit: "g", group: "Thịt/Cá/Hải sản" },
      { name: "Me", amount: 2, unit: "muỗng", group: "Gia vị" },
      { name: "Cà chua", amount: 2, unit: "quả", group: "Rau củ" },
      { name: "Rau ngổ", amount: 50, unit: "g", group: "Rau củ" },
      { name: "Nước mắm", amount: 1.5, unit: "muỗng", group: "Gia vị" },
      { name: "Đường", amount: 1, unit: "muỗng", group: "Gia vị" }
    ]
  }
];

// Nhóm món theo loại
const categoryGroups = {
  "Canh": [],
  "Món mặn": [],
  "Rau": [],
  "Món sáng": [],
  "Lẩu": []
};

// Phân loại món
dishesDatabase.forEach(dish => {
  if (categoryGroups[dish.category]) {
    categoryGroups[dish.category].push(dish);
  }
});