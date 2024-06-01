import { CustomInputProps } from '@/interfaces/CustomInputProps';
import React from 'react';

function CustomInput(Props: CustomInputProps) {
  return (
    <div className={'custom-input relative ' + Props.class}>
      <input
        type={Props.type}
        className="border-purple-black-2 dark:border-b-white text-black dark:text-white "
        required
      ></input>
      <label
        htmlFor={Props.for}
        className={'text-black dark:text-white text-md ' + Props.classLabel}
      >
        {Props.text}
      </label>
    </div>
  );
}

export default CustomInput;
