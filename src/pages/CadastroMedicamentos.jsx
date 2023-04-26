import { Form, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import { useAppContext } from "../contexts/useAppContext";

function CadastroMedicamentos() {
  const { handleAdicionarMedicamento } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    handleAdicionarMedicamento(data);
  }

  return (
    <div>
      <NavBar />
      <section className="form-med">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastro Medicamentos</h2>
          <div className="seção1">
            <Form.Group className="mdc" controlId="Medicamento">
              <Form.Label>Medicamento:</Form.Label>
              <Form.Control
                type="text"
                placeholder="medicamento"
                {...register("medicamento", { required: true })}
              />
              {errors.medicamento && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="lab" controlId="Laboratório">
              <Form.Label>Laboratório:</Form.Label>
              <Form.Control
                type="text"
                placeholder="laboratório"
                {...register("laboratório", { required: true })}
              />
              {errors.laboratório && <span>Campo Obrigatório</span>}
            </Form.Group>
          </div>

          <div className="seção2">
            <Form.Group className="dos" controlId="Dosagem">
              <Form.Label>Dosagem:</Form.Label>
              <Form.Control
                type="text"
                placeholder="dosagem"
                {...register("dosagem", { required: true })}
              />
              {errors.dosagem && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="tipo" controlId="Tipo">
              <Form.Label>Tipo:</Form.Label>
              <Form.Select
                type="text"
                placeholder="Tipo"
                {...register("tipo", { required: true })}
              >
                <option>Selecione</option>
                <option>Medicamento controlado</option>
                <option>Medicamento comum</option>{" "}
              </Form.Select>
              {errors.dosagem && <span>Campo Obrigatório</span>}
            </Form.Group>

            <Form.Group className="preço" controlId="Preço">
              <Form.Label>Preço Unitário:</Form.Label>
              <Form.Control
                input
                type="text"
                placeholder="R$0,00"
                {...register("preço", { required: true })}
              />
              {errors.preço && <span>Campo Obrigatório</span>}
            </Form.Group>
          </div>

          <hr />

          <Form.Group className="desc" controlId="Descrição">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("descrição")} />
          </Form.Group>

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

export default CadastroMedicamentos;
