const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});

function init() {
    let map = new ymaps.Map('map-test', {
        center: [55.7522, 37.6156],
        zoom: 16
    });

    let placemark = new ymaps.Placemark([55.7522, 37.6156], {}, {

    });

    map.controls.remove('geolocationControl'); // ������� ����������
    map.controls.remove('searchControl'); // ������� �����
    map.controls.remove('trafficControl'); // ������� �������� �������
    map.controls.remove('typeSelector'); // ������� ���
    map.controls.remove('fullscreenControl'); // ������� ������ �������� � ������������� �����
    map.controls.remove('zoomControl'); // ������� ������� ������������
    map.controls.remove('rulerControl'); // ������� ������� ������
    map.behaviors.disable(['scrollZoom']); // ��������� ������ ����� (�����������)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);

