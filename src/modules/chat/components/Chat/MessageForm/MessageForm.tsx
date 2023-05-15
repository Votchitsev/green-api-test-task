import React, { type FormEvent, useState, ChangeEvent } from 'react';
import style from 'modules/chat/components/Chat/MessageForm/MessageForm.module.scss';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchSendMessage } from 'modules/chat/state/slice';

function MessageForm() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);
  const chat = useAppSelector(state => state.chat);

  const [formData, setFormData] = useState('');

  const sendMessageHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reqData = {
      idInstance: auth.idInstance,
      apiTokenInstance: auth.ApiTokenInstance,
      destNumber: chat.activeChat,
      message: formData
    }

    dispatch(
      fetchSendMessage(reqData),
    );

    setFormData('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  }

  return (
    <form className={style.message_form} onSubmit={sendMessageHandle}>
      <input
        type="text"
        onChange={onChange}
        value={formData}
        placeholder='Enter message'
      />
    </form>
  )
}

export default MessageForm;
