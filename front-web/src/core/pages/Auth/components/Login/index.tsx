import { Link } from 'react-router-dom';
import ButtonIcon from '../../../../components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';

const Login = () => {
    return (
        <AuthCard title="login">
            <form className="login-form">
                <input
                    type="email"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="form-control input-base"
                    placeholder="Senha"
                />
                <div className="login-submit">

                <Link to="/catalog">
                    <ButtonIcon text="logar"/>
                </Link>
                </div>
            </form>
        </AuthCard>
    )
}

export default Login;