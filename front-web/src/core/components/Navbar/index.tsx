import './styles.scss';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <Link to="/" className="nav-logo-text">
                    <h4> MovieFlix </h4>       
                </Link>
            </div>            
        </nav>
    );
};
export default Navbar;