import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-[#0061A7] text-white">
      <div className="container4">
        {/* Блок подписки */}
        <div className="subscribe-section flex items-center justify-between h-[48px] ">
          <h3 className="text-[23px] font-light">Подпишитесь на новинки и акции</h3>
          <input
            type="email"
            placeholder="Мой e-mail"
            className="w-[550px] h-[48px] rounded-md bg-white text-[#B2B2B2] text-[20px] focus:outline-none focus:ring-1 focus:ring-blue-300"/>

          <button className="w-[200px] h-[48px] bg-white text-[#0061A7] text-[20px] rounded-md hover:bg-gray-100">
            Подписаться
          </button>
        </div>

        {/* Серая полоса */}
        <div className="divider w-full h-[1px] bg-[#006CBA]"></div>

        {/* Основной футер */}
        <div className="main-footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 justify-between">
          {/* Колонка 1: Покупателям */}
          <div>
            <h4 className="font-bold text-[17px]">Покупателям</h4>
            <ul className="text-light text-[15px]">
              <li><Link to="#" className="hover:underline ">Доставка</Link></li>
              <li><Link to="#" className="hover:underline">Гарантия</Link></li>
              <li><Link to="#" className="hover:underline">Оплата</Link></li>
              <li><Link to="#" className="hover:underline">Информация</Link></li>
              <li><Link to="#" className="hover:underline">Корпоративным клиентам</Link></li>
            </ul>
          </div>

          {/* Колонка 2: Информация */}
          <div>
            <h4 className="font-bold text-[17px]">Информация</h4>
            <ul className="text-light text-[15px] ">
              <li><Link to="#" className="hover:underline">Акции</Link></li>
              <li><Link to="#" className="hover:underline">Услуги</Link></li>
              <li><Link to="#" className="hover:underline">Новости</Link></li>
              <li><Link to="#" className="hover:underline">Распродажи</Link></li>
              <li><Link to="#" className="hover:underline">Рекомендательные технологии</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Компания */}
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

          {/* Колонка 4: Контакты */}
          <div>
            <h4 className="font-bold text-[17px]">Контакты</h4>
            <ul className="text-light text-[15px]">
              <div className="flex items-center gap-2">
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

          {/* Колонка 5: Соцсети */}
          <div>
            <h4 className="font-bold text-[17px]">Мы в соцсетях!</h4>
            <img
              src="src/assets/qrcod.svg"
              alt="QR-код"
              className="w-24 h-24 object-contain"
            />
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