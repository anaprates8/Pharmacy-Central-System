import NavBar from "../components/NavBar";
import { useAppContext } from '../contexts/useAppContext';
import { Container, Table } from "react-bootstrap";


 function ListaFarmacias() {
const { farmacias } = useAppContext();
  
    return (
      <>
    <NavBar />
    <Container>
    <h2>Farmácias Cadastradas</h2>
      {farmacias.map(farmacia => (
        <div key={farmacia.dados}>
        <h3>Dados Loja:</h3> 
        <Table striped>
      <thead>
        <tr>
          <th>Razão Social:</th>
          <th>CNPJ:</th>
          <th>Nome Fantasia:</th>
          <th>E-mail:</th>
          <th>Telefone:</th>
          <th>Celular:</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{farmacia.razãosocial}</td>
          <td>{farmacia.cnpj}</td>
          <td>{farmacia.nomefantasia}</td>
          <td>{farmacia.email}</td>
          <td>{farmacia.telefone}</td>
          <td>{farmacia.celular}</td>
          <td></td>
        </tr>
        </tbody>
        
        <br />
        <thead>
        <tr>
          <th>CEP:</th>
          <th>Logradouro:</th>
          <th>Número:</th>
          <th>Estado:</th>
          <th>Bairro:</th>
          <th>Cidade:</th>
          <th>Complemento:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{farmacia.cep}</td>
          <td>{farmacia.logradouro}</td>
          <td>{farmacia.número}</td>
          <td>{farmacia.uf}</td>
          <td>{farmacia.bairro}</td>
          <td>{farmacia.localidade}</td>
          <td>{farmacia.complemento}</td>
        </tr>
        </tbody>
        <br /> <hr /> 
      </Table>
   </div>
   ))}
 </Container>
 </>
  );
}
export default ListaFarmacias;