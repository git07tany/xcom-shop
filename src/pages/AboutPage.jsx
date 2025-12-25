import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-gray-800 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        О компании
      </h1>

      {/* Блок 1: История + центральная картинка */}
      <div className="mb-16 text-center">
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          В 2001 году на базе Группы компаний <strong>X‑Com</strong> был создан интернет-магазин <strong>XCOM‑SHOP</strong>, ставший одним из первых в стране магазинов онлайн‑торговли ИТ‑оборудованием и сопутствующими товарами.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          По прошествии 20+ лет он занимает передовые позиции на рынке дистанционной торговли: входит в <strong>ТОП‑30 крупнейших интернет-магазинов техники в России</strong> и <strong>ТОП‑5 — компьютерных</strong>.
        </p>

        {/* Центральная картинка */}
        <div className="mb-10">
          <img
            src="https://avatars.mds.yandex.net/get-altay/754546/2a0000018e0ec08685f50f96b041dfe0ddfc/orig"
            alt="История XCOM-SHOP"
            className="mx-auto max-w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Блок 2: Цифры и преимущества — картинка слева */}
      <div className="mb-16 flex flex-col md:flex-row items-center gap-8">
        {/* Картинка слева */}
        <div className="md:w-2/5 flex justify-center">
          <img
            src="https://cdn-icons-png.freepik.com/512/11182/11182485.png?ga=GA1.1.850336399.1766418508"
            alt="Наши преимущества"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Текст справа */}
        <div className="md:w-3/5">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-5 rounded-lg text-center border border-blue-100">
              <div className="text-2xl font-bold text-blue-700">ТОП-30</div>
              <div className="text-sm text-gray-700">крупнейших интернет-магазинов техники в России</div>
            </div>
            <div className="bg-green-50 p-5 rounded-lg text-center border border-green-100">
              <div className="text-2xl font-bold text-green-700">120 000+</div>
              <div className="text-sm text-gray-700">товарных позиций в наличии и на заказ</div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Наши преимущества</h2>
          <ul className="space-y-2 text-left">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Доступные цены</strong> — выгодные предложения и лучшее соотношение цены и качества</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Гарантированный кэшбэк</strong> — 1% стоимости покупки бонусными баллами</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Оформление заказа в кредит</strong> — с минимальным первоначальным взносом</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span><strong>Персональный менеджер</strong> — для постоянных заказчиков</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Блок 3: Для корпоративных клиентов — картинка справа */}
      <div className="mb-12 flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Картинка справа */}
        <div className="md:w-2/5 flex justify-center">
          <img
            src="https://cdn-icons-png.freepik.com/512/18712/18712939.png?ga=GA1.1.850336399.1766418508"
            alt="Корпоративным клиентам"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Текст слева */}
        <div className="md:w-3/5 text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">
            Для корпоративных клиентов
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Корпоративные клиенты получают надежного ИТ‑партнера, предоставляющего возможность:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              <span>Защиты сделок на уровне вендора</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              <span>Покупать со скидками и специальными условиями</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              <span>Покупать проектное оборудование на специальных условиях</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              <span>Покупать через тендеры</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              <span>Покупать в лизинг</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              <span>Рассчитать спецификацию и осметить сложный проект</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 font-bold mr-2">✓</span>
              <span>Заказать услуги внедрения, сопровождения и технической поддержки</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Финальный акцент */}
      <div className="text-center pt-8 border-t border-gray-200">
        <p className="text-xl text-gray-700 italic">
          XCOM‑SHOP — не просто магазин. Это ваш надёжный ИТ‑партнёр с 2001 года.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;