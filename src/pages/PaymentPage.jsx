import React, { useState } from 'react';
import { CircleDollarSign, Banknote, SquarePlus, ArrowRightLeft } from 'lucide-react';

const PaymentPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

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
    <div className="max-w-4xl mx-auto px-4 py-1 text-gray-800 font-sans">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-center mb-10">Оплата</h1>

      {/* Карта (заглушка под Google Maps) */}
      <div className="mb-12">
        <div className="flex items-center justify-center text-gray-500">
          <img src="https://www.xcom-shop.ru/local/templates/shop2022/images/pages/delivery/banner-max.png" />
        </div>
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
          <p className="text-sm text-gray-600">Банковской картой на сайте: Visa, Mastercard, Мир, ЮMoney. Зачисление в день оплаты.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          {renderIcon('transfer')}
          <h3 className="font-semibold text-lg mb-1">Банковский перевод</h3>
          <p className="text-sm text-gray-600">Банковские переводы привязываются к заказам по будням с 09:00 до 18:00.</p>
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
              <h4 className="font-medium">Бонусы XCOM</h4>
              <p className="text-gray-600 mt-1">
                Обязательно дописать текст
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Рассрочка от ROWI и "Халва"</h4>
              <p className="text-gray-600 mt-1">
                Обязательно дописать текст
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
              <h4 className="font-medium">Правила приёма оплаты банковской картой в офисе или курьером</h4>
              <p className="text-gray-600 mt-3">
                · Использование банковской карты возможно только её законным держателем (лицом, фамилия и имя которого указаны на карте, подпись которого изображена на соответствуюшей полосе.)</p>
              <p className="text-gray-600 mt-3">
                · Кассир имеет право потребовать от владельца документ, подтверждающий личность держателя карты, подписать чек или ввести ПИН-код (при вводе ПИН-кода документы не требуются).</p>
              <p className="text-gray-600 mt-3">
                · Подпись на чеке должна совпадать с подписью на карте. Если подпись на чеке явно отличается от подписи на карте, кассир вправе отказать в приёме банковской карты к оплате.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Получение заказа, оплаченного безналичным способом</h4>
              <p className="font-semibold mt-5">
                ФИЗИЧЕСКИМ ЛИЦАМ:</p>
                <p className="text-gray-600 mt-1">
                В случае безналичной оплаты, сотрудники Интернет-магазина XCOM-SHOP могут потребовать предъявить документ, удостоверяющий личномть покупателя, а в случае его отсутствия - отказать в выдаче товара.</p>
                <p className="font-semibold mt-5">
                ЮРИДИЧЕСКИМ ЛИЦАМ И ИП, ЕСЛИ ЗАКАЗ ПОЛУЧАЕТ:</p>
                <p className="text-gray-600 mt-1">
                Представитель покупателя, он должен предъявить оригинал доверенности и паспорт. Доверенность должна быть скреплена подлинными подписям и заверена печатью Покупателя.</p>
                <p className="text-gray-600 mt-1">
                Генеральный директор, ему необходимо предоставить паспорт и печать организации.</p>
                <p className="text-gray-600 mt-1">
                Индивидуальный предприниматель лично, ему необходимо предъявить документ, удостоверяющий личность, и печать (письмо об отсутствии печати).</p>
                <p className="text-gray-600 mt-7">
                Получение заказа, оплаченного безналичным способом, будет возможно только после поступления денег на наш счёт.</p>
                <p className="text-gray-600 mt-3">
                При отсутствии вышеуказанных документов или их неверном оформлении в выдаче товара будет отказано.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Возврат денег при отмене заказа</h4>
              <p className="text-gray-600 mt-3">
                Если заказ был оплачен безналичным способом, деньги перечисляются обратно на счёт или кошелёк, с которого производилась оплата.</p>
              <p className="font-semibold mt-5">
                Для возврата необходимо:</p>
              <p className="text-gray-600 mt-1">
                1. Заполнить заявление на возврат.</p>
              <p className="text-gray-600 mt-1">
                2. Предоставить паспорт.</p>
              <p className="text-gray-600 mt-5">
                При оплате заказа банковской картой в офисе — предоставить чек, слип (второй «чек», содержащий информацию о переводе средств) и карту, с которой производилась оплата.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;