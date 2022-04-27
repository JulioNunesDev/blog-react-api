import {Link} from 'react-router-dom'

export const Categorys = () => {
    return ( 
        <div className="aside">
        <section className="category">
          <h2>Categorias</h2>
          <ul>
            <li>
              <Link to='/'>Entretenimento </Link>
            </li>

            <li>
              <Link to="/" >Clima</Link>
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
        <section className="virais">
          <h2> Em desenvolvimento...</h2>
          <ul>
            <h3>Videos Virais</h3>
            <h4>melhores da semana</h4>
          </ul>
        </section>
      </div>
     );
}
 
