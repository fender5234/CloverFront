import { NavLink } from 'react-router-dom';

import './Integration.scss';

import gear from '../../assets/images/gear.svg';
import integrationImageCheck from '../../assets/images/integration.png';
import jivo from '../../assets/images/jivo.png';
import tg from '../../assets/images/tg.png';

import CustomCheckBox from '../CustomCheckBox/CustomCheckBox';

function Integration() {
  return (
    <div className='integration'>
      <h1 className='integration-header'>Редактировать «Новый Ассистент»</h1>
      <CustomCheckBox text={'Показать подключенные'} />
      <ul className='integration-list'>
        <li>
          <img className='integraion-image' src={jivo} alt='Логотип подключенного инструмента' />
          <div className='integration-content-wrapper'>
            <div className='integration-text-wrapper'>
              <h2 className='integration-title'>Jivosite</h2>
              <p className='integration-status  integration-status--active'>
                <img className='integration-image-check' src={integrationImageCheck} alt='Иконка интерграция подключенна' />
                Подключенно
              </p>
            </div>
            <NavLink to='/assistans/edit-chanel' className='integation-link'>
              <img className='integration-link-image' src={gear} alt='Иконка настройки' />
              Изменить настройки
            </NavLink>
          </div>
        </li>
        <li>
          <img className='integraion-image' src={tg} alt='Логотип подключенного инструмента' />
          <div className='integration-content-wrapper'>
            <div className='integration-text-wrapper'>
              <h2 className='integration-title'>Telegram</h2>
              <p className='integration-status'>
                <img className='integration-image-check' src={integrationImageCheck} alt='Иконка интерграция подключенна' />
                Подключенно
              </p>
            </div>
            <NavLink to='/assistans/edit-chanel' className='integation-link'>
              <img className='integration-link-image' src={gear} alt='Иконка настройки' />
              Подключить
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Integration;

