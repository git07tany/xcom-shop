// src/components/Header.jsx
import { Link } from 'react-router-dom';
import {Search, Heart, ShoppingCart, CircleUserRound, MapPin, Clock, Phone, ChevronDown } from 'lucide-react';
import './Header.mod.css'

const Header = () => {
  return (
    <header className="header">
      {/* Верхняя панель */}
      <div className="header-top">
        <div className="header-top-left">
          <MapPin color='#0061A7' size={24} />
          <span>Москва</span>
        </div>
        <div className="header-top-right">
          <Clock color='#0061A7' size={24} />
          <span>Режим работы: 9:00 — 21:00</span>
          <Phone color='#0061A7' size={24} />
          <span>+7 495 799-96-69</span>
        </div>
      </div>

      {/* Основная шапка */}
      <div className="header-main">
        <div className="header-logo">
          <Link to="/">
            <img src="src/assets/shop.svg" alt="xcom shop" className="logo-image"/>
          </Link>
        </div>

        <div className="header-catalog">
          <button className="catalog-button">
            Каталог <ChevronDown  size={20} />
          </button>
        </div>

        <div className="header-search">
          <input type="text" placeholder="Поиск по каталогу" className="search-input" />
          <Search size={20} className="search-icon" />
        </div>

        <div className="header-icons">
          <Link to="#" className="icon-link">
            <Heart color='#0061A7' size={40} />
          </Link>
          <Link to="#" className="icon-link">
            <ShoppingCart color='#0061A7' size={40} />
          </Link>
          <Link to="#" className="icon-link">
            <CircleUserRound color='#0061A7' size={40} />
          </Link>
        </div>
      </div>

      {/* Нижнее меню */}
      <nav className="header-nav">
        <Link to="#" className="nav-link">О нас</Link>
        <Link to="#" className="nav-link">Контакты</Link>
        <Link to="#" className="nav-link">Оплата</Link>
        <Link to="#" className="nav-link">Гарантия</Link>
        <Link to="#" className="nav-link">Доставка</Link>
        <Link to="#" className="nav-link">Услуги</Link>
        <Link to="#" className="nav-link">Корпоративным клиентам</Link>
        <Link to="#" className="nav-link">Лизинг</Link>
        <Link to="#" className="nav-link">Поставщикам</Link>
      </nav>
    </header>
  );
};

export default Header;