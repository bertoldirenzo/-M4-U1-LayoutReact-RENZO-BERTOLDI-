import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/nosotros" >Nosotros</Link></li>
                <li><Link to="/laboratorio" >Laboratorio</Link></li>
                <li><Link to="/trabajos" >Trabajos</Link></li>
                <li><Link to="/contacto" >Contacto</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;