import React from 'react';
import style from 'modules/chat/components/ChatList/AddNumberForm/AddNumberForm.module.scss';
import Button from 'modules/common/components/Button';

function AddNumberForm () {
  return (
    <form className={style.add_number_form}>
      <input type='text' placeholder='Enter form number'></input>
      <Button
        type='submit'
        name='add' 
      />
    </form>
  );
}

export default AddNumberForm;
