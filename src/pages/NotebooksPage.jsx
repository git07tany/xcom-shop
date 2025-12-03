import React from 'react';
import { Search, Heart, ShoppingCart, User, Clock, Phone, MapPin, Mail } from 'lucide-react';

// Компонент карточки товара
const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        width: '300px',
        margin: '16px',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #e8f0fe',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Изображение */}
      <img
        alt={product.name}
        src="https://via.placeholder.com/200x150?text=Ноутбук"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          marginBottom: '16px',
        }}
      />

      {/* Рейтинг и отзывы */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={i < 4 ? '#0050b3' : '#ddd'}
            viewBox="0 0 16 16"
            style={{ marginRight: '2px' }}
          >
            <path d="M8 0L9.5 4.5H14l-3.5 2.5L12 12H4l1.5-5.5L2 4.5h4.5z" />
          </svg>
        ))}
        <span style={{ marginLeft: '8px', fontSize: '12px', color: '#666' }}>
          {product.reviews} Отзывов
        </span>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '8px',
            padding: '0',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#0050b3"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2A2 2 0 0 0 0 14.586V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .707.5L8 13.5a.5.5 0 0 0 .5-.5V2a2 2 0 0 0-2-2H2z"/>
          </svg>
        </button>
      </div>

      {/* Название и описание */}
      <h3 style={{ margin: '8px 0', fontSize: '14px', fontWeight: 'bold' }}>
        {product.name}
      </h3>
      <p style={{ fontSize: '12px', color: '#666', textAlign: 'left', margin: '8px 0' }}>
        {product.specs}
      </p>

      {/* Информация о доставке */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginBottom: '16px' }}>
        <span>Самовывоз: сегодня</span>
        <span>Доставка: завтра</span>
      </div>

      {/* Кнопка */}
      <button
        style={{
          width: '100%',
          padding: '8px 16px',
          backgroundColor: '#0050b3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Добавить в корзину
      </button>
    </div>
  );
};

// Пример данных продуктов
const products = [
  {
    id: 1,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
  {
    id: 2,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
  {
    id: 3,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
  {
    id: 4,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
  {
    id: 5,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
  {
    id: 6,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
  {
    id: 7,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
  {
    id: 8,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
  {
    id: 9,
    name: "Ноутбук Digma EVE C4800",
    specs: "Windows 11 Профессиональная, 2 , Intel, 14\", UHD Graphics 600, 256 Гб, 8 Гб, Celeron, Full HD (1920 x 1080) / N4020 / 1.1 ГГц",
    reviews: 5,
  },
];

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#fff' }}>

      {/* Основной контент */}
      <main style={{ padding: '20px' }}>
        <div style={{ marginBottom: '16px' }}>
          <span style={{ color: '#999', fontSize: '14px' }}>Компьютеры и ноутбуки - Ноутбуки</span>
        </div>
        <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Ноутбуки n товаров</h1>

        {/* Фильтры */}
        <div style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Для учебы', 'Для офиса', 'Игровые', 'Трансформеры', '13"', '14"', '16"', '17"', 'RTX 4050', 'RTX 4070', 'RTX 4090'].map((filter, index) => (
            <button
              key={index}
              style={{
                backgroundColor: '#e8f0fe',
                border: '1px solid #e8f0fe',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Сортировка */}
        <div style={{ marginBottom: '16px' }}>
          <span>Сортировать по:</span>
          <span style={{ marginLeft: '16px', fontSize: '14px' }}>
            <strong>Популярности</strong> | Цене | Названию | Доступности
          </span>
        </div>

        {/* Карточки товаров */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Подписка */}
      <section
        style={{
          backgroundColor: '#0050b3',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <span style={{ fontSize: '18px', marginRight: '20px' }}>Подпишитесь на новинки и акции</span>
        <input
          type="email"
          placeholder="Мой e-mail"
          style={{
            width: '300px',
            padding: '8px 12px',
            borderRadius: '4px',
            border: 'none',
            marginRight: '16px',
          }}
        />
        <button
          style={{
            backgroundColor: 'white',
            color: '#0050b3',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Подписаться
        </button>
      </section>

      {/* Футер */}
      <footer
        style={{
          backgroundColor: '#0050b3',
          color: 'white',
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h4>Покупателям</h4>
          <ul style={{ listStyle: 'none', padding: '0', margin: '8px 0' }}>
            {['Доставка', 'Гарантия', 'Оплата', 'Информация', 'Корпоративным клиентам'].map((item, index) => (
              <li key={index} style={{ marginBottom: '4px' }}>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '0',
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Информация</h4>
          <ul style={{ listStyle: 'none', padding: '0', margin: '8px 0' }}>
            {['Акции', 'Услуги', 'Новости', 'Распродажи', 'Рекомендательные технологии'].map((item, index) => (
              <li key={index} style={{ marginBottom: '4px' }}>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '0',
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Компания</h4>
          <ul style={{ listStyle: 'none', padding: '0', margin: '8px 0' }}>
            {['О нас', 'Вакансии', 'Аффилиатная программа', 'Лизинг', 'Госзакупки малого объема'].map((item, index) => (
              <li key={index} style={{ marginBottom: '4px' }}>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '0',
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Контакты</h4>
          <div style={{ marginBottom: '8px' }}>
            <span>Москва ▼</span>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <span>+7 (495) 799-96-69</span>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <span>Адреса офисов</span>
          </div>
          <button
            style={{
              backgroundColor: 'white',
              color: '#0050b3',
              border: 'none',
              padding: '4px 8px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            Задать вопрос
          </button>
        </div>
        <div>
          <h4>Мы в соц.сетях!</h4>
          <div style={{ marginTop: '10px' }}>
            <img
              src="https://via.placeholder.com/64x64?text=QR"
              alt="QR Code"
              style={{ width: '64px', height: '64px' }}
            />
          </div>
        </div>
      </footer>

      {/* Копирайт */}
      <div
        style={{
          backgroundColor: '#0050b3',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          fontSize: '12px',
        }}
      >
        © 2001–2025 компания X-com
        <span style={{ float: 'right' }}>Согласие на обработку персональных данных</span>
      </div>
    </div>
  );
}

export default App;