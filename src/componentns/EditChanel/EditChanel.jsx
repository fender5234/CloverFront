import CustomCheckBox from '../CustomCheckBox/CustomCheckBox';
import ask from '../../assets/images/ask.svg';
import { NavLink } from 'react-router-dom';

function EditChanel() {
  return (
    <div className='integration'>
      <h1 className='integration-header'>Редактировать «Telegram»</h1>
      <div className='pagination-link-wrapper'>
        <div className='pagination-link-wrapper-inner'>
          <NavLink to='/assistans/edit-chanel' className='pagination-link pagination-link--active'>
            Подключение
          </NavLink>
          <NavLink to='#' className='pagination-link'>
            Инструкция
          </NavLink>
        </div>
      </div>
      <CustomCheckBox text={'Включен'} />
      <form>
        <div className='edit-form-wrapper'>
          <div className='edit-input-text'>
            <div className='edit-form-input-wrapper'>
              <div className='edit-header'>
                <label className='edit-form-label' htmlFor='name-company'>
                  Токен бота Telegram
                </label>
                <div className='edit-ask-wrapper'>
                  <img className='edit-ask' src={ask} alt='Подсказка' />
                  <span className='edit-form-tooltip'>Введите токен бота</span>
                </div>
              </div>
              <input className='edit-form-input' id='name-company' name='name-company' type='text' />
            </div>
          </div>
          <button className='edit-button' type='submit'>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditChanel;

