import React from 'react';
import style from 'modules/authorization/components/Form/Form.module.scss'
import Button from 'modules/common/components/Button';

function Form () {
  return (
    <form className={style.auth_form}>
      <label>
        <span>idInstance</span>
        <input type='text' required></input>
      </label>
      <label>
        <span>apiTokenInstance</span>
        <input type='text' required></input>
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
