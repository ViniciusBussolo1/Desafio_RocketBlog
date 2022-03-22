import Logo from "./images/logo.svg";
import Search from "./images/search.svg";
import Featured from "./images/featured-image.png";
import ArrowRight from "./images/arrow-right.svg";
import "./styles.scss";

function App() {
  return (
    <>
      <div className="home">
        <header className="header">
          <img src={Logo} alt="Logo Blog" />
          <ul className="menu">
            <li>Home</li>
            <li>Sobre</li>
            <li>Categorias</li>
            <li>Contato</li>
          </ul>
          <div className="search">
            <input type="text" className="input" placeholder="Buscar" />
            <button>
              <img src={Search} alt="imagem de pesquisa" />
            </button>
          </div>
        </header>

        <div className="content">
          <div>
            <h1>
              Veja o guia definitivo para conquistar seus objetivos como DEV em
              2022
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique placerat hac.
            </p>

            <div className="info">
              <span>Veja mais</span>
              <img src={ArrowRight} alt="Flecha para diretia" />
            </div>
          </div>

          <div className="image-featured">
            <img src={Featured} alt="featured image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
