
import ButtonIcon from '../../../../components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';
import { useForm } from "react-hook-form";
import { makeLogin } from 'core/utils/request';
import { useState } from 'react';
import { saveSessionData } from 'core/utils/auth';
import { useHistory, useLocation } from 'react-router';

type FormData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();
    let location = useLocation<LocationState>();

    const { from } = location.state || { from: {pathname: "/movies"}}
    
    const onSubmit = (data: FormData) => {
        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data);
                history.replace(from);
            })
            .catch(() => {
                setHasError(true);
            })
    }

    return (
        <AuthCard title="login">
            {hasError && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha inválidos!
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-bottom-30">
                    <input
                        type="email"
                        className={`form-control input-base ${errors.username ? 'is-invalid' : '' }`}
                        placeholder="Email"
                        {...register("username", 
                            { pattern: { 
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                                    message: "Email Inválido"
                                }, 
                                required: "Campo obrigatório" 
                            }
                        )}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div className="margin-bottom-30">
                    <input
                        type="password"
                        className={`form-control input-base ${errors.password ? 'is-invalid' : '' }`}
                        placeholder="Senha"
                        {...register("password", { required: "Campo obrigatório" })}

                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <div className="login-submit">
                    <ButtonIcon text="logar" />
                </div>
            </form>
        </AuthCard>
    )
}

export default Login;