import { ReactComponent as StarImg } from 'core/assets/images/star.svg';
import { Review } from 'core/types/movie';

import './styles.scss';

type Props = {
    review: Review;      
}


const CardReview = ({review}: Props) => {

    return (        
        <div className="review-content">
            <div className="card-review-col">
                <StarImg />
                <h4 className="card-review-name"> {review.user.name} </h4>
            </div>
            <p className="card-review-text"> {review.text}</p>
        </div>
    )
}
export default CardReview;