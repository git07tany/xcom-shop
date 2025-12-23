import React from 'react';

const DeliveryPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Доставка — быстро, надёжно, без стресса</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Мы доставляем по всей России — даже в самые дальние уголки. И всегда следим, чтобы ваш заказ дошёл в идеальном состоянии.
      </p>

      {/* Блок 1: Самовывоз */}
      <section className="mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 mb-8">
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7V3h18v4M3 17V7m0 10v4m18-4v4M12 11v6m-6-6v6m12-6v6" />
            </svg>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Самовывоз из офисов XCOM-SHOP</h2>
              <p className="text-gray-700 mb-2">
                Бесплатно. Работаем ежедневно — удобно для тех, кто хочет забрать товар лично.
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                Бесплатно
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
          <div className="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9M5 11V9m2 2a2 2 0 100 4h12a2 2 0 100-4M5 11a2 2 0 100 4h12a2 2 0 100-4M5 9a2 2 0 012-2h6a2 2 0 012 2M5 9a2 2 0 012-2h6a2 2 0 012 2" />
            </svg>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Самовывоз из пунктов выдачи Boxberry</h2>
              <p className="text-gray-700 mb-2">
                Только для физических лиц. Удобно, если вы в другом городе или не хотите ждать курьера.
              </p>
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">
                Только для физ. лиц
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 2: Доставка */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 Доставка по России</h2>

        <div className="space-y-6">
          {/* Собственная служба (Москва) */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.456 9.118 5 7.5 5S4.168 5.456 3 6.253v13C4.168 18.456 5.882 18 7.5 18s3.332.456 4.5 1.253m0-13C13.168 5.456 14.882 5 16.5 5c1.618 0 3.332.456 4.5 1.253v13C19.832 18.456 18.118 18 16.5 18c-1.618 0-3.332.456-4.5 1.253" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Собственная служба доставки в Москве</h3>
                <p className="text-gray-700 mt-2">
                  Быстро, надёжно, с улыбкой. Доставляем в день заказа или на следующий.
                </p>
              </div>
            </div>
          </div>

          {/* Собственная служба (СПб) */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.456 9.118 5 7.5 5S4.168 5.456 3 6.253v13C4.168 18.456 5.882 18 7.5 18s3.332.456 4.5 1.253m0-13C13.168 5.456 14.882 5 16.5 5c1.618 0 3.332.456 4.5 1.253v13C19.832 18.456 18.118 18 16.5 18c-1.618 0-3.332.456-4.5 1.253" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Собственная служба доставки в Санкт-Петербурге</h3>
                <p className="text-gray-700 mt-2">
                  Всё так же быстро и надёжно — только теперь и в Питере!
                </p>
              </div>
            </div>
          </div>

          {/* DPD */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-start gap-4">
              <img src="/images/dpd-logo.png" alt="DPD" className="h-10 w-auto" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">DPD</h3>
                <p className="text-gray-700 mt-2">
                  Один из самых популярных и надёжных перевозчиков. Отслеживание онлайн.
                </p>
              </div>
            </div>
          </div>

          {/* Почта России */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-start gap-4">
              <img src="/images/pochta-logo.png" alt="Почта России" className="h-10 w-auto" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Почта России</h3>
                <p className="text-gray-700 mt-2">
                  Подходит для небольших посылок. Доставка в любой регион.
                </p>
              </div>
            </div>
          </div>

          {/* ПЭК */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-start gap-4">
              <img src="/images/pek-logo.png" alt="ПЭК" className="h-10 w-auto" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">ПЭК</h3>
                <p className="text-gray-700 mt-2">
                  Для крупногабаритных товаров и юридических лиц.
                </p>
              </div>
            </div>
          </div>

          {/* Прочие компании */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 6l-8 4m8-4v10l-8 4m0-10L4 13m8-4v10m0 0l8 4" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Прочие транспортные компании</h3>
                <p className="text-gray-700 mt-2">
                  ЖелДорЭкспедиция, Байкал-Сервис и другие — по запросу.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Важное примечание */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 text-sm text-blue-800">
          <p className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              Товары из <a href="#" className="underline">списка</a> отправляются только в обрешётке транспортными компаниями DPD, ПЭК, ЖелДорЭкспедиция и Байкал-Сервис. 
              Жесткая упаковка для заказов от 500 000 руб. включительно.
            </span>
          </p>
        </div>
      </section>

      {/* Блок 3: Правила приёма */}
      <section className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Правила приёма заказа от транспортной компании</h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img
              src="/images/rules-img.jpg" // ← замени на реальное фото или оставь пустым
              alt="Правила приёма"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 mb-4">
              При получении отправления необходимо убедиться, что внешний вид упаковки не нарушен. 
              <strong>Убедительная просьба:</strong> вскрыть свою посылку в присутствии работников транспортной компании и проверить вложение.
            </p>
            <p className="text-gray-700 mb-4">
              Если обнаружены повреждения, или товар отсутствует, необходимо обратить на это внимание сотрудников транспортной компании и составить Акт. 
              Обязательно отразите в Акте вес полученного отправления и наличие наклейки «Осторожно, хрупкое!».
            </p>
            <p className="text-gray-700 mb-4">
              Отсканированный Акт незамедлительно отправить нам по электронной почте (менеджеру вашего заказа). 
              Оригинал отправить почтой по адресу: <strong>125130, Москва, ул. Выборгская, 22, стр. 3, ООО «М-Инвест»</strong>.
            </p>
            <p className="text-gray-700 font-semibold">
              Без предоставления Акта возмещение или обмен товара не производится.
            </p>
          </div>
        </div>
      </section>

      {/* Финальный акцент */}
      <div className="text-center pt-8 border-t border-gray-200">
        <p className="text-gray-600 italic">
          Мы не просто доставляем — мы заботимся, чтобы ваш заказ дошёл целым, в срок и с улыбкой.
        </p>
      </div>
    </div>
  );
};

export default DeliveryPage;