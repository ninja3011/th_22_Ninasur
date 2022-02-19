import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

import { db } from 'utils/firebase-config';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    

    const submitPost = async () => {

    };

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={3}></Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <h2>Create Post for forum</h2>
                    <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <br />
                    <TextField
                        label="Description"
                        multiline
                        rows={10}
                        fullWidth
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <br />
                    <Button onClick={submitPost} variant="contained" color="secondary" fullWidth>
                        Submit Post
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default CreatePost;
