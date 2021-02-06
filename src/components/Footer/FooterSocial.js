import React from 'react';
import { FooterSocialArray } from '../Partials/FooterSocialArray';


const FooterSocial = () => {
    return ( 
        <ul className="footer__social">
            {FooterSocialArray.map((e, i) => (
                <li className="footer__social--item" key={i}>
                    <a target="_blank" rel="noopener noreferrer" href={e.url} dangerouslySetInnerHTML={{__html: e.content}}></a>
                </li>
            ))}
                  
        </ul>
     );
}
 
export default FooterSocial;