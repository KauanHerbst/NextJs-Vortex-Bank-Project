import { CardProps } from '@/interfaces/Card';
import React from 'react';

function Card(Props: CardProps) {
  return (
    <div
      className={
        'bg-white border-l-8 border-purple-black-2 dark:border-blue-primary rounded-xl shadow-xl ' +
        Props.class
      }
    >
      {Props.children}
    </div>
  );
}

export default Card;
