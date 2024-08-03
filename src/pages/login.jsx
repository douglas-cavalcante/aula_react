function Login() {

    const handleSubmit = () => {
        localStorage.setItem('autenticado', 'true')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <button type="submit">logar</button>
                </form>
        </div>
    )
}

export default Login