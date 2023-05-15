import React, { type ChangeEvent, useState, FormEvent } from 'react';
import style from 'modules/chat/components/ChatList/AddNumberForm/AddNumberForm.module.scss';
import Button from 'modules/common/components/Button';
import { useAppDispatch } from 'hooks';
import { createChat } from 'modules/chat/state/slice';


function AddNumberForm () {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState('');

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      createChat(formData),
    );

    setFormData('');
  } 

  return (
    <form className={style.add_number_form} onSubmit={onSubmitHandle}>
      <input
        type='text'
        placeholder='Enter phone number'
        onChange={onChangeHandle}
        value={formData}
        required
      />
      <Button
        type='submit'
        name='add' 
      />
    </form>
  );
}

export default AddNumberForm;
