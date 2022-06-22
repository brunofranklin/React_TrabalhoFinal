import './styles.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const user = {
    login: 'email',
    senha: '123'
}

const Login = () => {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (login === user.login && senha === user.senha) {
            localStorage.setItem('email', login);
            localStorage.setItem('senha', senha);
            navigate('/home')
            window.location.reload()
        }
    }

    return (
        <>
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>senha</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-dark" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login