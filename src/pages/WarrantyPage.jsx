import React from 'react';

const WarrantyPage = () => {
  return (
    <div className="font-sans">
      {/* Блок 1: Заголовок */}
      <div className="py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">ГАРАНТИЯ И ВОЗВРАТ</h1>
        <p className="text-lg max-w-2xl mx-auto px-4 mb-15">
          Мы делаем всё, чтобы вы чувствовали себя уверенно — даже если что-то пошло не так.
        </p>
      </div>

      {/* Блок 2: Преимущества — как в картинке */}
      <div className="py-12 mb-15">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">НАШИ ПРЕИМУЩЕСТВА</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Блок 1: Обмен/возврат */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ВОЗВРАТ И ОБМЕН</h3>
              <p className="text-gray-700 leading-relaxed">
                Вы можете вернуть или обменять товар в течение 7 дней, если он вам не подошёл или оказался с браком. 
                Ремонт проводится в авторизованных центрах или у нас — по адресам: Москва, Выборгская 22 стр.3 и Лен. обл., Новосаратовка 21.
              </p>
            </div>

            {/* Блок 2: Сроки и закон */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6v-6a3 3 0 00-5.356-1.857M18 13.034V18a3 3 0 005.356 1.857M12 15h2a3 3 0 005.356-1.857" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ПО ЗАКОНУ</h3>
              <p className="text-gray-700 leading-relaxed">
                Согласно ст. 26.1 ЗоЗПП — 7 дней на возврат. Срок ремонта — до 45 дней. При обращении нужен чек. Если ремонт невозможен — получите заключение и принесите его нам.
              </p>
            </div>

            {/* Блок 3: Что нельзя вернуть */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ЧТО НЕЛЬЗЯ ВЕРНУТЬ</h3>
              <p className="text-gray-700 leading-relaxed">
                Кабель на метраж, SIM-карты, активированный софт, вскрытый блистер, уценённые товары, цифровой контент — не подлежат возврату согласно закону.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Блок 3: Как мы работаем — шаги */}
      <div className="py-12 mb-15">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-15">КАК МЫ РАБОТАЕМ С ВОЗВРАТОМ</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Шаг 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95ot2 2 0 01-1.754 0l-7-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.736 3.736a6 6 0 018.488 0l4 4a6 6 0 018.488 0l4 4a6 6 0 01-8.488 0l-4-4a6 6 0 01-8.488 0l-4 4a6 6 0 018.488 0l4 4a6 6 0 01-8.488 0l-4-4a6 6 0 018.488 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ШАГ 1</h3>
              <p className="text-gray-700 leading-relaxed">
                Оставьте заявку онлайн или позвоните нам:  
                <br />
                <strong>8 (800) 200-0069</strong>  
                <br />
                Москва: 3106 / 3156 | СПб: 4238 / 4222
              </p>
            </div>

            {/* Шаг 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ШАГ 2</h3>
              <p className="text-gray-700 leading-relaxed">
                Подготовьте:  
                <br />
                • Паспорт покупателя  
                <br />
                • Кассовый чек или подтверждение покупки в XCOM-SHOP
              </p>
            </div>

            {/* Шаг 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">ШАГ 3</h3>
              <p className="text-gray-700 leading-relaxed">
                Мы вернём деньги тем же способом, которым вы оплатили.  
                Или предложим замену — как вам удобнее.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Финальный блок: Доверие */}
      <div className="py-12 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-block w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H9m0 0V9m0 8V9m0 8h6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">МЫ НА СТОРОНЕ КЛИЕНТА</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Даже если производитель отказывает в гарантии — мы всегда найдём решение.  
            Потому что для нас вы — не заказ №12345, а человек, которому мы рады помочь.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPage;