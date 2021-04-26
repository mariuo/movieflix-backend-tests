import './styles.scss';
import { ReactComponent as HomeImage } from '../../assets/images/home.svg';
import Login from '../Auth/components/Login';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-info">
                <h1 className="home-info-title">Avalie Filmes</h1>
                <p className="home-info-subtitle">Diga o que você achou do seu filme favorito!</p>
                <HomeImage />
            </div>

            <div className="home-content">
                <Login />
            </div>            
        </div>
    )
}

export default Home;