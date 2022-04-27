import {NavLink} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import './btnCss.css'


export const BtnLinks = ({children, to}) => {
    return ( 
       
        <a className='links' href={to}>
           {children}
           <FaArrowRight/>
        </a>
     );
}
 
