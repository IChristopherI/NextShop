import React from 'react';

interface Props {
  className?: string;
}

const NotAuthPage: React.FC<Props> = ({ className }) => {
  return (
    <div className='flex flex-col justify-center items-center mt-40 '>
     <h1>Доступ запрещен</h1>
     <p>Данную страницу можно просмматривать только авторизированным пользователям</p>
    </div>
  );
};

export default NotAuthPage;