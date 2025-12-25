// src/components/Footer.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  // Состояние для раскрытия секций (только на мобилке)
  const [openSections, setOpenSections] = useState({
    company: false,
    buyers: false,
    addresses: false,
    info: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="footer bg-[#0061A7] text-white">
      <div className="container4">

        {/* Блок подписки */}
        <div className="subscribe-section flex items-center justify-between h-[48px]">
          <h3 className="text-[23px] font-light">Подпишитесь на новинки и акции</h3>
          <input
            type="email"
            placeholder="Мой e-mail"
            className="w-[550px] h-[48px] rounded-md bg-white text-[#B2B2B2] text-[20px] focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
          <button className="w-[200px] h-[48px] bg-white text-[#0061A7] text-[20px] rounded-md hover:bg-gray-100">
            Подписаться
          </button>
        </div>

        {/* Серая полоса */}
        <div className="divider w-full h-[1px] bg-[#006CBA]"></div>

        {/* ДЕСКТОПНАЯ ВЕРСИЯ */}
        <div className="main-footer desktop-footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 justify-between">
          <div>
            <h4 className="font-bold text-[17px]">Покупателям</h4>
            <ul className="text-light text-[15px]">
              <li><Link to="#" className="hover:underline">Доставка</Link></li>
              <li><Link to="#" className="hover:underline">Гарантия</Link></li>
              <li><Link to="#" className="hover:underline">Оплата</Link></li>
              <li><Link to="#" className="hover:underline">Информация</Link></li>
              <li><Link to="#" className="hover:underline">Корпоративным клиентам</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[17px]">Информация</h4>
            <ul className="text-light text-[15px]">
              <li><Link to="#" className="hover:underline">Акции</Link></li>
              <li><Link to="#" className="hover:underline">Услуги</Link></li>
              <li><Link to="#" className="hover:underline">Новости</Link></li>
              <li><Link to="#" className="hover:underline">Распродажи</Link></li>
              <li><Link to="#" className="hover:underline">Рекомендательные технологии</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[17px]">Компания</h4>
            <ul className="text-light text-[15px]">
              <li><Link to="#" className="hover:underline">О нас</Link></li>
              <li><Link to="#" className="hover:underline">Вакансии</Link></li>
              <li><Link to="#" className="hover:underline">Аффилиатная программа</Link></li>
              <li><Link to="#" className="hover:underline">Лизинг</Link></li>
              <li><Link to="#" className="hover:underline">Госзакупки малого объема</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[17px]">Контакты</h4>
            <ul className="text-light text-[15px]">
              <div className="flex items-center">
                <li><Link to="#" className="hover:underline">Москва</Link></li>
                <ChevronDown size={14} color="white" />
              </div>
              <li><Link to="#" className="hover:underline">+7 (495) 799-96-69</Link></li>
              <li><Link to="#" className="hover:underline">Адреса офисов</Link></li>
              <button className="kn bg-white text-[#0061A7] w-[163px] h-[31px] rounded-md text-[15px] hover:bg-gray-100">
                Задать вопрос
              </button>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[17px]">Мы в соцсетях!</h4>
            <img
              src="src/assets/qrcod.svg"
              alt="QR-код"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* МОБИЛЬНАЯ ВЕРСИЯ (только на ≤768px) */}
        <div className="mobile-footer">
          {/* Секция: Компания */}
          <div className="footer-section">
            <button
              className="footer-header"
              onClick={() => toggleSection('company')}>
              <span>Компания</span>
              {openSections.company ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections.company && (
              <div className="footer-content">
                <Link to="#" className="footer-link">О нас</Link>
                <Link to="#" className="footer-link">Вакансии</Link>
                <Link to="#" className="footer-link">Аффилиатная программа</Link>
                <Link to="#" className="footer-link">Лизинг</Link>
                <Link to="#" className="footer-link">Госзакупки малого объема</Link>
              </div>
            )}
          </div>

          {/* Секция: Покупателям */}
          <div className="footer-section">
            <button
              className="footer-header"
              onClick={() => toggleSection('buyers')}
            >
              <span>Покупателям</span>
              {openSections.buyers ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections.buyers && (
              <div className="footer-content">
                <Link to="#" className="footer-link">Доставка</Link>
                <Link to="#" className="footer-link">Гарантия</Link>
                <Link to="#" className="footer-link">Оплата</Link>
                <Link to="#" className="footer-link">Информация</Link>
                <Link to="#" className="footer-link">Корпоративным клиентам</Link>
              </div>
            )}
          </div>

          {/* Секция: Адреса офисов */}
          <div className="footer-section">
            <button
              className="footer-header"
              onClick={() => toggleSection('addresses')}
            >
              <span>Адреса офисов</span>
              {openSections.addresses ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections.addresses && (
              <div className="footer-content">
                <div className="footer-link">м. Водный стадион — г. Москва, ул. Выборгская, 22 стр. 3</div>
                <div className="footer-link">Долгопрудный — г. Долгопрудный, Транспортный проезд, 6а</div>
                <div className="footer-link">Санкт-Петербург — г. Санкт-Петербург, Деревня Новоселовка, 21...</div>
              </div>
            )}
          </div>

          {/* Секция: Информация */}
          <div className="footer-section">
            <button
              className="footer-header"
              onClick={() => toggleSection('info')}
            >
              <span>Информация</span>
              {openSections.info ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections.info && (
              <div className="footer-content">
                <Link to="#" className="footer-link">Акции</Link>
                <Link to="#" className="footer-link">Услуги</Link>
                <Link to="#" className="footer-link">Новости</Link>
                <Link to="#" className="footer-link">Распродажи</Link>
                <Link to="#" className="footer-link">Рекомендательные технологии</Link>
              </div>
            )}
          </div>
          {/* Блок "Отдел доставки" */}
          <div className="delivery-section mt-4">
            <h4 className="text-sm font-bold mb-2">Отдел доставки</h4>
            <p className="text-xs mb-1">+7 (495) 799-96-69</p>
            <p className="text-xs mb-1">+7 (812) 740-11-10</p>
            <p className="text-xs">9:00 — 18:00 в будни</p>
          </div>

          {/* Иконки соцсетей */}
          <div className="social-icons flex justify-center gap-4 mt-4">
            <a href="#" className="social-icon">
              <img src="src/assets/vk.svg" alt="VK" className="w-[44px] h-[40px]" />
            </a>
            <a href="#" className="social-icon">
              <img src="src/assets/tg.svg" alt="Telegram" className="w-[49px] h-[44px]" />
            </a>
            <a href="#" className="social-icon">
              <img src="src/assets/whatsapp.svg" alt="WhatsApp" className="w-[44px] h-[46px]" />
            </a>
            <a href="#" className="social-icon">
              <img src="src/assets/viber.svg" alt="Viber" className="w-[44px] h-[44px]" />
            </a>
            <a href="#" className="social-icon">
              <img src="src/assets/yt.svg" alt="YouTube" className="w-[44px] h-[44px]" />
            </a>
          </div>
        </div>
        {/* Нижняя серая полоса */}
        <div className="footer-bottom-divider h-[1px] bg-gray-400"></div>

        {/* Копирайт */}
        <div className="footer-bottom flex flex-col sm:flex-row justify-between items-center text-[13px] text-gray-300">
          <p>© 2001–2025 компания X-com</p>
          <p className="mt-2 sm:mt-0">Согласие на обработку персональных данных</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;