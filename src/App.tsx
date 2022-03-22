import Logo from "./images/logo.svg";
import Search from "./images/search.svg";
import Featured from "./images/featured-image.png";
import ArrowRight from "./images/arrow-right.svg";
import Post1 from "./images/post-1.png";
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

      <section className="section-1">
        <div>
          <img src={Post1} alt="post-1" />
          <span>Janeiro 04, 2022 </span>
          <h2> Começando no ReactJS em 2022</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed
            volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
          </p>
        </div>

        <div className="side-post">
          <div className="post-1">
            <span>Janeiro 04, 2022 </span>
            <h2>
              Conheça as principais técnicas para conseguir uma vaga
              internacional em programação
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique nibh nibh eu in aliquet ut adipiscing neque.
            </p>
          </div>
          <div className="post-2">
            <span>Janeiro 04, 2022 </span>
            <h2>Veja a evolução do Front-end na prática</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
              eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
              sed tristique nibh nibh eu in aliquet ut adipiscing neque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
