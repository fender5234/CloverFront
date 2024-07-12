import './UserButton.scss';
import user from '../../assets/images/user.jpg';


function UserButton() {
    return (
        <button className='user-button'>
            <img src={user} alt='Иконка пользователь' />
        </button>
    )
}

export default UserButton;

