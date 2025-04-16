// Инициализация карты
ymaps.ready(init);
        
function init() {
    // Создание карты
    var myMap = new ymaps.Map("map", {
        center: [48.703685, 44.512403], // Координаты центра (Москва)
        zoom: 15 // Масштаб
    });
    
    // Добавление метки
    var myPlacemark = new ymaps.Placemark([48.703685, 44.512403], {
        hintContent: 'Western Rush',
        balloonContent: '<strong>Western Rush</strong><br>ул. Примерная, 123'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    });
    
    myMap.geoObjects.add(myPlacemark);
    
    // Добавление элементов управления
    myMap.controls
        .remove('searchControl') // удаляем поиск
        .remove('trafficControl') // удаляем контроль трафика
        .remove('typeSelector') // удаляем тип
        .remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
        .remove('rulerControl'); // удаляем контрол правил
}