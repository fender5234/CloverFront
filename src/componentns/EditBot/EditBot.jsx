import './EditBot.scss';
import ask from '../../assets/images/ask.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function EditBot() {
  return (
    <form className='edit-form'>
      <h2>Редактирование «Новый Агент»</h2>
      <div className='edit-form-wrapper'>
        <div className='pagination-link-wrapper'>
          <div className='pagination-link-wrapper-inner'>
            <a href='#' className='pagination-link pagination-link--active'>
              Настройка бота
            </a>
            <NavLink to='/assistans/integration' className='pagination-link'>
              Интеграции
            </NavLink>
          </div>
        </div>
        <div className='edit-input-text'>
          <div className='edit-form-input-wrapper'>
            <div className='edit-header'>
              <label className='edit-form-label' htmlFor='name-company'>
                Название ai ассистента
              </label>
              <div className='edit-ask-wrapper'>
                <img className='edit-ask' src={ask} alt='Подсказка' />
                <span className='edit-form-tooltip'>Задайте имя ai ассистента, для представления в чате, чтобы он выглядел как живой сотрудник.</span>
              </div>
            </div>
            <input className='edit-form-input' id='name-company' name='name-company' type='text' />
          </div>
          <div className='edit-form-input-wrapper'>
            <div className='edit-header'>
              <label className='edit-form-label' htmlFor='name-company'>
                Название компании
              </label>
              <div className='edit-ask-wrapper'>
                <img className='edit-ask' src={ask} alt='Подсказка' />
                <span className='edit-form-tooltip'>Название компании, продукта, темы - по которой агент будет консультировать клиентов.</span>
              </div>
            </div>
            <input className='edit-form-input' id='name-company' name='name-company' type='text' />
          </div>
        </div>
        <div className='edit-form-input-wrapper edit-form-input-wrapper--textarea'>
          <div className='edit-header'>
            <label className='edit-form-label' htmlFor='name-company'>
              Инструкция для ai ассистента
            </label>
            <div className='edit-ask-wrapper'>
              <img className='edit-ask' src={ask} alt='Подсказка' />
              <span className='edit-form-tooltip edit-form-tooltip--textarea'>Какая то важная инструкция для ai ассистента!</span>
            </div>
          </div>
          <textarea className='edit-form-input edit-form-input--textarea' id='name-company' name='name-company' type='text'></textarea>
        </div>
        <div className='edit-form-input-wrapper edit-form-input-wrapper--file'>
          <div className='edit-header'>
            <label className='edit-form-label' htmlFor='name-company'>
              Загрузите файл с описанием компании
            </label>
            <div className='edit-ask-wrapper'>
              <img className='edit-ask' src={ask} alt='Подсказка' />
              <span className='edit-form-tooltip edit-form-tooltip--file'>Загрузите файл с описанием в виде текстового файла.</span>
            </div>
          </div>
          <input className='edit-form-input edit-form-input--file' id='name-company' name='name-company' type='file' />
        </div>
        <div className='edit-form-input-wrapper edit-form-input-wrapper--file'>
          <div className='edit-header'>
            <label className='edit-form-label' htmlFor='name-company'>
              Фото ai ассистента
            </label>
            <div className='edit-ask-wrapper'>
              <img className='edit-ask' src={ask} alt='Подсказка' />
              <span className='edit-form-tooltip edit-form-tooltip--file'>Загрузите фото ai ассистента</span>
            </div>
          </div>
          <input className='edit-form-input edit-form-input--file' id='name-company' name='name-company' type='file' />
        </div>
        <button className='edit-button' type='submit'>
          Сохранить
        </button>
      </div>
    </form>
  );
}

export default EditBot;

