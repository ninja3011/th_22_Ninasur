import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import BayesClassifier from 'bayes-classifier';


import { addDoc, collection } from 'firebase/firestore/lite';

import { db } from 'utils/firebase-config';

import { earthquakeDocuments, landslideDocuments, floodDocuments, droughtDocuments, hurricaneDocuments } from 'ML/bayes';

const CreatePost = () => {
    var classifier = new BayesClassifier();
    classifier.addDocuments(floodDocuments, `Flood`);
    classifier.addDocuments(earthquakeDocuments, `Earthquake`);
    classifier.addDocuments(hurricaneDocuments, `Hurricane`);
    classifier.addDocuments(droughtDocuments, `Drought`);
    classifier.addDocuments(landslideDocuments, `Landslide`);
    classifier.train();
    
    function disasterClassification(str) {
        console.log("inside classi")
        return classifier.classify(str);
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false)

    const submitPost = async () => {
        setLoading(true)
        console.log(disasterClassification(description))
        await addDoc(collection(db, "Posts"), {
            title: title,
            description: description,
            category: disasterClassification(description)
          }).finally(() => {
              setLoading(false)
              setTitle('')
              setDescription('')
          });
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
                    <LoadingButton loading={loading} onClick={submitPost} variant="contained" color="secondary" fullWidth>
                        Submit Post
                    </LoadingButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default CreatePost;
