import React, { useEffect, useState } from 'react';
import { collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from 'utils/firebase-config';
import { Grid } from '@mui/material';

const AllPosts = () => {
    const [array, setArray] = useState();

    useEffect(() => {
        async function fetch() {
            const querySnapshot = await getDocs(collection(db, 'Posts'));
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setDoc(doc.data)
            });
        }
        fetch();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Posts</h1>
            <Grid container>
                {

                }
            </Grid>
        </div>
    );
};

export default AllPosts;
