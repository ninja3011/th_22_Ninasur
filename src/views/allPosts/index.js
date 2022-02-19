import React, { useEffect, useState } from 'react';
import { collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from 'utils/firebase-config';
import { Grid } from '@mui/material';
import { posts } from './posts';
import { Chip } from '@mui/material';
import BayesClassifier from 'bayes-classifier';
import { useTheme } from '@mui/material/styles';

import { earthquakeDocuments, landslideDocuments, floodDocuments, droughtDocuments, hurricaneDocuments } from 'ML/bayes';


const AllPosts = () => {
    const [array, setArray] = useState();
    const theme = useTheme()

    var classifier = new BayesClassifier();
    classifier.addDocuments(floodDocuments, `Flood`);
    classifier.addDocuments(earthquakeDocuments, `Earthquake`);
    classifier.addDocuments(hurricaneDocuments, `Hurricane`);
    classifier.addDocuments(droughtDocuments, `Drought`);
    classifier.addDocuments(landslideDocuments, `Landslide`);
    classifier.train();

    function disasterClassification(str) {
        return classifier.classify(str);
    }

    useEffect(() => {
        async function fetch() {
            const querySnapshot = await getDocs(collection(db, 'Posts'));
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setDoc(doc.data);
            });
        }
        fetch();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Posts</h1>
            <Grid container>
                {posts.map((post, id) => {
                    return (
                        <Grid item xs={12} sm={4} key={id}>
                            <div className="post">
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                                <Chip
                                    size="small"
                                    label={disasterClassification(post.description)}
                                    sx={{
                                        color: theme.palette.background.default,
                                        bgcolor: theme.palette.secondary.dark
                                    }}
                                />
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default AllPosts;
