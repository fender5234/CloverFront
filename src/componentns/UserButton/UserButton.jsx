import './UserButton.scss';
import user from '../../assets/images/user.jpg';
import authMe from '../../API/authMe';
import logout from '../../API/logut';

function UserButton() {
  return (
    <div className='menu-button-wrapper'>
      <button
        type='button'
        className='user-button'
        onClick={() => {
          authMe();
        }}>
        <img src={user} alt='Иконка пользователь' />
      </button>
      <button
        type='button'
        onClick={() => {
          logout();
        }}>Выйти!</button>
    </div>
  );
}

export default UserButton;

