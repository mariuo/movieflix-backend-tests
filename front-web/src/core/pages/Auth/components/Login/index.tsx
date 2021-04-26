
import ButtonIcon from '../../../../components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';
import { useForm } from "react-hook-form";
import { makeLogin } from 'core/utils/request';
import { useState } from 'react';
import { saveSessionData } from 'core/utils/auth';
import { useHistory } from 'react-router';

type FormData ={
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();
    const onSubmit = (data: FormData) =>{
        makeLogin(data)
        .then(response => {
            setHasError(false);
            saveSessionData(response.data);
            history.push('/catalog')
        })
        .catch(()=>{
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
                <input
                    type="email"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Email"                    
                    {...register("username", {required:true})}

                />
                <input
                    type="password"
                    className="form-control input-base"
                    placeholder="Senha"                    
                    {...register("password", {required:true})}
                    
                />
                <div className="login-submit">                 
                    <ButtonIcon text="logar"/>                
                </div>
            </form>
        </AuthCard>
    )
}

export default Login;