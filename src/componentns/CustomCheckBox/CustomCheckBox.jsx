import './CustomCheckBox.scss';

function CustomCheckBox({ text }) {
  return (
    <label className='check-label'>
      <input className='checkbox' type='checkbox' />
      <span className='custom-checkbox'></span>
      {text}
    </label>
  );
}

export default CustomCheckBox;

