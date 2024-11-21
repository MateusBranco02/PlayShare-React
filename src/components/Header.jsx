import settingIcon from '../assets/icon/setting-2.png';
import notificationIcon from '../assets/icon/notification.png';
import '../styles/Header.css';

export default function Header() {
    return (
        <>
            <div className='container'>
                <header className="header b-blue center__between">
                    <div className="header__content">
                        <input type="text" className="b-blue" placeholder="Pesquisar" />
                    </div>
                    <div className="header__nav inline-center">
                        <img src={settingIcon} alt="" />
                        <img src={notificationIcon} alt="" />
                    </div>
                </header>
            </div>

        </>
    );
}
