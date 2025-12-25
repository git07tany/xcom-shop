import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const HomePage = () => {
  return ( 
    <div className="home">
      <div className="container3">

        {/* Баннер "Черная пятница" */}
        <section className="home-banner">
          <img src="src/assets/friday.svg" alt="Черная пятница" className="banner-image max-w-100%" />
        </section>

        {/* Популярные категории */}
        <section className="home-section">
          <h2 className="section-title text-[30px] font-medium text-gray-900 text-center">Популярные категории</h2>
          <div className="category-grid grid sm:grid-cols-3 md:grid-cols-5 gap-8">
            <Link to="/catalog/notebooks" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image5.svg" alt="Ноутбуки" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Ноутбуки</p>
            </Link>
            <Link to="/catalog/smartphones" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image6.svg" alt="Смартфоны" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Смартфоны</p>
            </Link>
            <Link to="/catalog/monitors" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image7.svg" alt="Мониторы" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Мониторы</p>
            </Link>
            <Link to="/catalog/video-cards" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image8.svg" alt="Видеокарты" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Видеокарты</p>
            </Link>
            <Link to="/catalog/processors" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[215px] h-[200px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image 9.svg" alt="Процессоры" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Процессоры</p>
            </Link>
          </div>
        </section>

        {/* Конструкторы */}
        <section className="home-section mt-12">
          <div className="flex justify-center items-center">
            <h2 className="section-title text-[30px] font-medium text-gray-900 text-center flex-grow text-center">
              Конструкторы
            </h2>
            <Link to="/constructors" className="view-all-link text-[20px] font-medium text-[#0061A7] hover:underline flex items-center gap-1">
              Все конструкторы <ArrowRight size={16} color="#0061A7" />
            </Link>
          </div>
          <div className="constructor-grid grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            <Link to="/build/notebook" className="constructor-card bg-[#EAF5FF] w-[377px] h-[150px] border-none rounded-2xl hover:shadow-lg transition-shadow gap-5 flex justify-center items-center">
              <img src="src/assets/image 12.svg" alt="Сборка ноутбука" className="constructor-image px-5 py-6 w-[96px] h-[96px] object-contain mb-4" />
              <p className="constructor-desc w-[213px] text-[20px] text-gray-600">Онлайн конструктор ПК с проверкой совместимости</p>
            </Link>
            <Link to="/build/pc" className="constructor-card bg-[#EAF5FF] w-[377px] h-[150px] border-none rounded-2xl hover:shadow-lg transition-shadow gap-5 flex justify-center items-center">
              <img src="src/assets/image 13.svg" alt="Сборка ПК" className="constructor-image w-[96px] h-[96px] object-contain mb-4" />
              <p className="constructor-desc w-[170px] text-[20px] text-gray-600">Аналоговое видеонаблюдение</p>
            </Link>
            <Link to="/build/workstation" className="constructor-card bg-[#EAF5FF] w-[377px] h-[150px] border-none rounded-2xl px-5 hover:shadow-lg transition-shadow gap-5 flex justify-center items-center">
              <img src="src/assets/image 14.svg" alt="Рабочая станция" className="constructor-image w-[96px] h-[96px] object-contain mb-4" />
              <p className="constructor-desc w-[200px] text-[20px] text-gray-600">Подбор материалов для оргтехники</p>
            </Link>
          </div>
        </section>

        {/* Новости */}
        <section className="home-section mt-12 mb-12">
          <div className="flex justify-center items-center">
            <h2 className="section-title text-[30px] font-medium text-gray-900 text-center flex-grow text-center">Новости</h2>
            <Link to="/news" className="view-all-link text-[20px] font-medium text-[#0061A7] hover:underline flex items-center gap-1">
              Все новости <ArrowRight size={16} color="#0061A7" />
            </Link>
          </div>
          <div className="news-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Link to="/news/1" className="news-card group">
              <div className="news-content bg-[#EAF5FF] border-none rounded-2xl p-5 w-[280px] h-[336px] hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
                <h3 className="news-title text-[20px] w-[150px] font-medium text-gray-900 group-hover:text-[#0061A7]">
                  В мире компьютеров
                </h3>
              </div>
            </Link>
            <Link to="/news/2" className="news-card group">
              <div className="news-content bg-[#EAF5FF] border-none rounded-2xl p-5 w-[280px] h-[336px] hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
                <h3 className="news-title text-[20px] w-[170px] font-medium text-gray-900 group-hover:text-[#0061A7]">
                  Землю захватили пришельцы
                </h3>
              </div>
            </Link>
            <Link to="/news/3" className="news-card group">
              <div className="news-content bg-[#EAF5FF] border-none rounded-2xl p-5 w-[280px] h-[336px] hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
                <h3 className="news-title text-[20px] w-[220px] font-medium text-gray-900 group-hover:text-[#0061A7]">
                  Мы разработали цветок с видеонаблюдением
                </h3>
              </div>
            </Link>
            <Link to="/news/4" className="news-card group">
              <div className="news-content bg-[#EAF5FF] border-none rounded-2xl p-5 w-[280px] h-[336px] hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center">
                <h3 className="news-title text-[20px] w-[250px] font-medium text-gray-900 group-hover:text-[#0061A7]">
                  А вы знали, что работать у нас + вайб и никаких выгораний
                </h3>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;