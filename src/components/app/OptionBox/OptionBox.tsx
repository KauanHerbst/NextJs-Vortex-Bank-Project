import { OptionBoxProps } from '@/interfaces/OptionBoxProps';
import Link from 'next/link';
import React from 'react';

function OptionBox(Props: OptionBoxProps) {
  const Svg = Props.svg;
  return (
    <Link
      href={Props.url}
      className={
        'flex justify-center items-center ml-2 max-lg:ml-0 hover:bg-blue-primary duration-300 rounded-[16px] ' +
        Props.class
      }
      id={Props.id}
    >
      {Svg}
      {Props.text ? <h2 className="ml-2 text-center">{Props.text}</h2> : <></>}
    </Link>
  );
}

export default OptionBox;
