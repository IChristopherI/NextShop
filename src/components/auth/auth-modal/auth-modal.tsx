import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import React from 'react';

interface Props {
  open: boolean;
  className?: string;
  onClose: () => void;
}

const AuthModal: React.FC<Props> = ({ className, open,onClose  }) => {

const handleClose = () => {
  onClose();
}

  return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className='w-[450px]'>
         <Button>sad</Button>
        </DialogContent>
      </Dialog>
  );
};

export default AuthModal;