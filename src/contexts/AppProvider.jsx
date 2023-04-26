import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    const medicamentosDoStorage = localStorage.getItem("Lista Medicamentos");
    if (medicamentosDoStorage) {
      setMedicamentos(JSON.parse(medicamentosDoStorage));
    }
  }, []);

  useEffect(() => {
    const farmaciasDoStorage = localStorage.getItem("ListaFarm");
    if (farmaciasDoStorage) {
      setFarmacias(JSON.parse(farmaciasDoStorage));
    }
  }, []);

  function handleAdicionarMedicamento(medicamento) {
    localStorage.setItem(
      "Lista Medicamentos",
      JSON.stringify([...medicamentos, medicamento])
    );
    setMedicamentos([...medicamentos, medicamento]);
  }

  function limparStorageMedicamentos() {
    setMedicamentos([]);
  }

  function handleAdicionarFarmacia(farmacia) {
    localStorage.setItem("ListaFarm", JSON.stringify([...farmacias, farmacia]));
    setFarmacias([...farmacias, farmacia]);
  }

  function limparStorageFarmacias() {
    setFarmacias([]);
  }

  return (
    <AppContext.Provider
      value={{
        medicamentos,
        farmacias,
        handleAdicionarMedicamento,
        handleAdicionarFarmacia,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
