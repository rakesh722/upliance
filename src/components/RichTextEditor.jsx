import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleSave = () => {
    localStorage.setItem('editorContent', editorContent);
    alert('Content Saved!');
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <ReactQuill value={editorContent} onChange={setEditorContent} />
      <Button onClick={handleSave} variant="contained" sx={{ marginTop: '20px' }}>
        Save Content
      </Button>
    </Box>
  );
};

export default RichTextEditor;
