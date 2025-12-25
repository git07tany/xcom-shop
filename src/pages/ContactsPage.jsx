import React from 'react';

const ContactsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-16">Контакты</h1>

      {/* === Секция 1: Главный офис === */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img
              src="https://avatars.mds.yandex.net/get-altay/1058733/2a00000184f58a6def217171618de99a81e2/XXXL"
              alt="Главный офис XCOM-SHOP в Долгопрудном"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Главный офис</h2>
            <p className="text-gray-700 mb-3 text-lg leading-relaxed">
              141701, г. Долгопрудный, Транспортный проезд, 6а
            </p>
            <p className="text-gray-700 mb-2 text-lg leading-relaxed">
              <strong>Рабочие дни:</strong> 9:00 — 21:00
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Выходные:</strong> 10:00 — 18:00
            </p>
          </div>
        </div>
      </section>

      {/* === Секция 2: Офис м. Водный стадион === */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="md:w-1/2">
            <img
              src="https://avatars.mds.yandex.net/get-altay/4396925/2a00000177f2e9c008f21e6c654a9bf0fd5f/XXXL"
              alt="Офис XCOM-SHOP у м. Водный стадион"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Офис м. Водный стадион</h2>
            <p className="text-gray-700 mb-3 text-lg leading-relaxed">
              125130, г. Москва, ул. Выборгская, 22 стр. 3
            </p>
            <p className="text-gray-700 mb-2 text-lg leading-relaxed">
              <strong>Рабочие дни:</strong> 9:00 — 21:00
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Выходные:</strong> 10:00 — 18:00
            </p>
          </div>
        </div>
      </section>

      {/* === Секция 3: Правила заказа === */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/expenses-calculation-wishlist-planning-shopping-list-purchases-summary-internet-supermarket-basket-shopper-wishlist-creative-design-element_335657-1631.jpg"
              alt="Правила заказа и доставки"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Правила заказа и доставки</h2>
            <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
              <li>• Без предварительного резервирования отгрузка товара не гарантируется.</li>
              <li>• Бонусные баллы начисляются только при оформлении заказа на сайте.</li>
              <li>• Уценённые товары можно забрать только с того склада, где они находятся.</li>
              <li>• Проверка товара — только после оплаты.</li>
              <li>• Не отправляем в Крым товары HP, Apple и Microsoft.</li>
              <li>• Телефонные разговоры могут записываться для улучшения качества обслуживания.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Секция 4: Юридическая информация === */}
      <section className="mb-20 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Юридическая информация</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Управляющий */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Управляющий интернет-магазина</h3>
            <p className="text-gray-700 mb-2">ООО «М-Инвест»</p>
            <p className="text-gray-700 mb-2">Рахимов Артур Эрикович</p>
            <a
              href="mailto:rar@xcom.ru"
              className="text-blue-600 hover:text-blue-800 underline text-lg"
            >
              rar@xcom.ru
            </a>
          </div>

          {/* Акты сверок */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Акты сверок</h3>
            <p className="text-gray-700 mb-3">Для юридических лиц и бухгалтерий</p>
            <a
              href="mailto:aktsverki@xcom.ru"
              className="text-blue-600 hover:text-blue-800 underline text-lg"
            >
              aktsverki@xcom.ru
            </a>
          </div>
        </div>
      </section>

      {/* === Секция 5: Контакты в Москве === */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-vector/russia-symbol-composition-flat-icons-with-bear-pavement-with-famous-temple-blank-background-vector-illustration_1284-81175.jpg?t=st=1766688661~exp=1766692261~hmac=211b5264333b91398abacbc57430a2e60b29b25423236c880e67615d69f883eb"
              alt="Контакты в Москве"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Контакты в Москве</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              <strong>Телефоны:</strong><br />
              8 (495) 799 9669<br />
              +7 (800) 200 0069 <span className="text-sm">(звонок по России бесплатно)</span>
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              <a href="mailto:zakaz@xcom.ru" className="text-blue-600 hover:text-blue-800 underline">
                zakaz@xcom.ru
              </a>
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              📍 141701, г. Долгопрудный, Транспортный проезд, 6а<br />
              📍 125130, г. Москва, ул. Выборгская, 22 стр. 3
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;