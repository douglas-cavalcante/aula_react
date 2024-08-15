import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom'

function Form() {

  const params = useParams()


  const { register, watch, handleSubmit, formState, setValue } = useForm()


  async function addUser(values) {
    try {
    
      if (params.id) {

         const resposta =  await fetch(`http://localhost:3000/usuarios/${params.id}`, {
            method: 'put',
            body: JSON.stringify(values)
          })

          if (resposta.ok === false) {
            alert("Houve um erro ao atualizar o usuario")
          } else {
            alert("Atualizado com sucesso")
          }


      } else {

        const resposta = await fetch('http://localhost:3000/usuarios', {
          method: 'post',
          body: JSON.stringify(values)
        })

        if (resposta.ok === false) {
          alert("Houve um erro ao cadastrar o usuario")
        } else {
          alert("Cadastrado com sucesso")
        }

      }


    } catch (error) {
      alert("Houve um erro ao cadastrar o usuario - NO CATCH")
    }
  }


  useEffect(() => {
    if (params.id) {
      fetch(`http://localhost:3000/usuarios/${params.id}`)
        .then(async (response) => {
          const dadosUsuario = await response.json()
          setValue("nome", dadosUsuario.nome)
          setValue("uf", dadosUsuario.uf)
          setValue("observacao", dadosUsuario.observacao)
        })
    }
  }, [])

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
