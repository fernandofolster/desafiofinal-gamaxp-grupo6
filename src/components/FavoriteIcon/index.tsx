import '../../components/FavoriteIcon/styles.css'
import favoriteIcon from '../../assets/images/favoritesIcon.png'

function  HeartIcon() {
    return (
        <div>
            <img className='favoriteIcon' src={favoriteIcon} alt="icon favorite heart"/>
        </div>
    )
}

export default HeartIcon;

