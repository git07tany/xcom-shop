// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">

      {/* Баннер "Черная пятница" */}
      <section className="home-banner">
        <img src="images/black-friday-banner.jpg" alt="Черная пятница" className="banner-image" />
      </section>

      {/* Популярные категории */}
      <section className="home-section">
        <h2 className="section-title">Популярные категории</h2>
        <div className="category-grid">
          <Link to="/catalog/notebooks" className="category-card">
            <img src="images/notebook-icon.png" alt="Ноутбуки" className="category-image" />
            <p className="category-name">Ноутбуки</p>
          </Link>
          <Link to="/catalog/smartphones" className="category-card">
            <img src="images/smartphone-icon.png" alt="Смартфоны" className="category-image" />
            <p className="category-name">Смартфоны</p>
          </Link>
          <Link to="/catalog/monitors" className="category-card">
            <img src="images/monitor-icon.png" alt="Мониторы" className="category-image" />
            <p className="category-name">Мониторы</p>
          </Link>
          <Link to="/catalog/video-cards" className="category-card">
            <img src="images/gpu-icon.png" alt="Видеокарты" className="category-image" />
            <p className="category-name">Видеокарты</p>
          </Link>
          <Link to="/catalog/processors" className="category-card">
            <img src="images/cpu-icon.png" alt="Процессоры" className="category-image" />
            <p className="category-name">Процессоры</p>
          </Link>
        </div>
      </section>

      {/* Конструкторы */}
      <section className="home-section">
        <h2 className="section-title">Конструкторы</h2>
        <div className="constructor-grid">
          <Link to="/build/notebook" className="constructor-card">
            <img src="images/constructor-notebook.png" alt="Сборка ноутбука" className="constructor-image" />
            <h3 className="constructor-title">Сборка ноутбука</h3>
            <p className="constructor-desc">Подберите комплектующие под ваши задачи</p>
          </Link>
          <Link to="/build/pc" className="constructor-card">
            <img src="images/constructor-pc.png" alt="Сборка ПК" className="constructor-image" />
            <h3 className="constructor-title">Сборка ПК</h3>
            <p className="constructor-desc">Соберите мощный компьютер</p>
          </Link>
          <Link to="/build/workstation" className="constructor-card">
            <img src="images/constructor-workstation.png" alt="Рабочая станция" className="constructor-image" />
            <h3 className="constructor-title">Рабочая станция</h3>
            <p className="constructor-desc">Для дизайна, 3D и инженерии</p>
          </Link>
        </div>
        <Link to="/constructors" className="view-all-link">Все конструкторы</Link>
      </section>

      {/* Новости */}
      <section className="home-section">
        <h2 className="section-title">Новости</h2>
        <div className="news-grid">
          <Link to="/news/1" className="news-card">
            <div className="news-content">
              <h3 className="news-title">В мире компьютеров</h3>
            </div>
          </Link>
          <Link to="/news/2" className="news-card">
            <div className="news-content">
              <h3 className="news-title">Землю захватили пришельцы</h3>
            </div>
          </Link>
          <Link to="/news/3" className="news-card">
            <div className="news-content">
              <h3 className="news-title">Мы разработали цветок с видеонаблюдением</h3>
            </div>
          </Link>
          <Link to="/news/4" className="news-card">
            <div className="news-content">
              <h3 className="news-title">А вы знали, что работать у нас + вайб и никаких выгораний</h3>
            </div>
          </Link>
        </div>
        <Link to="/news" className="view-all-link">Все новости</Link>
      </section>

    </div>
  );
};

export default Home;