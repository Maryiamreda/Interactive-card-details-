import './Front.scss';
import cardLogo from '../../../images/card-logo.svg';
const Front = () => {
    return (
        <div className="front">
            <img src={cardLogo} width="60px" />
        </div>
    );
}

export default Front;