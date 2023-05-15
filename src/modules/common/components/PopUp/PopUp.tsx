import React from 'react';
import Button from 'modules/common/components/Button';
import style from 'modules/common/components/PopUp/PopUp.module.scss';
import { useAppDispatch } from 'hooks';
import { skipError } from 'modules/chat/state/slice';

function PopUp ({ message} : { message: string }) {
  const dispatch = useAppDispatch();

  const onCloseHandle = () => {
    dispatch(
      skipError(),
    );
  };

  return (
    <div className={style.popup}>
      <div className={style.popup_content}>
        <h2 className={style.popup_title}>Error</h2>
        <div className={style.popup_message}>{ message }</div>
        <Button type='button' name='OK' onClick={onCloseHandle} />
      </div>
    </div>
  );
}

export default PopUp;
