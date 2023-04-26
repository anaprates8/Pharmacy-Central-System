import { Form, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import { useAppContext } from "../contexts/useAppContext";
import Footer from "../components/Footer";

//validação
function CadastroFarmacia() {
  const { handleAdicionarFarmacia } = useAppContext();

  const {
    register,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function createFarm(data) {
    handleAdicionarFarmacia(data);
  }

  //API CEP
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("logradouro", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("localidade", data.localidade);
        setValue("uf", data.uf);
        setFocus("número");
      });
  };

  return (
    <div>
      <NavBar />
      <section className="area-form">
        <form onSubmit={handleSubmit(createFarm)}>
          <h2>Cadastro Farmácia</h2>
          <div className="form1">
            <Form.Group className="razao" controlId="Razão Social">
              <Form.Label>Razão Social:</Form.Label>
              <Form.Control
                type="text"
                placeholder="razão social"
                {...register("razãosocial", { required: true })}
              />
              {errors.razãosocial && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="cnpj" controlId="cnpj">
              <Form.Label>CNPJ:</Form.Label>
              <Form.Control
                type="text"
                placeholder="000.000/0000-00"
                {...register("cnpj", { required: true })}
              />
              {errors.cnpj && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="notaf" controlId="Nota Fiscal">
              <Form.Label>Nome Fantasia:</Form.Label>
              <Form.Control
                type="text"
                placeholder="nome fantasia"
                {...register("nomefantasia", { required: true })}
              />
              {errors.nomefantasia && <span>Campo Obrigatório</span>}
            </Form.Group>
          </div>

          <div className="form2">
            <Form.Group className="email-f" controlId="email-farm">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@email.com"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="tel" controlId="Telefone">
              <Form.Label>Telefone:</Form.Label>
              <Form.Control
                input
                type="text"
                placeholder="(00) 0000-0000"
                {...register("telefone")}
              />
            </Form.Group>

            <Form.Group className="cel" controlId="Celular">
              <Form.Label>Celular:</Form.Label>
              <Form.Control
                input
                type="text"
                placeholder="(00) 00000-0000"
                {...register("celular", { required: true })}
              />
              {errors.celular && <span>Campo Obrigatório</span>}
            </Form.Group>
          </div>

          <hr />

          <div className="form3">
            <Form.Group className="cep" controlId="Cep">
              <Form.Label>Cep:</Form.Label>
              <Form.Control
                input
                type="number"
                placeholder="00000-000"
                {...register("cep", { required: true })}
                onBlur={checkCEP}
              />
              {errors.cep && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="log" controlId="Logradouro">
              <Form.Label>Logradouro:</Form.Label>
              <Form.Control
                input
                type="text"
                placeholder="rua"
                {...register("logradouro", { required: true })}
              />
              {errors.logradouro && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="col2" controlId="número">
              <Form.Label>Número:</Form.Label>
              <Form.Control
                input
                type="number"
                placeholder="nº"
                {...register("número", { required: true })}
              />
              {errors.número && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="col3" controlId="Estado">
              <Form.Label>Estado:</Form.Label>
              <Form.Control
                input
                type="text"
                placeholder="Estado"
                {...register("uf", { required: true })}
              />
              {errors.estado && <span>Campo Obrigatório</span>}
            </Form.Group>
          </div>

          <div className="form4">
            <Form.Group className="bairro" controlId="Bairro">
              <Form.Label>Bairro:</Form.Label>
              <Form.Control
                input
                type="text"
                placeholder="bairro"
                {...register("bairro", { required: true })}
              />
              {errors.bairro && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="cidade" controlId="Cidade">
              <Form.Label>Cidade:</Form.Label>
              <Form.Control
                input
                type="text"
                placeholder="cidade"
                {...register("localidade", { required: true })}
              />
              {errors.localidade && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="comp" controlId="Complemento">
              <Form.Label>Complemento:</Form.Label>
              <Form.Control
                input
                type="text"
                placeholder="complemento"
                {...register("complemento")}
              />
            </Form.Group>
          </div>

          <div className="btn-farm">
            <Button
              type="submit"
              onClick={() => alert("Cadastro efetuado com sucesso!")}
              variant="primary"
              Id="btn-salvar"
            >
              Salvar
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CadastroFarmacia;
