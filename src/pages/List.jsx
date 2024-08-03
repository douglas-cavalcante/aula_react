import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"



function List() {

    const navigate = useNavigate()
    const [lista, setLista] = useState([])

    console.log(lista)

    async function carregarDados() {
        const resposta = await fetch('http://localhost:3000/usuarios')
        setLista(await resposta.json())
    }


    useEffect(() => {
        carregarDados()
    }, [])


    return (
        <div>

            <button onClick={() => navigate('/')}>Cadastrar</button>

            <Link to="/"> <button>Cadastrar</button></Link>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>nome</td>
                        <td>uf</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.uf}</td>
                                <td>
                                    <button>Editar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </div>
    )
}

export default List