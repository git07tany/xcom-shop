import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Search, Heart, ShoppingCart, CircleUserRound, ChevronDown, Menu } from 'lucide-react';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      {/* Верхняя панель */}
      <div className="container">
        <div className="header-top flex justify-between items-center py-3 text-[15px] font-normal text-black">
          <div className="flex items-center gap-2">
            <MapPin size={20} color="#0061A7" />
            <span>Москва</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} color="#0061A7" />
            <span>Режим работы: 9:00 — 21:00</span>
            <Phone size={20} color="#0061A7" />
            <span>+7 495 799-96-69</span>
          </div>
        </div>
      </div>

      {/* Основная шапка */}
      <div className="container">
        <div className="header-main flex items-center h-[77px] py-4">

          {/* Бургер-меню */}
          <button className="mobile-menu-button w-[23px] flex items-center justify-center">
            <Link to="/catalog" className="icon-link">
              <Menu size={24} />
            </Link>
          </button>

          {/* Логотип — по центру */}
          <div className="header-logo">
            <Link to="/">
              <img src="src/assets/shop.svg" alt="xcom shop" className="h-[77px]" />
            </Link>
          </div>

          {/* Иконка местоположения — справа */}
          <div className="location-icon">
            <MapPin size={24} color="#0061A7" />
          </div>

          <div className="cata">
            <Link to="/" className="catalog-button h-[39px] bg-[#0061A7] text-white rounded-full text-[15px] font-light flex gap-2">
              Каталог
              <ChevronDown size={16} color="white" />
            </Link>
          </div>

          <div className="header-search flex-grow max-w-[493px] relative">
            <input
              type="text"
              placeholder="Поиск по каталогу"
              className="w-full h-[40px] border border-gray-300 rounded-full text-[15px] focus:outline-none focus:border-blue-500" />
            <Search size={20} color="#9ca3af" className="absolute right-4 top-1/2 transform -translate-y-1/2" />
          </div>

          <div className="header-icons flex items-center gap-20">
            <Link to="/like" className="icon-link">
              <Heart size={40} color="#0061A7" />
            </Link>
            <Link to="/cart" className="icon-link">
              <ShoppingCart size={40} color="#0061A7" />
            </Link>
            <Link to="#" className="icon-link">
              <CircleUserRound size={40} color="#0061A7" />
            </Link>
          </div>
        </div>
      </div>

      {/* Поиск ниже */}
      <div className="mobile-search">
        <div className="head-search">
          <div className="search-wrapp">
            <input type="text" placeholder="Поиск по каталогу" className="search-inp border border-gray-300 rounded-full focus:outline-none focus:border-blue-500" />
            <Search size={20} color="#9ca3af" className="search-ic" />
          </div>
        </div>
      </div>

      
      {/* Нижнее меню */}
      <div className="container2">
        <nav className="header-nav bg-[#EAF5FF] h-[40px] flex items-center justify-between">
          <Link to="/about" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">О нас</Link>
          <Link to="/contacts" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">Контакты</Link>
          <Link to="/payment" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">Оплата</Link>
          <Link to="/warranty" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">Гарантия</Link>
          <Link to="/delivery" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">Доставка</Link>
          <Link to="/services" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">Услуги</Link>
          <Link to="/corporate" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">Корпоративным клиентам</Link>
          <Link to="/leasing" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">Лизинг</Link>
          <Link to="/suppliers" className="nav-link text-[15px] font-medium text-gray-700 hover:text-[#0061A7]">Поставщикам</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;