import "./baseLayout.css";
import { NewCards } from "../shared/components/newscards/NewCArds";
import { UseNewsContext } from "../shared/hooks/NoticiasContext";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Categorys } from "../shared/components/categocyCard/Categorys";
import { useEffect } from "react";
import { AppRoutes } from "../routes/routes";



export const BaseLayout = () => {
  const { noticias } = UseNewsContext();
  const [menu, setMenu] = useState(true);
  const handleMenuBar = () => {
    setMenu(!menu);
  };
  


  return (
    <div className="baseLayout">
      <header>
        <div className="btnBar" onClick={handleMenuBar}>
          <FaBars />
        </div>
        <div className="logo">
          <h1>JNEWS</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="Buscar" />
        </div>
      </header>

      <div className="menuBar" style={menu ? {display: 'none'}: {display: 'block'}}>
         
        <section className="category">
          <h1 className="BtnMenuFechar" onClick={handleMenuBar}>
            Fechar
          </h1>
          <h2>Categorias</h2>
          <ul>
            <li>
              <Link to="/">Entretenimento</Link>
            </li>
            <li>
              <Link to="/">Clima</Link>
            </li>
            <li>
              <Link to="/">Ciência</Link>
            </li>
            <li>
              <Link to="/">Esportes</Link>
            </li>
            <li>
              <Link to="/">Tecnologia</Link>
            </li>
            <li>
              <Link to="/">Negócios</Link>
            </li>
          </ul>
        </section>
      </div>

      <article className="base">
        <div className="main-left">
          <div>
          
            {noticias
              ? noticias.articles.map((news) => (
                  <NewCards data={news} key={news.url} />
                ))
              : "Loading.."}
          </div>
        </div>
                <Categorys/>
      </article>
    </div>
  );
};
