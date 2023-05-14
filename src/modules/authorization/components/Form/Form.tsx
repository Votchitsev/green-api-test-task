import React, { type ChangeEvent, type FormEvent, useState, useEffect } from 'react';
import style from 'modules/authorization/components/Form/Form.module.scss'
import Button from 'modules/common/components/Button';
import { setAuthData } from 'modules/authorization/state/slice';
import { useAppSelector, useAppDispatch } from 'hooks';
import { formDataInterface } from './interface';

function Form () {
  const dispatch = useAppDispatch();

  const auth = useAppSelector(state => state.auth);

  const [formData, setFormData] = useState<formDataInterface>({
    idInstance: '',
    apiTokenInstance: ''
  });

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      setAuthData(formData),
    );

    setFormData({
      idInstance: '',
      apiTokenInstance: '',
    });
  };
  
  return (
    <form className={style.auth_form} onSubmit={onSubmitHandle}>
      <label>
        <span>idInstance</span>
        <input
          type='text'
          onChange={onChangeHandle}
          name='idInstance'
          value={formData.idInstance}
          required
        />
      </label>
      <label>
        <span>apiTokenInstance</span>
        <input
          type='text'
          onChange={onChangeHandle}
          name='apiTokenInstance'
          value={formData.apiTokenInstance}
          required
        />
      </label>
      <Button
        type='submit'
        name='OK'
        extraStyle={style.btn_style}
      />
    </form>
  );
}

export default Form;
