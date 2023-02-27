import './styled.js'
import favoriteIcon from '../../assets/images/favoritesIcon.png'
import { FavoriteIcon } from './styled.js';

function  HeartIcon() {
    return (
        <FavoriteIcon>
            <div>
                <img className='favoriteIcon' src={favoriteIcon} alt="icon favorite heart"/>
            </div>
        </FavoriteIcon>
    )
}

export default HeartIcon;

