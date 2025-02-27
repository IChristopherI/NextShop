
import React, { useState } from 'react';
import LoginForm from './validation/login-form';
import { DialogTitle } from '@radix-ui/react-dialog';
import RegisterForm from './validation/register-form';
import { Dialog, DialogContent } from '../../ui/dialog';
import { Button } from '../../ui/button';

interface Props {
  open: boolean;
  className?: string;
  onClose: () => void;
}

const AuthModal: React.FC<Props> = ({open, onClose }) => {

  const [type, setType] = useState<'login' | 'register'>('login');

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login')
  }

  const handleClose = () => {
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        {type === 'login' ? (<LoginForm />) : (<RegisterForm />)}


        <div className='flex items-center justify-center gap-3'>
          {type === 'login' ? 'Нету аккаунта?' : 'Уже есть аккаунт?'}
          <Button onClick={onSwitchType}>{type === 'login' ? 'Регистрация' : 'Войти'}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;