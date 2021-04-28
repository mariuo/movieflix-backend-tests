import './styles.scss';
import {Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccessTokenDecoded, isAuthenticated, logout } from 'core/utils/auth';

const Navbar = () =>{
    
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        if(isAuthenticated()) {
            const currentUserData = getAccessTokenDecoded();
            setCurrentUser(currentUserData.user_name);
        }
        else {
            setCurrentUser('');
        }
   },[location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();        
    }

    return (
        <nav className="row bg-primary main-nav">
            <div className="">
                <Link to="/" className="nav-logo-text">
                    <h4> MovieFlix </h4>       
                </Link>
            </div>
            <div className="text-right">            
            {currentUser && (
                <>                      
                    {currentUser}
                    <a 
                    href="#logout" 
                    className="nav-link active d-inline"
                    onClick={(e) => {
                        
                        handleLogout(e);
                    }}
                    >
                        <button className="btn btn-primary nav-btn-logout"> Sair</button> 
                    </a>
                 </>
                )}
            {!currentUser && (<> <div> </div> </>)}
            </div>            
        </nav>
    );
};
export default Navbar;