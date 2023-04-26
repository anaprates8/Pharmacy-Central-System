import {Navbar, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function NavBarLogin() {
    const navigate = useNavigate()
    
    return ( 
        <Navbar> 
        <div className='logo'>
        <img src="src\assets\logo1.png"></img>
        </div>
        <Navbar.Collapse className="justify-content-end" Id="nav-login">
        </Navbar.Collapse>
        <Button onClick={() => {
        navigate("/");
    }}
     variant="primary" type="onClick" Id="botão-login">Login</Button>
        </Navbar>
     );
}
export default NavBarLogin;