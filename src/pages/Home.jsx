import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Form, Button } from "react-bootstrap";
import NavBarLogin from "../components/NavBarLogin";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Validação do e-mail e senha//
const schema = object({
  email: string().required("Campo Obrigatório."),
  password: string()
    .required("Campo Obrigatório.")
    .min(8, "A senha precisa de 8 ou mais caracteres com números e letras."),
});

function Home() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  function createUser(data) {
    console.log(data);
    navigate("/ListaFarmacias");
  }

  return (
    <>
      <NavBarLogin />
      <h1>Bem vindo(a)!</h1>
      <div className="text">
        <h3>
          O Pharmacy Central System é um sistema online onde <br /> você
          consegue gerenciar farmácias e medicamentos!
        </h3>
      </div>
      <section className="area-login">
        <form className="form-login" onSubmit={handleSubmit(createUser)}>
          <img src="src\assets\icon.png"></img>
          <h2>Acesse sua conta!</h2>
          <Form.Group className="col-8" controlid="Email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <span className="errors">{errors?.email?.message}</span>
          </Form.Group>
          <Form.Group className="col-8" controlid="Senha">
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <span className="errors">{errors?.password?.message}</span>
          </Form.Group>

          <Button Button onClick={() => {
        navigate("/ListaFarmacias");
    }}  type="submit" variant="primary" id="btnLogin">
            Acessar
          </Button>
          <Link to="CadastroConta">Não possui conta? Cadastre aqui!</Link>
          <Link to="RecuperarSenha">Esqueceu sua senha?</Link>
        </form>
      </section>
    </>
  );
}
export default Home;
