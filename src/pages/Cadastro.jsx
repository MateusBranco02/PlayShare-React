import { useState } from 'react';
import imgCadastroIcon from '../assets/img-cadastro.png';
import '../styles/Cadastro.css';

export default function Cadastro() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const addUser = (e) => {
        e.preventDefault();
        const { name, email, confirmEmail, password, confirmPassword } = formData;

        if (email !== confirmEmail) {
            setError("Os emails são diferentes");
            return;
        }
        if (password !== confirmPassword) {
            setError("As senhas são diferentes");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        if (usuarios.find((user) => user.email === email)) {
            setError("Usuário já cadastrado");
            return;
        }

        const novoUsuario = {
            id: Date.now(),
            nome: name,
            email,
            senha: btoa(password),
            playlists: [],
        };
        localStorage.setItem("usuarios", JSON.stringify([...usuarios, novoUsuario]));
        setError("Usuário cadastrado com sucesso");

        setTimeout(() => (window.location.href = "/login"), 3000);
    };

    return (
        <main id="sign-in-page">
            <div className="container center__between">
                <div className="container__content left__column">
                    <img className="logo" src="./assets/logo.png" alt="" />
                    <div className="container__description">
                        <h3>Efetuar Cadastro</h3>
                        <p>Digite seus dados para se cadastrar na plataforma</p>
                    </div>
                    <form className="left__column container__form" onSubmit={addUser}>
                        <input
                            className="b-blue"
                            type="text"
                            placeholder="Nome completo"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="b-blue"
                            type="email"
                            placeholder="E-mail"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="b-blue"
                            type="email"
                            placeholder="Confirmar e-mail"
                            id="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                            required
                        />
                        <div className="inline-center">
                            <input
                                className="b-blue"
                                type="password"
                                placeholder="Senha"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <input
                                className="b-blue"
                                type="password"
                                placeholder="Confirmar senha"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <span id="error">{error}</span>
                        <div className="inline__end">
                            <button
                                id="back"
                                type="button"
                                onClick={() => (window.location.href = "/")}
                            >
                                Voltar
                            </button>
                            <button id="send" type="submit">
                                Acessar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="inline-end">
                    <img className="image" src={imgCadastroIcon} alt="" />
                </div>
            </div>
        </main>
    );
};
