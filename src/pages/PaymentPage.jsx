import React, { useState } from 'react';
import { CircleDollarSign, Banknote, SquarePlus, ArrowRightLeft } from 'lucide-react';

const PaymentPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Иконки (можно заменить на SVG, img или иконки из библиотеки)
  const renderIcon = (name) => {
    const iconClass = "h-12 w-12 text-blue-600 mx-auto mb-4";
    return (
      <div className="inline-flex items-center justify-center bg-blue-100 rounded-full p-3 mb-4">
        {name === 'cash' && (
        <CircleDollarSign />
        )}
        {name === 'card' && (
        <Banknote />
        )}
        {name === 'online' && (
        <SquarePlus />
        )}
        {name === 'transfer' && (
        <ArrowRightLeft />
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-center mb-10">Оплата</h1>

      {/* Карта (заглушка под Google Maps) */}
      <div className="mb-12">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
          Карта: пункты выдачи и склады XCOM-SHOP
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Более 100 пунктов выдачи по России — выберите удобный при оформлении заказа
        </p>
      </div>

      {/* 4 блока */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          {renderIcon('cash')}
          <h3 className="font-semibold text-lg mb-1">Наличными при получении</h3>
          <p className="text-sm text-gray-600">Оплата курьеру и при самовывозе со складов и ПВЗ.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          {renderIcon('card')}
          <h3 className="font-semibold text-lg mb-1">Банковской картой при получении</h3>
          <p className="text-sm text-gray-600">Оплата курьеру и при самовывозе.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          {renderIcon('online')}
          <h3 className="font-semibold text-lg mb-1">Онлайн оплата</h3>
          <p className="text-sm text-gray-600">Visa, Mastercard, Мир, ЮMoney. Безопасно и мгновенно.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          {renderIcon('transfer')}
          <h3 className="font-semibold text-lg mb-1">Банковский перевод</h3>
          <p className="text-sm text-gray-600">Для юридических лиц и ИП.</p>
        </div>
      </div>

      {/* Первый аккордеон: Условия оплаты */}
      <div className="mb-12">
        <div
          className={`bg-white border border-gray-200 rounded-xl p-5 cursor-pointer transition-all ${
            openSection === 'conditions' ? 'shadow-md' : ''
          }`}
          onClick={() => toggleSection('conditions')}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Способы и условия оплаты</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openSection === 'conditions' ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {openSection === 'conditions' && (
          <div className="mt-4 space-y-4">
            {/* Сюда вставляй свой текст */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Рассрочка и кредит</h4>
              <p className="text-gray-600 mt-1">
                [Твой текст: условия, сроки, банки-партнёры и т.д.]
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Бонусы и кэшбэк</h4>
              <p className="text-gray-600 mt-1">
                [Твой текст: как начисляются баллы, как использовать и т.п.]
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Оплата для юридических лиц</h4>
              <p className="text-gray-600 mt-1">
                [Твой текст: НДС, счёт, договор, лизинг и пр.]
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Безопасность платежей</h4>
              <p className="text-gray-600 mt-1">
                [Твой текст: шифрование, PCI DSS, защита данных]
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Второй аккордеон: Частые вопросы */}
      <div>
        <div
          className={`bg-white border border-gray-200 rounded-xl p-5 cursor-pointer transition-all ${
            openSection === 'faq' ? 'shadow-md' : ''
          }`}
          onClick={() => toggleSection('faq')}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Частые вопросы</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openSection === 'faq' ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {openSection === 'faq' && (
          <div className="mt-4 space-y-4">
            {/* Сюда вставляй свои вопросы */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Можно ли оплатить заказ частями?</h4>
              <p className="text-gray-600 mt-1">
                [Твой ответ: да/нет, через что, условия]
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Когда спишутся деньги с карты?</h4>
              <p className="text-gray-600 mt-1">
                [Твой ответ: сразу, после подтверждения и т.д.]
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Что, если я передумаю после оплаты?</h4>
              <p className="text-gray-600 mt-1">
                [Твой ответ: возврат, сроки, условия]
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Принимаете ли вы оплату по QR-коду?</h4>
              <p className="text-gray-600 mt-1">
                [Твой ответ: да/нет, где доступно]
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;