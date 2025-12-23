import React from 'react';

const ContactsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Контакты</h1>

      {/* Блок 1: Главный офис */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Главный офис</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0a3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-gray-700 mb-3">
            141701, г. Долгопрудный, Транспортный проезд, 6а
          </p>
          <p className="text-gray-700 mb-1"><strong>Рабочие дни:</strong> 9:00 — 21:00</p>
          <p className="text-gray-700"><strong>Выходные:</strong> 10:00 — 18:00</p>
        </div>

        {/* Блок 2: Офис м. Водный стадион */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Офис м. Водный стадион</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0a3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-gray-700 mb-3">
            125130, г. Москва, ул. Выборгская, 22 стр. 3
          </p>
          <p className="text-gray-700 mb-1"><strong>Рабочие дни:</strong> 9:00 — 21:00</p>
          <p className="text-gray-700"><strong>Выходные:</strong> 10:00 — 18:00</p>
        </div>

        {/* Блок 3: Правила заказа */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Правила заказа и доставки</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6v-6a3 3 0 00-5.356-1.857M18 13.034V18a3 3 0 005.356 1.857M12 15h2a3 3 0 005.356-1.857M18 13.034V18a3 3 0 005.356 1.857M12 15h2a3 3 0 005.356-1.857" />
            </svg>
          </div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Без резервирования отгрузка не гарантируется.</li>
            <li>Бонусы начисляются только при заказе на сайте.</li>
            <li>Уценённые товары — только со своего склада.</li>
            <li>Проверка товара — после оплаты.</li>
            <li>Не отправляем HP/Apple/Microsoft в Крым.</li>
            <li>Разговоры могут записываться для улучшения сервиса.</li>
          </ul>
        </div>
      </div>

      {/* Блок 2: Юридическая информация */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Блок 1: Управляющий */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Управляющий</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a4 4 0 014-4h4M12 14a4 4 0 01-4-4H4M12 14a4 4 0 01-4-4H4" />
            </svg>
          </div>
          <p className="text-gray-700 mb-2"><strong>ООО «М-Инвест»</strong></p>
          <p className="text-gray-700 mb-2">Рахимов Артур Эрикович</p>
          <p className="text-gray-700 mb-2">Управляющий интернет–магазина</p>
          <a href="mailto:rar@xcom.ru" className="text-blue-600 hover:text-blue-800 underline">rar@xcom.ru</a>
        </div>

        {/* Блок 2: Акты сверок */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Акты сверок</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-700 mb-2">Для юридических лиц и бухгалтерии</p>
          <a href="mailto:aktsverki@xcom.ru" className="text-blue-600 hover:text-blue-800 underline">aktsverki@xcom.ru</a>
        </div>

        {/* Блок 3: Контакты в Москве */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Контакты в Москве</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95ot2 2 0 01-1.754 0l-7-7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.736 3.736a6 6 0 018.488 0l4 4a6 6 0 018.488 0l4 4a6 6 0 01-8.488 0l-4-4a6 6 0 01-8.488 0l-4 4a6 6 0 018.488 0l4 4a6 6 0 01-8.488 0l-4-4a6 6 0 018.488 0" />
            </svg>
          </div>
          <p className="text-gray-700 mb-2"><strong>Телефоны:</strong></p>
          <p className="text-gray-700 mb-1">8 (495) 799 9669</p>
          <p className="text-gray-700 mb-2">+7 (800) 200 0069 <span className="text-xs">(звонок по России бесплатно)</span></p>
          <a href="mailto:zakaz@xcom.ru" className="text-blue-600 hover:text-blue-800 underline">zakaz@xcom.ru</a>
          <p className="text-gray-700 mt-4 text-sm">
            📍 141701, г. Долгопрудный, Транспортный проезд, 6а<br />
            📍 125130, г. Москва, ул. Выборгская, 22 стр. 3
          </p>
        </div>
      </div>

      {/* Юридический адрес (внизу) */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Юридический адрес</h3>
        <p className="text-gray-700 text-center">
          141701, Московская область, г. Долгопрудный, Транспортный проезд, 6а, стр. 1
        </p>
      </div>
    </div>
  );
};

export default ContactsPage;