"use client"
import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Dialog open={open} onClose={onClose}>
     
      <DialogContent>
     {children}
      </DialogContent>
   
        <Button onClick={onClose} color="primary" className='z-100 rounded text-black absolute top-0 right-0 text-2xl'>
         X
        </Button>
        {/* Add more buttons as needed */}
      
    </Dialog>
  );
};

export default Modal;
