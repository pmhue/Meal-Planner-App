// ========== MEAL PLANNER PRO - JAVASCRIPT ==========

// Application State
const appState = {
  numberOfPeople: 4,
  numberOfDays: 7,
  mode: 'auto', // 'auto', 'manual', 'byday'
  currentStep: 1,
  mealPlan: [], // [{day, breakfast, lunch, dinner}]
  selectedDishes: new Set(),
  shoppingList: {},
  totalPrice: 0,
  dayPlans: {} // For 'byday' mode: {1: {breakfast: [], lunch: [], dinner: []}}
};

// Serving Multipliers (điều chỉnh để giá cả hợp lý hơn)
const servingMultipliers = {
  1: 0.4, 2: 0.6, 3: 0.8, 4: 1.0,
  5: 1.1, 6: 1.3, 7: 1.5, 8: 1.7
};

// Icons
const categoryIcons = {
  "Canh": "🥘",
  "Món mặn": "🍖",
  "Rau": "🥬",
  "Món sáng": "🍜",
  "Lẩu": "🍲"
};

const groupIcons = {
  "Thịt/Cá/Hải sản": "🥩",
  "Rau củ": "🥬",
  "Đồ khô/Đồ hộp": "📦",
  "Gia vị": "🧂",
  "Khác": "📌"
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  updateStepIndicators();
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
  // People buttons
  document.querySelectorAll('.people-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.people-btn').forEach(b => {
        b.classList.remove('border-primary-500', 'bg-primary-50');
        b.classList.add('border-gray-300');
      });
      this.classList.remove('border-gray-300');
      this.classList.add('border-primary-500', 'bg-primary-50');
      appState.numberOfPeople = parseInt(this.dataset.value);
    });
  });

  // Days buttons
  document.querySelectorAll('.days-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.days-btn').forEach(b => {
        b.classList.remove('border-primary-500', 'bg-primary-50');
        b.classList.add('border-gray-300');
      });
      this.classList.remove('border-gray-300');
      this.classList.add('border-primary-500', 'bg-primary-50');
      appState.numberOfDays = parseInt(this.dataset.value);
    });
  });

  // Mode buttons
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.mode-btn').forEach(b => {
        b.classList.remove('gradient-bg', 'text-white');
        b.classList.add('bg-white', 'border-2', 'border-gray-300');
        b.querySelector('i').classList.remove('text-white');
        b.querySelector('i').classList.add('text-gray-600');
        b.querySelector('h3').classList.remove('text-white');
        b.querySelector('h3').classList.add('text-gray-800');
        b.querySelector('p').classList.remove('text-white', 'opacity-90');
        b.querySelector('p').classList.add('text-gray-600');
      });

      this.classList.remove('bg-white', 'border-2', 'border-gray-300');
      this.classList.add('gradient-bg', 'text-white');
      this.querySelector('i').classList.remove('text-gray-600');
      this.querySelector('i').classList.add('text-white');
      this.querySelector('h3').classList.remove('text-gray-800');
      this.querySelector('h3').classList.add('text-white');
      this.querySelector('p').classList.remove('text-gray-600');
      this.querySelector('p').classList.add('text-white', 'opacity-90');

      appState.mode = this.dataset.mode;
    });
  });

  // Navigation
  const nextToStep2 = document.getElementById('nextToStep2');
  if (nextToStep2) nextToStep2.addEventListener('click', () => goToStep(2));

  // Tabs - will be attached when step 3 is shown
  // Export buttons - will be attached when step 3 is shown
}

// ========== NAVIGATION ==========
function goToStep(step) {
  appState.currentStep = step;

  // Hide all steps
  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.add('hidden');

  // Show current step
  document.getElementById(`step${step}`).classList.remove('hidden');
  document.getElementById(`step${step}`).classList.add('animate-fade-in');

  // Update indicators
  updateStepIndicators();

  // Load content for step 2
  if (step === 2) {
    loadStep2Content();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepIndicators() {
  const indicators = ['step1Indicator', 'step2Indicator', 'step3Indicator'];

  indicators.forEach((id, index) => {
    const el = document.getElementById(id);
    if (index + 1 < appState.currentStep) {
      el.classList.remove('bg-gray-300');
      el.classList.add('gradient-bg');
    } else if (index + 1 === appState.currentStep) {
      el.classList.remove('bg-gray-300');
      el.classList.add('gradient-bg');
    } else {
      el.classList.remove('gradient-bg');
      el.classList.add('bg-gray-300');
    }
  });
}

// ========== RENDER STEP SHELLS ==========
function renderStep2Shell() {
  const step2 = document.getElementById('step2');
  step2.innerHTML = `
    <div class="max-w-6xl mx-auto">
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i class="fas fa-utensils text-primary-500 mr-3"></i>
          <span>Bước 2: Chọn món ăn</span>
        </h2>

        <div id="dishSelectionContent"></div>

        <!-- Navigation Buttons -->
        <div class="mt-8 flex justify-between">
          <button id="backToStep1" class="bg-gray-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-600 transition">
            <i class="fas fa-arrow-left mr-2"></i>
            Quay lại
          </button>
          <button id="nextToStep3" class="gradient-bg text-white px-8 py-3 rounded-xl font-bold hover:shadow-2xl transition transform hover:scale-105">
            Xem kết quả
            <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners
  document.getElementById('backToStep1').addEventListener('click', () => goToStep(1));
  document.getElementById('nextToStep3').addEventListener('click', () => generateResults());
}

function renderStep3Shell() {
  const step3 = document.getElementById('step3');
  step3.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i class="fas fa-chart-pie text-primary-500 mr-3"></i>
          <span>Bước 3: Kết quả và danh sách mua</span>
        </h2>

        <!-- Dashboard -->
        <div class="grid md:grid-cols-4 gap-6 mb-8">
          <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
            <p class="text-sm text-gray-600 mb-2">💰 Tổng chi phí</p>
            <p id="totalCost" class="text-3xl font-bold text-green-600">0đ</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
            <p class="text-sm text-gray-600 mb-2">🍽️ Số món ăn</p>
            <p id="totalDishes" class="text-3xl font-bold text-blue-600">0</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
            <p class="text-sm text-gray-600 mb-2">🛒 Số mặt hàng</p>
            <p id="totalItems" class="text-3xl font-bold text-purple-600">0</p>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
            <p class="text-sm text-gray-600 mb-2">📈 TB/ngày</p>
            <p id="avgCostPerDay" class="text-3xl font-bold text-orange-600">0đ</p>
          </div>
        </div>

        <!-- Tabs -->
        <div class="border-b-2 border-gray-200 mb-6">
          <div class="flex space-x-1">
            <button class="tab-btn px-6 py-3 font-semibold border-b-2 border-primary-500 text-primary-600" data-tab="mealPlan">
              <i class="fas fa-calendar-week mr-2"></i>Thực đơn
            </button>
            <button class="tab-btn px-6 py-3 font-semibold border-b-2 border-transparent text-gray-600 hover:text-gray-800" data-tab="shopping">
              <i class="fas fa-shopping-cart mr-2"></i>Danh sách mua
            </button>
            <button class="tab-btn px-6 py-3 font-semibold border-b-2 border-transparent text-gray-600 hover:text-gray-800" data-tab="categories">
              <i class="fas fa-list mr-2"></i>Danh mục hàng hóa
            </button>
          </div>
        </div>

        <!-- Tab Contents -->
        <div id="tabMealPlan" class="tab-content"></div>
        <div id="tabShopping" class="tab-content hidden"></div>
        <div id="tabCategories" class="tab-content hidden"></div>

        <!-- Action Buttons -->
        <div class="mt-8 flex flex-wrap gap-4">
          <button id="backToStep2" class="bg-gray-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-600 transition">
            <i class="fas fa-arrow-left mr-2"></i>
            Quay lại
          </button>
          <button id="printBtn" class="bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition">
            <i class="fas fa-print mr-2"></i>
            In
          </button>
          <button id="exportExcelBtn" class="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition">
            <i class="fas fa-file-excel mr-2"></i>
            Xuất Excel
          </button>
          <button id="shareBtn" class="bg-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-600 transition">
            <i class="fas fa-share-alt mr-2"></i>
            Chia sẻ
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners
  document.getElementById('backToStep2').addEventListener('click', () => goToStep(2));
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
  document.getElementById('shareBtn').addEventListener('click', shareResults);

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchTab(this.dataset.tab);
    });
  });
}

// ========== STEP 2: DISH SELECTION ==========
function loadStep2Content() {
  // First, create step 2 HTML structure if not exists
  const step2 = document.getElementById('step2');
  if (!step2.querySelector('#dishSelectionContent')) {
    renderStep2Shell();
  }

  const container = document.getElementById('dishSelectionContent');

  if (appState.mode === 'auto') {
    container.innerHTML = renderAutoMode();
  } else if (appState.mode === 'manual') {
    container.innerHTML = renderManualMode();
    attachManualModeListeners();
  } else if (appState.mode === 'byday') {
    container.innerHTML = renderByDayMode();
    attachByDayModeListeners();
  }
}

// ========== AUTO MODE ==========
function renderAutoMode() {
  return `
    <div class="text-center py-12">
      <div class="mb-6">
        <i class="fas fa-robot text-6xl text-primary-500"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Chế độ tự động</h3>
      <p class="text-gray-600 mb-6">Hệ thống sẽ tự động tạo thực đơn cân bằng cho bạn</p>
      <div class="max-w-md mx-auto bg-gray-50 rounded-xl p-6">
        <div class="space-y-3 text-left">
          <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 mr-3"></i>
            <span>Đa dạng món ăn mỗi ngày</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 mr-3"></i>
            <span>Cân bằng dinh dưỡng</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 mr-3"></i>
            <span>Không lặp lại món ăn</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 mr-3"></i>
            <span>Tiết kiệm thời gian</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ========== MANUAL MODE ==========
function renderManualMode() {
  const categorized = {
    "Món sáng": dishesDatabase.filter(d => d.category === "Món sáng"),
    "Canh": dishesDatabase.filter(d => d.category === "Canh"),
    "Món mặn": dishesDatabase.filter(d => d.category === "Món mặn"),
    "Rau": dishesDatabase.filter(d => d.category === "Rau"),
    "Lẩu": dishesDatabase.filter(d => d.category === "Lẩu")
  };

  let html = `
    <div class="mb-6">
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <div class="flex items-center">
          <i class="fas fa-info-circle text-blue-500 mr-3"></i>
          <div>
            <p class="font-medium text-blue-900">Click vào món ăn để chọn</p>
            <p class="text-sm text-blue-700">Đã chọn: <span id="selectedCount" class="font-bold">0</span> món</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected Dishes -->
    <div id="selectedDishes" class="mb-6"></div>

    <!-- Filter & Search -->
    <div class="mb-6 flex gap-4">
      <div class="flex-1">
        <input type="text" id="dishSearch" placeholder="🔍 Tìm món ăn..."
          class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none">
      </div>
      <select id="categoryFilter" class="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none">
        <option value="all">Tất cả danh mục</option>
        ${Object.keys(categorized).map(cat => `<option value="${cat}">${cat}</option>`).join('')}
      </select>
    </div>
  `;

  // Render dishes by category
  Object.keys(categorized).forEach(category => {
    const dishes = categorized[category];

    html += `
      <div class="category-section mb-8" data-category="${category}">
        <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span class="text-2xl mr-2">${categoryIcons[category]}</span>
          ${category}
          <span class="ml-auto text-sm text-gray-500">${dishes.length} món</span>
        </h3>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${dishes.map(dish => renderDishCard(dish)).join('')}
        </div>
      </div>
    `;
  });

  return html;
}

function renderDishCard(dish) {
  const price = dish.estimatedPrice || calculateDishPrice(dish);
  const isSelected = appState.selectedDishes.has(dish.id);

  return `
    <div class="dish-card cursor-pointer border-2 rounded-lg p-4 transition hover:shadow-lg ${isSelected ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}"
         data-dish-id="${dish.id}">
      <div class="flex justify-between items-start mb-2">
        <h4 class="font-semibold text-gray-800">${dish.name}</h4>
        ${isSelected ? '<i class="fas fa-check-circle text-primary-500 text-xl"></i>' : ''}
      </div>
      <div class="flex justify-between items-center text-sm">
        <span class="text-gray-600">
          <i class="far fa-clock mr-1"></i>
          ${dish.prepTime || 15}-${dish.cookTime || 30}p
        </span>
        <span class="font-bold text-green-600">${formatCurrency(price)}</span>
      </div>
    </div>
  `;
}

function attachManualModeListeners() {
  // Dish card clicks
  document.querySelectorAll('.dish-card').forEach(card => {
    card.addEventListener('click', function() {
      const dishId = parseInt(this.dataset.dishId);
      toggleDishSelection(dishId);
    });
  });

  // Search
  document.getElementById('dishSearch').addEventListener('input', function() {
    filterDishes(this.value, document.getElementById('categoryFilter').value);
  });

  // Category filter
  document.getElementById('categoryFilter').addEventListener('change', function() {
    filterDishes(document.getElementById('dishSearch').value, this.value);
  });
}

function toggleDishSelection(dishId) {
  if (appState.selectedDishes.has(dishId)) {
    appState.selectedDishes.delete(dishId);
  } else {
    appState.selectedDishes.add(dishId);
  }

  // Refresh manual mode display
  loadStep2Content();
  updateSelectedCount();
}

function updateSelectedCount() {
  const countEl = document.getElementById('selectedCount');
  if (countEl) {
    countEl.textContent = appState.selectedDishes.size;
  }

  // Update selected dishes display
  const selectedContainer = document.getElementById('selectedDishes');
  if (selectedContainer && appState.selectedDishes.size > 0) {
    const selectedDishesArray = Array.from(appState.selectedDishes).map(id =>
      dishesDatabase.find(d => d.id === id)
    ).filter(d => d);

    selectedContainer.innerHTML = `
      <div class="bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg p-4 border border-primary-200">
        <h4 class="font-bold text-gray-800 mb-3">Món đã chọn (${selectedDishesArray.length}):</h4>
        <div class="flex flex-wrap gap-2">
          ${selectedDishesArray.map(dish => `
            <span class="inline-flex items-center bg-white px-3 py-2 rounded-full text-sm border border-primary-300">
              <span class="mr-2">${categoryIcons[dish.category]}</span>
              ${dish.name}
              <button class="ml-2 text-red-500 hover:text-red-700" onclick="toggleDishSelection(${dish.id})">
                <i class="fas fa-times"></i>
              </button>
            </span>
          `).join('')}
        </div>
      </div>
    `;
  } else if (selectedContainer) {
    selectedContainer.innerHTML = '';
  }
}

function filterDishes(searchTerm, category) {
  const sections = document.querySelectorAll('.category-section');

  sections.forEach(section => {
    const sectionCategory = section.dataset.category;
    const cards = section.querySelectorAll('.dish-card');
    let visibleCount = 0;

    // Check category filter
    if (category !== 'all' && sectionCategory !== category) {
      section.style.display = 'none';
      return;
    } else {
      section.style.display = 'block';
    }

    // Check search term
    cards.forEach(card => {
      const dishId = parseInt(card.dataset.dishId);
      const dish = dishesDatabase.find(d => d.id === dishId);

      if (dish && dish.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Hide section if no visible cards
    if (visibleCount === 0) {
      section.style.display = 'none';
    }
  });
}

// ========== BY DAY MODE ==========
function renderByDayMode() {
  let html = `
    <div class="mb-6">
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
        <div class="flex items-center">
          <i class="fas fa-calendar-check text-purple-500 mr-3"></i>
          <div>
            <p class="font-medium text-purple-900">Chọn món cho từng ngày, từng bữa</p>
            <p class="text-sm text-purple-700">Click "Thêm món" để chọn món ăn cho mỗi bữa</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Render each day
  for (let day = 1; day <= appState.numberOfDays; day++) {
    if (!appState.dayPlans[day]) {
      appState.dayPlans[day] = { breakfast: [], lunch: [], dinner: [] };
    }

    html += `
      <div class="mb-6 border-2 border-gray-200 rounded-xl overflow-hidden">
        <div class="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-4">
          <h3 class="text-xl font-bold">
            <i class="fas fa-calendar-day mr-2"></i>
            Ngày ${day}
          </h3>
        </div>

        <div class="p-6">
          <div class="grid md:grid-cols-3 gap-6">
            ${renderMealSection(day, 'breakfast', '🌅 Sáng')}
            ${renderMealSection(day, 'lunch', '☀️ Trưa')}
            ${renderMealSection(day, 'dinner', '🌙 Tối')}
          </div>
        </div>
      </div>
    `;
  }

  return html;
}

function renderMealSection(day, mealType, label) {
  const meals = appState.dayPlans[day][mealType];

  return `
    <div>
      <h4 class="font-semibold text-gray-700 mb-3">${label}</h4>
      <div class="space-y-2 mb-3">
        ${meals.map((dishId, index) => {
          const dish = dishesDatabase.find(d => d.id === dishId);
          if (!dish) return '';
          return `
            <div class="flex items-center justify-between bg-gray-50 p-2 rounded">
              <span class="text-sm">${dish.name}</span>
              <button class="text-red-500 hover:text-red-700" onclick="removeMealFromDay(${day}, '${mealType}', ${index})">
                <i class="fas fa-times"></i>
              </button>
            </div>
          `;
        }).join('')}
      </div>
      <button class="add-meal-btn w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition"
              data-day="${day}" data-meal="${mealType}">
        <i class="fas fa-plus mr-2"></i>
        Thêm món
      </button>
    </div>
  `;
}

function attachByDayModeListeners() {
  document.querySelectorAll('.add-meal-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const day = parseInt(this.dataset.day);
      const mealType = this.dataset.meal;
      showDishPickerModal(day, mealType);
    });
  });
}

function removeMealFromDay(day, mealType, index) {
  appState.dayPlans[day][mealType].splice(index, 1);
  loadStep2Content();
}

function showDishPickerModal(day, mealType) {
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
      <div class="gradient-bg text-white px-6 py-4 flex justify-between items-center">
        <h3 class="text-xl font-bold">Chọn món cho Ngày ${day} - ${mealType === 'breakfast' ? 'Sáng' : mealType === 'lunch' ? 'Trưa' : 'Tối'}</h3>
        <button class="close-modal text-2xl hover:text-gray-200">&times;</button>
      </div>
      <div class="p-6 overflow-y-auto max-h-[60vh]">
        <div class="grid md:grid-cols-2 gap-4">
          ${dishesDatabase.map(dish => `
            <div class="dish-modal-card cursor-pointer border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 hover:bg-primary-50 transition"
                 data-dish-id="${dish.id}">
              <h4 class="font-semibold">${categoryIcons[dish.category]} ${dish.name}</h4>
              <p class="text-sm text-gray-600 mt-1">${formatCurrency(dish.estimatedPrice || 50000)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal
  modal.querySelector('.close-modal').addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });

  // Select dish
  modal.querySelectorAll('.dish-modal-card').forEach(card => {
    card.addEventListener('click', function() {
      const dishId = parseInt(this.dataset.dishId);
      appState.dayPlans[day][mealType].push(dishId);
      document.body.removeChild(modal);
      loadStep2Content();
    });
  });
}

// ========== GENERATE RESULTS ==========
function generateResults() {
  if (appState.mode === 'auto') {
    generateAutoMealPlan();
  } else if (appState.mode === 'manual') {
    generateManualMealPlan();
  } else if (appState.mode === 'byday') {
    generateByDayMealPlan();
  }

  generateShoppingList();

  // Create step 3 shell if not exists
  const step3 = document.getElementById('step3');
  if (!step3.querySelector('#tabMealPlan')) {
    renderStep3Shell();
  }

  calculateTotals();
  renderResults();
  goToStep(3);
}

function generateAutoMealPlan() {
  appState.mealPlan = [];
  const usedDishes = new Set();

  for (let day = 1; day <= appState.numberOfDays; day++) {
    const dayMeal = { day, breakfast: null, lunch: [], dinner: [] };

    // Breakfast (every other day)
    if (day % 2 === 1) {
      const breakfast = getRandomDishSmart('Món sáng', usedDishes);
      if (breakfast) {
        dayMeal.breakfast = breakfast;
        usedDishes.add(breakfast.id);
      }
    }

    // Lunch
    ['Canh', 'Món mặn', 'Món mặn', 'Rau'].forEach((cat, i) => {
      if (i === 1 && Math.random() < 0.3) return; // Skip sometimes
      const dish = getRandomDishSmart(cat, usedDishes);
      if (dish) {
        dayMeal.lunch.push(dish);
        usedDishes.add(dish.id);
      }
    });

    // Dinner
    if (day % 5 === 0) {
      const hotpot = getRandomDishSmart('Lẩu', usedDishes);
      if (hotpot) {
        dayMeal.dinner.push(hotpot);
        usedDishes.add(hotpot.id);
      }
    } else {
      ['Canh', 'Món mặn', 'Món mặn', 'Rau'].forEach((cat, i) => {
        if (i === 1 && Math.random() < 0.4) return;
        const dish = getRandomDishSmart(cat, usedDishes);
        if (dish) {
          dayMeal.dinner.push(dish);
          usedDishes.add(dish.id);
        }
      });
    }

    appState.mealPlan.push(dayMeal);
  }
}

function generateManualMealPlan() {
  if (appState.selectedDishes.size === 0) {
    alert('Vui lòng chọn ít nhất 1 món ăn!');
    goToStep(2);
    return;
  }

  appState.mealPlan = [];
  const selectedArray = Array.from(appState.selectedDishes).map(id =>
    dishesDatabase.find(d => d.id === id)
  );

  const dishesPerDay = Math.ceil(selectedArray.length / appState.numberOfDays);

  for (let day = 1; day <= appState.numberOfDays; day++) {
    const startIdx = (day - 1) * dishesPerDay;
    const dayDishes = selectedArray.slice(startIdx, startIdx + dishesPerDay);

    const dayMeal = { day, breakfast: null, lunch: [], dinner: [] };

    dayDishes.forEach(dish => {
      if (dish.category === 'Món sáng' && !dayMeal.breakfast) {
        dayMeal.breakfast = dish;
      } else if (dayMeal.lunch.length < 3) {
        dayMeal.lunch.push(dish);
      } else {
        dayMeal.dinner.push(dish);
      }
    });

    appState.mealPlan.push(dayMeal);
  }
}

function generateByDayMealPlan() {
  appState.mealPlan = [];

  for (let day = 1; day <= appState.numberOfDays; day++) {
    const plan = appState.dayPlans[day];
    const dayMeal = {
      day,
      breakfast: plan.breakfast[0] ? dishesDatabase.find(d => d.id === plan.breakfast[0]) : null,
      lunch: plan.lunch.map(id => dishesDatabase.find(d => d.id === id)).filter(d => d),
      dinner: plan.dinner.map(id => dishesDatabase.find(d => d.id === id)).filter(d => d)
    };

    appState.mealPlan.push(dayMeal);
  }
}

function getRandomDishSmart(category, usedDishes) {
  let available = dishesDatabase.filter(d => d.category === category && !usedDishes.has(d.id));
  if (available.length === 0) {
    available = dishesDatabase.filter(d => d.category === category);
  }
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
}

// ========== SHOPPING LIST ==========
function generateShoppingList() {
  const ingredientsMap = new Map();
  const multiplier = servingMultipliers[appState.numberOfPeople] || 1.0;

  appState.mealPlan.forEach(dayMeal => {
    const allDishes = [
      ...(dayMeal.breakfast ? [dayMeal.breakfast] : []),
      ...dayMeal.lunch,
      ...dayMeal.dinner
    ];

    allDishes.forEach(dish => {
      dish.ingredients.forEach(ingredient => {
        const key = ingredient.name;

        if (ingredientsMap.has(key)) {
          const existing = ingredientsMap.get(key);
          existing.amount += ingredient.amount * multiplier;
        } else {
          ingredientsMap.set(key, {
            name: ingredient.name,
            amount: ingredient.amount * multiplier,
            unit: ingredient.unit,
            group: ingredient.group
          });
        }
      });
    });
  });

  // Group by category
  const grouped = {
    "Thịt/Cá/Hải sản": [],
    "Rau củ": [],
    "Đồ khô/Đồ hộp": [],
    "Gia vị": [],
    "Khác": []
  };

  appState.totalPrice = 0;

  ingredientsMap.forEach(ingredient => {
    const group = ingredient.group || "Khác";
    const priceInfo = priceDatabase[ingredient.name];
    let itemPrice = 0;

    if (priceInfo) {
      let amount = ingredient.amount;

      // Convert units to match price database
      if (ingredient.unit === 'g' && priceInfo.unit === 'kg') {
        amount = amount / 1000;
      } else if (ingredient.unit === 'củ' && priceInfo.unit === 'kg') {
        amount = amount * 0.15; // 1 củ ≈ 150g
      } else if (ingredient.unit === 'quả' && priceInfo.unit === 'kg') {
        amount = amount * 0.1; // 1 quả ≈ 100g
      } else if (ingredient.unit === 'tép' && priceInfo.unit === 'kg') {
        amount = amount * 0.005; // 1 tép ≈ 5g
      } else if (ingredient.unit === 'ml' && priceInfo.unit === 'lít') {
        amount = amount / 1000;
      } else if (ingredient.unit === 'muỗng') {
        // Gia vị - giá nhỏ, có thể bỏ qua hoặc tính ước lượng
        itemPrice = 0;
      } else if (ingredient.unit !== priceInfo.unit) {
        // Đơn vị không khớp - bỏ qua
        itemPrice = 0;
      }

      if (itemPrice !== 0) {
        itemPrice = amount * priceInfo.price;
      }
    }

    const itemWithPrice = { ...ingredient, estimatedPrice: itemPrice };
    appState.totalPrice += itemPrice;

    if (grouped[group]) {
      grouped[group].push(itemWithPrice);
    }
  });

  appState.shoppingList = grouped;
}

// ========== CALCULATIONS ==========
function calculateDishPrice(dish) {
  const multiplier = servingMultipliers[appState.numberOfPeople] || 1.0;
  if (dish.estimatedPrice) return dish.estimatedPrice * multiplier;

  let total = 0;
  dish.ingredients.forEach(ing => {
    const priceInfo = priceDatabase[ing.name];
    if (priceInfo) {
      let amount = ing.amount * multiplier;

      // Convert units to match price database
      if (ing.unit === 'g' && priceInfo.unit === 'kg') {
        amount = amount / 1000;
      } else if (ing.unit === 'củ' && priceInfo.unit === 'kg') {
        // 1 củ ≈ 150-200g tùy loại, trung bình 0.15kg
        amount = amount * 0.15;
      } else if (ing.unit === 'quả' && priceInfo.unit === 'kg') {
        // 1 quả trung bình 0.1kg
        amount = amount * 0.1;
      } else if (ing.unit === 'tép' && priceInfo.unit === 'kg') {
        // 1 tép tỏi ≈ 5g
        amount = amount * 0.005;
      } else if (ing.unit === 'muỗng') {
        // Gia vị đơn vị muỗng - giá rất nhỏ, bỏ qua
        return;
      } else if (ing.unit === 'ml' && priceInfo.unit === 'lít') {
        amount = amount / 1000;
      } else if (ing.unit !== priceInfo.unit) {
        // Nếu đơn vị không khớp và không xử lý được, bỏ qua
        return;
      }

      total += amount * priceInfo.price;
    }
  });

  return total || 50000;
}

function calculateTotals() {
  let totalDishes = 0;
  let totalItems = 0;

  appState.mealPlan.forEach(day => {
    if (day.breakfast) totalDishes++;
    totalDishes += day.lunch.length + day.dinner.length;
  });

  Object.values(appState.shoppingList).forEach(items => {
    totalItems += items.length;
  });

  document.getElementById('totalCost').textContent = formatCurrency(appState.totalPrice);
  document.getElementById('totalDishes').textContent = totalDishes;
  document.getElementById('totalItems').textContent = totalItems;
  document.getElementById('avgCostPerDay').textContent = formatCurrency(appState.totalPrice / appState.numberOfDays);
}

// ========== RENDER RESULTS ==========
function renderResults() {
  renderMealPlan();
  renderShoppingList();
  renderProductCategories();
}

function renderMealPlan() {
  const container = document.getElementById('tabMealPlan');

  let html = '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">';

  appState.mealPlan.forEach(dayMeal => {
    let dayPrice = 0;

    html += `
      <div class="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-200 hover-scale">
        <div class="flex items-center justify-between mb-4 pb-3 border-b-2 border-primary-200">
          <h3 class="text-xl font-bold text-gray-800">
            <i class="fas fa-calendar-day text-primary-500 mr-2"></i>
            Ngày ${dayMeal.day}
          </h3>
        </div>
    `;

    // Breakfast
    if (dayMeal.breakfast) {
      const price = calculateDishPrice(dayMeal.breakfast);
      dayPrice += price;
      html += `
        <div class="mb-4">
          <p class="text-sm font-semibold text-gray-600 mb-2">🌅 Sáng</p>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
            <div class="flex justify-between items-center">
              <span class="font-medium">${dayMeal.breakfast.name}</span>
              <span class="text-sm text-green-600 font-bold">${formatCurrency(price)}</span>
            </div>
          </div>
        </div>
      `;
    }

    // Lunch
    if (dayMeal.lunch.length > 0) {
      html += '<div class="mb-4"><p class="text-sm font-semibold text-gray-600 mb-2">☀️ Trưa</p>';
      dayMeal.lunch.forEach(dish => {
        const price = calculateDishPrice(dish);
        dayPrice += price;
        html += `
          <div class="bg-orange-50 border-l-4 border-orange-400 p-3 rounded mb-2">
            <div class="flex justify-between items-center">
              <span class="text-sm">${dish.name}</span>
              <span class="text-xs text-green-600 font-bold">${formatCurrency(price)}</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
    }

    // Dinner
    if (dayMeal.dinner.length > 0) {
      html += '<div class="mb-4"><p class="text-sm font-semibold text-gray-600 mb-2">🌙 Tối</p>';
      dayMeal.dinner.forEach(dish => {
        const price = calculateDishPrice(dish);
        dayPrice += price;
        html += `
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded mb-2">
            <div class="flex justify-between items-center">
              <span class="text-sm">${dish.name}</span>
              <span class="text-xs text-green-600 font-bold">${formatCurrency(price)}</span>
            </div>
          </div>
        `;
      });
      html += '</div>';
    }

    html += `
        <div class="pt-3 border-t-2 border-gray-200 flex justify-between items-center">
          <span class="font-bold text-gray-700">Tổng ngày ${dayMeal.day}:</span>
          <span class="text-lg font-bold text-primary-600">${formatCurrency(dayPrice)}</span>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

function renderShoppingList() {
  const container = document.getElementById('tabShopping');

  let html = `
    <div class="mb-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg p-6 border border-primary-200">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-6">
          <div class="text-center">
            <p class="text-sm text-gray-600">Số người</p>
            <p class="text-2xl font-bold text-primary-600">${appState.numberOfPeople}</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-600">Số ngày</p>
            <p class="text-2xl font-bold text-primary-600">${appState.numberOfDays}</p>
          </div>
        </div>
        <div class="text-center">
          <p class="text-sm text-gray-600">Tổng chi phí</p>
          <p class="text-3xl font-bold text-green-600">${formatCurrency(appState.totalPrice)}</p>
        </div>
      </div>
    </div>
  `;

  Object.keys(appState.shoppingList).forEach(group => {
    const items = appState.shoppingList[group];
    if (items.length === 0) return;

    const groupTotal = items.reduce((sum, item) => sum + (item.estimatedPrice || 0), 0);

    html += `
      <div class="mb-6">
        <div class="gradient-bg text-white px-6 py-3 rounded-t-lg flex justify-between items-center">
          <h3 class="text-lg font-bold">
            <span class="text-2xl mr-2">${groupIcons[group]}</span>
            ${group}
          </h3>
          <span class="font-bold">${formatCurrency(groupTotal)}</span>
        </div>
        <div class="bg-white border-2 border-gray-200 rounded-b-lg p-4">
          <div class="space-y-2">
            ${items.map(item => `
              <div class="flex items-center justify-between py-2 px-3 bg-gray-50 rounded hover:bg-gray-100 transition">
                <label class="flex items-center flex-1 cursor-pointer">
                  <input type="checkbox" class="w-5 h-5 text-primary-600 rounded mr-3">
                  <span class="font-medium text-gray-800">${item.name}</span>
                </label>
                <div class="flex items-center gap-4">
                  <span class="text-primary-600 font-semibold">${formatAmount(item.amount)} ${item.unit}</span>
                  ${item.estimatedPrice > 0 ? `<span class="text-green-600 font-bold min-w-[100px] text-right">${formatCurrency(item.estimatedPrice)}</span>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderProductCategories() {
  const container = document.getElementById('tabCategories');

  // Group all products by category
  const allProducts = new Map();

  Object.values(appState.shoppingList).forEach(items => {
    items.forEach(item => {
      allProducts.set(item.name, item);
    });
  });

  // Sort alphabetically
  const sortedProducts = Array.from(allProducts.values()).sort((a, b) =>
    a.name.localeCompare(b.name, 'vi')
  );

  let html = `
    <div class="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
      <p class="font-medium text-blue-900">
        <i class="fas fa-info-circle mr-2"></i>
        Danh mục đầy đủ các mặt hàng cần mua - ${sortedProducts.length} loại
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-4">
  `;

  sortedProducts.forEach(item => {
    html += `
      <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <h4 class="font-semibold text-gray-800">${item.name}</h4>
            <p class="text-sm text-gray-600 mt-1">
              <span class="inline-block bg-gray-100 px-2 py-1 rounded text-xs">${item.group}</span>
            </p>
          </div>
          <div class="text-right">
            <p class="text-primary-600 font-bold">${formatAmount(item.amount)} ${item.unit}</p>
            ${item.estimatedPrice > 0 ? `<p class="text-sm text-green-600 font-semibold">${formatCurrency(item.estimatedPrice)}</p>` : ''}
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

// ========== TAB SWITCHING ==========
function switchTab(tabName) {
  // Update buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('border-primary-500', 'text-primary-600');
    btn.classList.add('border-transparent', 'text-gray-600');
  });

  const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
  activeBtn.classList.remove('border-transparent', 'text-gray-600');
  activeBtn.classList.add('border-primary-500', 'text-primary-600');

  // Update content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.add('hidden');
  });

  const activeContent = document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
  activeContent.classList.remove('hidden');
}

// ========== EXPORT ==========
function exportToExcel() {
  let csv = "\uFEFFDANH SÁCH ĐI CHỢ VÀ THỰC ĐƠN\n";
  csv += `Số người: ${appState.numberOfPeople}\n`;
  csv += `Số ngày: ${appState.numberOfDays}\n`;
  csv += `Tổng chi phí: ${formatCurrency(appState.totalPrice)}\n\n`;

  csv += "=== DANH SÁCH MUA HÀNG ===\n\n";

  Object.keys(appState.shoppingList).forEach(group => {
    const items = appState.shoppingList[group];
    if (items.length === 0) return;

    csv += `${group}\n`;
    csv += "Tên,Số lượng,Đơn vị,Giá\n";

    items.forEach(item => {
      csv += `${item.name},${formatAmount(item.amount)},${item.unit},${formatCurrency(item.estimatedPrice || 0)}\n`;
    });
    csv += "\n";
  });

  csv += "\n=== THỰC ĐƠN ===\n";
  appState.mealPlan.forEach(day => {
    csv += `\nNgày ${day.day}\n`;
    if (day.breakfast) csv += `Sáng: ${day.breakfast.name}\n`;
    csv += `Trưa: ${day.lunch.map(d => d.name).join(', ')}\n`;
    csv += `Tối: ${day.dinner.map(d => d.name).join(', ')}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `thuc_don_${appState.numberOfDays}ngay_${appState.numberOfPeople}nguoi.csv`;
  link.click();
}

function shareResults() {
  const text = `🍽️ Thực đơn ${appState.numberOfDays} ngày cho ${appState.numberOfPeople} người
💰 Tổng chi phí: ${formatCurrency(appState.totalPrice)}

Tạo bởi Meal Planner Pro`;

  if (navigator.share) {
    navigator.share({
      title: 'Thực đơn gia đình',
      text: text
    });
  } else {
    navigator.clipboard.writeText(text);
    alert('Đã sao chép vào clipboard!');
  }
}

// ========== HELPERS ==========
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(amount);
}

function formatAmount(amount) {
  return Math.round(amount * 10) / 10;
}

// Make functions global for onclick handlers
window.toggleDishSelection = toggleDishSelection;
window.removeMealFromDay = removeMealFromDay;
