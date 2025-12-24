import React from 'react';

const CorporatePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        🏢 Почему корпоративные клиенты выбирают XCOM-SHOP?
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Мы не просто магазин. Мы — ваш надёжный ИТ-партнёр, который понимает бизнес, а не только технику.
      </p>

      {/* Длинная картинка по центру */}
      <div className="mb-16">
        <img
          src="/images/corporate-banner.jpg" // ← замени на реальное изображение
          alt="Корпоративные клиенты"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Блок 5 квадратиков */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        {/* Квадратик 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H2M2 7v10h4m12-3a2 2 0 002-2V7a2 2 0 00-2-2h-2.343M11 19C6.5 19 3 15.5 3 11S6.5 3 11 3s8 3.5 8 8-3.5 8-8 8z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Защита сделок</h3>
          <p className="text-gray-700 text-sm">
            На уровне вендора — без рисков, без подвохов.
          </p>
        </div>

        {/* Квадратик 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Специальные условия</h3>
          <p className="text-gray-700 text-sm">
            Скидки, льготы, гибкие сроки оплаты.
          </p>
        </div>

        {/* Квадратик 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4M5 9a2 2 0 012-2h6a2 2 0 012 2M5 9a2 2 0 012-2h6a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Проектное оборудование</h3>
          <p className="text-gray-700 text-sm">
            Под ключ — от проектирования до запуска.
          </p>
        </div>

        {/* Квадратик 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M18 14h.01M15 11v-1m0 1h.01M12 11v-1m0 1h.01M9 11v-1m0 1h.01M7 21h14v-2a3 3 0 00-5.356-1.857M18 7.464A3 3 0 0015.356 6H12M9 12h.01M12 12h.01M15 12h.01M18 12h.01M18 18v-8M6 18v-8" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Тендеры и лизинг</h3>
          <p className="text-gray-700 text-sm">
            Участвуем в закупках. Предлагаем лизинг и рассрочку.
          </p>
        </div>

        {/* Квадратик 5 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a6 6 0 1112 0 6 6 0 01-12 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Поддержка и внедрение</h3>
          <p className="text-gray-700 text-sm">
            От консультации до техподдержки — мы рядом.
          </p>
        </div>
      </div>

      {/* Три шага к сотрудничеству */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">🚀 Три простых шага к сотрудничеству с XCOM-SHOP</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Шаг 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-700 font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Заполните заявку на сайте</h3>
            <p className="text-gray-700">
              Укажите ваши потребности — мы свяжемся с вами в течение 1 часа.
            </p>
          </div>

          {/* Шаг 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-700 font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Обсудите с менеджером</h3>
            <p className="text-gray-700">
              Цены, условия поставки, сроки — всё под ваш проект.
            </p>
          </div>

          {/* Шаг 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-700 font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Сделайте первый заказ</h3>
            <p className="text-gray-700">
              Или просто отправьте запрос на <a href="mailto:zakaz@xcom.ru" className="text-blue-600 hover:text-blue-800 underline">zakaz@xcom.ru</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Финальный блок — приятное предложение */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎁 Для новых корпоративных клиентов — бонус!</h2>
        <p className="text-gray-700 mb-6">
          Первый заказ — со скидкой 5%.  
          А ещё — персональный менеджер, который будет решать все вопросы за вас.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Начать сотрудничество
        </button>
      </div>
    </div>
  );
};

export default CorporatePage;