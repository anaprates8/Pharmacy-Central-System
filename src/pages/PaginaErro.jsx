import { Button, } from 'react-bootstrap';
import NavBarLogin from '../components/NavBarLogin';
import { useNavigate } from "react-router-dom";

function PaginaErro() {
    const navigate = useNavigate()
    return ( 
    <>
       <NavBarLogin />
    <h1>
        Ops! <br />
        Não conseguimos encontrar a página <br /> que você esta procurando.
        <br />
    <Button type="submit" onClick={() => {
    navigate("/");}}
    variant="primary" id="btnLogin">Voltar para o início</Button>
    </h1> 
    </>
    );
}

export default PaginaErro;