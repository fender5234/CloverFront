import './EditBot.scss';
import ask from '../../assets/images/ask.svg'
import { useState } from 'react';

function EditBot() {
    return (
        <div>
            <form className="edit-form">
                <h2>
                    Редактировать агента
                </h2>
                <div className="edit-form-wrapper">
                    <div className="edit-form-input-wrapper">
                        <div className="edit-ask-wrapper">
                            <img className='edit-ask' src={ask} alt="Подсказка" />
                            <span className='edit-form-tooltip'>Название компании, продукта, темы - по которой агент будет консультировать клиентов.</span>
                        </div>
                        <label className="edit-form-label" htmlFor="name-company">Название компании</label>
                        <input className="edit-form-input" id="name-company" name="name-company" type="text" />
                    </div>
                    <div className="edit-form-input-wrapper">
                        <div className="edit-ask-wrapper">
                            <img className='edit-ask' src={ask} alt="Подсказка" />
                            <span className='edit-form-tooltip'>Задайте имя агента, для представления в чате, чтобы он выглядел как живой сотрудник.</span>
                        </div>
                        <label className="edit-form-label" htmlFor="name-company">Название компании</label>
                        <input className="edit-form-input" id="name-company" name="name-company" type="text" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditBot