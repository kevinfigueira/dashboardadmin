import './Navbar.css'
import avatar from '../../../assets/avatar.jpg'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <div className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <i className="fa-solid fa-clock"></i>
                </a>

                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </div>
    )
}

export default Navbar