

import './newCss.css'
import {BtnLinks} from '../buttoes/ButtonLinks'

export const NewCards = ({data}) => {

   
    return ( 

     

       
           
        <div  className="Contained">
            <div  className="ImgDiv">
                <div className="imgDiv-main">
                    <a href={data.urlToImage}><img src={data.urlToImage} alt='Error ao Carregar Imagem' /></a>
                </div>
               
            </div>
            <div className="titles">
                <div className="title-main"><h2><a href={data.url}>{data.title}</a></h2></div>
             <div className="sub-title"><p>{data.description}</p></div>
                <div className="title-author">
                <p>{data.author}</p></div>
                <BtnLinks to={`${data.url}`} >
                    Veja mais
                </BtnLinks>
            </div>
           
           
            
        </div>
        
    
        
     );
}
 
