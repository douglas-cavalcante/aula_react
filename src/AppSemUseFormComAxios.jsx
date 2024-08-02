import { useState } from "react";
import axios from "axios";

function App() {
  const [formValues, setFormValues] = useState({
    nome: '',
    uf: '',
    observacao: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    uf: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {
      nome: formValues.nome ? '' : 'O nome é obrigatório',
      uf: formValues.uf ? '' : 'O estado é obrigatório'
    };

    setErrors(newErrors);

    if (newErrors.nome || newErrors.uf) {
      return;
    }

    try {
      const resposta = await axios.post('http://localhost:3000/usuarios', formValues);

      alert("Cadastrado com sucesso");
      
      setFormValues({
        nome: '',
        uf: '',
        observacao: ''
      });

    } catch (error) {
      alert("Houve um erro ao cadastrar o usuário - NO CATCH");
      console.error(error); // Imprime o erro para depuração
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='nome'
          value={formValues.nome}
          placeholder='Digite o nome da pessoa'
          onChange={handleChange}
        />
        {errors.nome && <p>{errors.nome}</p>}

        <br />

        <select
          name='uf'
          value={formValues.uf}
          onChange={handleChange}
        >
          <option value="">Selecione um estado</option>
          <option value="CE">Ceará</option>
          <option value="SC">Santa Catarina</option>
          <option value="PR">Paraná</option>
        </select>
        {errors.uf && <p>{errors.uf}</p>}

        <br />

        <textarea
          name='observacao'
          value={formValues.observacao}
          placeholder="Digite as observações"
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
