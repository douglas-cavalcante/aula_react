import { Outlet, Navigate } from 'react-router-dom'


export function TemplatePrivado() {

    const estaAutenticado = localStorage.getItem("autenticado")

    return estaAutenticado === "true" ? (
        <div>
            <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
                <div className="container max-auto">
                    <a className="navbar-brand" href="#">LAB365 - DASHBOARD</a>
                    <div>
                        <span className='text-secondary'> </span>
                        <button className='btn btn-dark' >
                          sair
                        </button>
                    </div>
                </div>
            </nav>

            <main className='container mx-auto'>
                <Outlet />
            </main>
        </div>
    ) : <Navigate to="/" />
}