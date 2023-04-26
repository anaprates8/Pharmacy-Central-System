import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import DropdownButton from 'react-bootstrap/DropdownButton';

function NavBar() {
    return ( 
        <Navbar>
        <div className='logo'>
        <img src="src\assets\logo1.png"></img>
        </div>
        <Navbar.Collapse className="justify-content-end">
        <Link to="/">Home</Link>
        <Link to="/ListaFarmacias">Farmacias</Link>
        <Link to="/ListaMedicamentos">Medicamentos</Link>
        <DropdownButton align="end" title="Cadastre-se"  id="dropdown">
        <Link to="/CadastroFarmacia">Farmacia</Link>
        <Link to="/CadastroMedicamentos">Medicamentos</Link>
        </DropdownButton>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;