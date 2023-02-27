import './styled.js'
import shareIcon from '../../assets/images/share-Icon.png'
import { ShareArea } from './styled';

function  ShareIcon() {
    return (
        <ShareArea>
            <div>
                <img className='shareIcon' src={shareIcon} alt="share Icon"/> 
            </div>
        </ShareArea>
    )
}
       

export default ShareIcon;



