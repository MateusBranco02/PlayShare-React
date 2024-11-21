import groupIcon from '../assets/icon/group.png';
import userIcon from '../assets/icon/user.png';
import heartIcon from '../assets/icon/heart.png';
import playCircleIcon from '../assets/icon/play-circle.png';
import musicDashboard from '../assets/icon/music-dashboard.png';
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="sidebar left__column b-blue">
                <div id="profile-img" className="b-blue"></div>
                <nav className='navbar'>
                    <a href="/home"><img src={groupIcon} alt="" /></a>
                    <a href=""><img src={userIcon} alt="" /></a>
                    <a href="/musicasCurtidas"><img src={heartIcon} alt="" /></a>
                    <a href=""><img src={playCircleIcon} alt="" /></a>
                    <a href=""><img src={musicDashboard} alt="" /></a>
                </nav>
            </div>
        </>
    );
};
