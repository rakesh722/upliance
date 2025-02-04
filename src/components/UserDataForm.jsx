import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useForm } from 'react-hook-form';

const UserDataForm = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { isDirty } } = useForm();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    window.onbeforeunload = () => {
      if (isDirty) {
        return 'You have unsaved changes! Are you sure you want to leave?';
      }
    };
  }, [isDirty]);

  const onSubmit = (data) => {
    const userId = Math.floor(Math.random() * 100000); // Generate random user ID
    const newUserData = { ...data, id: userId };
    localStorage.setItem('userData', JSON.stringify(newUserData));
    setUserData(newUserData);
    setOpen(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('name')} label="Name" fullWidth margin="normal" required />
      <TextField {...register('address')} label="Address" fullWidth margin="normal" required />
      <TextField {...register('email')} label="Email" type="email" fullWidth margin="normal" required />
      <TextField {...register('phone')} label="Phone" fullWidth margin="normal" required />
      <Button type="submit" variant="contained" sx={{ marginTop: '20px' }}>Submit</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>User Data Saved</DialogTitle>
        <DialogContent>
          <p>Your user data has been saved successfully!</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default UserDataForm;
