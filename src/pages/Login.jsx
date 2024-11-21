const clientId = "40a3837a2c484e799084c18cb1cccdd7"; // Insira seu clientId do Spotify
const redirectUri = "http://localhost:5173/home"; // Atualize conforme necessário
const authEndpoint = "https://accounts.spotify.com/authorize";
const scopes = [
    "user-library-read",
    "playlist-read-private",
    "user-read-playback-state",
    "user-read-currently-playing",
    "playlist-modify-private",
];

export default function Login() {
    const handleLogin = () => {
        const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
        window.location.href = authUrl;
    };

    return (
        <>
            <main id="login">
                <div class="container center--column b-blue">
                    <img class="logo" src="./assets/logo.png" alt="" />
                    <div class="container__content center--column">
                        <h3>Login</h3>
                        <form className="center--column container__form" onsubmit="event.preventDefault(); login();">
                            <input className="b-blue" type="email" placeholder="E-mail" id="login-email" />
                            <input class="b-blue" type="password" placeholder="Senha" id="login-password" />
                            <span id="mensagem"></span>
                            <a href="" id="forget-password">Esqueci a senha</a>
                            <button type="submit" id="send">Acessar</button>
                            <strong><a href="./cadastro.html" id="sign-in">Não possuo cadastro</a></strong>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};
