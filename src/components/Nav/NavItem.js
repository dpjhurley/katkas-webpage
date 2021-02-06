import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({
    title,
    url,
    cName
}) => {
    return (  
        <li className={cName}>
            <Link to={url}>{title}</Link>
        </li>
    );
}
 
export default NavItem;