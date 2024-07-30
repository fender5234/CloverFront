import './Bots.scss';
import ai from '../../assets/images/ai.svg';
import { NavLink } from 'react-router-dom';
import getAll from '../../API/agentsGetAll';

function Bots() {
  return (
    <div className='bot'>
      <div className='bot-wrapper'>
        <div className='bot-wrapper-image'>
          <img className='bot-image' src={ai} alt='Картинка бота агента' />
        </div>
        <div className='bot-wrapper-inner'>
          <h2 className='bot-header'>Название бота</h2>
          <p className='bot-description'>Описание че он там и где делаeт.</p>
          <NavLink to='edit-bot' className='bot-link'>
            Редактировать
          </NavLink>
        </div>
      </div>
      <div className='bot-wrapper'>
        <div className='bot-wrapper-image'>
          <img className='bot-image' src={ai} alt='Картинка бота агента' />
        </div>
        <div className='bot-wrapper-inner'>
          <h2 className='bot-header'>Название бота</h2>
          <p className='bot-description'>Описание че он там и где делаeт.</p>
          <NavLink to='edit-bot' className='bot-link'>
            Редактировать
          </NavLink>
        </div>
      </div>
      <div className='bot-wrapper'>
        <div className='bot-wrapper-image'>
          <img className='bot-image' src={ai} alt='Картинка бота агента' />
        </div>
        <div className='bot-wrapper-inner'>
          <h2 className='bot-header'>Название бота</h2>
          <p className='bot-description'>Описание че он там и где делаeт.</p>
          <NavLink to='edit-bot' className='bot-link'>
            Редактировать
          </NavLink>
        </div>
      </div>
      <div className='bot-wrapper'>
        <div className='bot-wrapper-image'>
          <img className='bot-image' src={ai} alt='Картинка бота агента' />
        </div>
        <div className='bot-wrapper-inner'>
          <h2 className='bot-header'>Название бота</h2>
          <p className='bot-description'>Описание че он там и где делаeт.</p>
          <NavLink to='edit-bot' className='bot-link'>
            Редактировать
          </NavLink>
        </div>
      </div>
      <div className='bot-wrapper'>
        <div className='bot-wrapper-image'>
          <img className='bot-image' src={ai} alt='Картинка бота агента' />
        </div>
        <div className='bot-wrapper-inner'>
          <h2 className='bot-header'>Название бота</h2>
          <p className='bot-description'>Описание че он там и где делаeт.</p>
          <NavLink to='edit-bot' className='bot-link'>
            Редактировать
          </NavLink>
        </div>
      </div>
      <div className='bot-wrapper'>
        <div className='bot-wrapper-image'>
          <img className='bot-image' src={ai} alt='Картинка бота агента' />
        </div>
        <div className='bot-wrapper-inner'>
          <h2 className='bot-header'>Название бота</h2>
          <p className='bot-description'>Описание че он там и где делаeт.</p>
          <NavLink to='edit-bot' className='bot-link'>
            Редактировать
          </NavLink>
        </div>
      </div>
      <div className='bot-wrapper'>
        <div className='bot-wrapper-image'>
          <img className='bot-image' src={ai} alt='Картинка бота агента' />
        </div>
        <div className='bot-wrapper-inner'>
          <h2 className='bot-header'>Название бота</h2>
          <p className='bot-description'>Описание че он там и где делаeт.</p>
          <NavLink to='edit-bot' className='bot-link'>
            Редактировать
          </NavLink>
        </div>
      </div>
      <div className='bot-wrapper'>
        <div className='bot-wrapper-image'>
          <img className='bot-image' src={ai} alt='Картинка бота агента' />
        </div>
        <div className='bot-wrapper-inner'>
          <h2 className='bot-header'>Название бота</h2>
          <p className='bot-description'>Описание че он там и где делаeт.</p>
          <NavLink to='edit-bot' className='bot-link'>
            Редактировать
          </NavLink>
        </div>
      </div>
      <button onClick={() => {
        getAll();
      }}></button>
    </div>
  );
}

export default Bots;

