
import './styles.scss';
import { useForm } from "react-hook-form";
import { makePrivateRequest } from 'core/utils/request';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';

type FormData = {
    text: string;
    movieId: string;
}

type ParamsType = {
    movieId: string;
}
const FormReview = () => {
    const { movieId } = useParams<ParamsType>();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const history = useHistory();

    const onSubmit = (data: FormData) => {
        const movId = movieId;
        const resu = { ...data, movieId: movId}        
        
        makePrivateRequest({url: '/reviews', method: 'POST', data: resu})
        .then(()=>{
            toast.info('Avaliação inserida com sucesso');           
        })
        .finally(()=>{
            history.go(0);
        })
        .catch(()=>{
            toast.error('Erro ao salvar avaliação!');
        })
        
    }

    return (
        <div className="form-detail-container">
            <div className="form-detail-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        className="form-control"
                        {...register("text", { required: "Campo obrigatório" })}
                        placeholder="Digite aqui a sua avaliação..."
                    />
                    {errors.text && (
                        <div className="invalid-feedback d-block">
                            {errors.text.message}
                        </div>
                    )}
                    <div>
                        <button className="btn btn-primary btn-layout">
                            <h5>Salvar avaliação</h5>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormReview;