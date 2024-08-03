import { useState } from "react"
import { useForm } from "react-hook-form"

function Form() {

  const { register, watch, handleSubmit, formState } = useForm()

  // console.log(watch('uf'))

  console.log(formState.errors)

  async function addUser(values) {
    try {

      const resposta = await fetch('http://localhost:3000/usuarios', {
        method: 'post',
        body: JSON.stringify(values)
      })

      if (resposta.ok === false) {
        alert("Houve um erro ao cadastrar o usuario")
      } else {
        alert("Cadastrado com sucesso")
      }

    } catch (error) {
      alert("Houve um erro ao cadastrar o usuario - NO CATCH")
    }
  }

  return (
    <div>

      <form onSubmit={handleSubmit(addUser)}>

        <input
          placeholder='Digite o nome da pessoa'
          {
          ...register('nome',
            { required: 'O nom é obrigotório' }
          )
          } />
        {formState.errors?.nome?.message}

        <br />

        <select {...register('uf', { required: 'O estado é obrigatório' })}>
          <option value=""></option>
          <option value="CE">Ceará</option>
          <option value="SC">Santa Catarina</option>
          <option value="PR">Paraná</option>
        </select>
        {formState.errors?.uf?.message}

        <br />

        <textarea placeholder="Digite as observações" {...register('observacao')} />

        <button type="submit">Cadastrar</button>
      </form>

    </div>
  )
}

export default Form
