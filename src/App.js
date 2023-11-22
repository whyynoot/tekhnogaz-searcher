import "./components/assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Routes from "./components/routes";
import { FiAlignJustify } from "react-icons/fi";
import Logo from './components/assets/images/logo.png';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* NAVBAR */}
        <nav class="navbar navbar-light navbar-expand-md navigation-home">
          <div class="container">
            <a href="/">
            {/* <a class="nav-link home-link logo" href="/">
                    ТехноГаз
            </a> */}
              <img src={Logo} alt="logo_homie" style={{ height: "100px" }} />
            </a>
            <button
              data-bs-toggle="collapse"
              class="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span class="visually-hidden">Навигация</span>
              <span class="">
                <FiAlignJustify />
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link home-link" href="/">
                    Главная
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link home-link" href="/about">
                    О нас
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link home-link" href="/service">
                    Наши продукты
                  </a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link home-link" href="/searcher">
                    Поисковик
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link home-link" href="/contact">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END OF NAVBAR */}

        <Routes />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
