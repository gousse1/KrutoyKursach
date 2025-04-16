// Элементы модального окна
const orderModal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');
const orderForm = document.getElementById('orderForm');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');

// Кнопки "Купить"
const buyButtons = document.querySelectorAll('.buy-btn');

// Открытие модального окна при нажатии на кнопку "Купить"
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        
        productNameInput.value = product;
        productPriceInput.value = price;
        
        orderModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    });
});

// Закрытие модального окна
closeModal.addEventListener('click', () => {
    orderModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Закрытие при клике вне модального окна
orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) {
        orderModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Обработка формы заказа
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Здесь можно добавить отправку данных на сервер
    alert('Заказ оформлен! Ожидайте доставку в ближайшее время.');
    
    // Закрываем модальное окно
    orderModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Очищаем форму
    orderForm.reset();
});


document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = document.getElementById('sendBtn');
    
    sendBtn.addEventListener('click', function() {
        // Создаем и показываем всплывающее окно
        const overlay = document.createElement('div');
        overlay.className = 'alert-overlay';
        
        const alertBox = document.createElement('div');
        alertBox.className = 'alert-box';
        alertBox.innerHTML = `
            <h3 class="alert-title">Спасибо!</h3>
            <p class="alert-message">Ваше сообщение отправлено.</p>
            <button class="alert-btn" id="closeAlert">OK</button>
        `;
        
        overlay.appendChild(alertBox);
        document.body.appendChild(overlay);
        
        // Закрытие по кнопке OK
        const closeBtn = document.getElementById('closeAlert');
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
        
        // Закрытие по клику вне окна
        overlay.addEventListener('click', function(e) {
            if(e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    });
});