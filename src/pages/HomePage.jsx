import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="container3">

        {/* Баннер "Черная пятница" */}
        <section className="home-banner">
          <img src="src/assets/friday.svg" alt="Черная пятница" className="banner-image max-w-[1440px] " />
        </section>

        {/* Популярные категории */}
        <section className="home-section">
          <h2 className="section-title text-[30px] font-medium text-gray-900 text-center">Популярные категории</h2>
          <div className="category-grid grid sm:grid-cols-3 md:grid-cols-5 gap-6">
            <Link to="/catalog/notebooks" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[235px] h-[210px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image5.svg" alt="Ноутбуки" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Ноутбуки</p>
            </Link>
            <Link to="/catalog/smartphones" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[235px] h-[210px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image6.svg" alt="Смартфоны" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Смартфоны</p>
            </Link>
            <Link to="/catalog/monitors" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[235px] h-[210px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image7.svg" alt="Мониторы" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Мониторы</p>
            </Link>
            <Link to="/catalog/video-cards" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[235px] h-[210px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image8.svg" alt="Видеокарты" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Видеокарты</p>
            </Link>
            <Link to="/catalog/processors" className="constructor-card flex flex-col items-center text-center bg-[#EAF5FF] border-none w-[235px] h-[210px] rounded-2xl hover:shadow-lg transition-shadow">
              <img src="src/assets/image 9.svg" alt="Процессоры" className="constructor-image w-[150px] h-[125px] object-contain mb-4" />
              <p className="nav-link text-[20px] text-gray-800 hover:text-[#0061A7]">Процессоры</p>
            </Link>
          </div>
        </section>

        {/* Конструкторы */}
        <section className="home-section mt-12">
          <div className="flex justify-between items-center">
            <h2 className="section-title text-[30px] font-medium text-gray-900 text-center">Конструкторы</h2>
            <Link to="/constructors" className="view-all-link text-[15px] font-medium text-[#0061A7] hover:underline">
              Все конструкторы
            </Link>
          </div>
          <div className="constructor-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <Link to="/build/notebook" className="constructor-card bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <img src="src/assets/image 12.svg" alt="Сборка ноутбука" className="constructor-image w-full h-32 object-contain mb-4" />
              <h3 className="constructor-title text-lg font-bold text-gray-900 mb-2">Сборка ноутбука</h3>
              <p className="constructor-desc text-[15px] text-gray-600">Подберите комплектующие под ваши задачи</p>
            </Link>
            <Link to="/build/pc" className="constructor-card bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <img src="src/assets/image 13.svg" alt="Сборка ПК" className="constructor-image w-full h-32 object-contain mb-4" />
              <h3 className="constructor-title text-lg font-bold text-gray-900 mb-2">Сборка ПК</h3>
              <p className="constructor-desc text-[15px] text-gray-600">Соберите мощный компьютер</p>
            </Link>
            <Link to="/build/workstation" className="constructor-card bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <img src="src/assets/image 14.svg" alt="Рабочая станция" className="constructor-image w-full h-32 object-contain mb-4" />
              <h3 className="constructor-title text-lg font-bold text-gray-900 mb-2">Рабочая станция</h3>
              <p className="constructor-desc text-[15px] text-gray-600">Для дизайна, 3D и инженерии</p>
            </Link>
          </div>
        </section>

        {/* Новости */}
        <section className="home-section mt-12 mb-12">
          <div className="flex justify-between items-center">
            <h2 className="section-title text-2xl font-bold text-gray-900">Новости</h2>
            <Link to="/news" className="view-all-link text-[15px] font-medium text-[#0061A7] hover:underline">
              Все новости
            </Link>
          </div>
          <div className="news-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Link to="/news/1" className="news-card group">
              <div className="news-content bg-white border border-gray-200 rounded-2xl p-5 h-full hover:shadow-md transition-shadow">
                <h3 className="news-title text-base font-bold text-gray-900 group-hover:text-[#0061A7]">
                  В мире компьютеров
                </h3>
              </div>
            </Link>
            <Link to="/news/2" className="news-card group">
              <div className="news-content bg-white border border-gray-200 rounded-2xl p-5 h-full hover:shadow-md transition-shadow">
                <h3 className="news-title text-base font-bold text-gray-900 group-hover:text-[#0061A7]">
                  Землю захватили пришельцы
                </h3>
              </div>
            </Link>
            <Link to="/news/3" className="news-card group">
              <div className="news-content bg-white border border-gray-200 rounded-2xl p-5 h-full hover:shadow-md transition-shadow">
                <h3 className="news-title text-base font-bold text-gray-900 group-hover:text-[#0061A7]">
                  Мы разработали цветок с видеонаблюдением
                </h3>
              </div>
            </Link>
            <Link to="/news/4" className="news-card group">
              <div className="news-content bg-white border border-gray-200 rounded-2xl p-5 h-full hover:shadow-md transition-shadow">
                <h3 className="news-title text-base font-bold text-gray-900 group-hover:text-[#0061A7]">
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