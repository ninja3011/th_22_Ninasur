// material-ui
import { Typography, List, ListItem } from '@mui/material';
import { Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import {disasters} from "./data.js";

<<<<<<< HEAD
import { useNavigate } from 'react-router';

// ==============================|| SAMPLE PAGE ||============================== //


const SamplePage = () => {

    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const [id, setId] = useState(urlParams.get('id'));
    const [disaster, setDisaster] = useState(disasters[0]);
    
    useEffect(() => {
        setId(urlParams.get('id'));
        console.log(id);
        setDisaster(disasters[id-1]);
        console.log(disaster);
    }, []);

    // window.location.reload() 
=======

// ==============================|| SAMPLE PAGE ||============================== //


const SamplePage = ({id}) => {
    const disaster = disasters[id-1];
>>>>>>> 140ad1918561ba41073f94ecf9c789f2a60594b6
    
    return(
        <div style={{display:"flex", flexDirection: "column", rowGap:"1.5rem" }}>
        <MainCard title = {disaster.name}>
            <Typography variant="h5">
                <p>
                    {disaster.description}
                </p>
            </Typography>
<<<<<<< HEAD
            
=======
>>>>>>> 140ad1918561ba41073f94ecf9c789f2a60594b6
        </MainCard>
        {/* <div>
            <img src={disaster.url}></img>
        </div> */}
        {/* <MainCard title={"Precautionary measures to be taken before " + disaster.name}>
            <Typography variant="body2">
                <List>
                    <ListItem><span>{disaster.pre[0]}</span></ListItem>
                    <ListItem><span>{disaster.pre[1]}</span></ListItem>
                    <ListItem><span>{disaster.pre[2]}</span></ListItem>
                    <ListItem><span>{disaster.pre[3]}</span></ListItem>
                    <ListItem><span>{disaster.pre[4]}</span></ListItem>
                    <ListItem><span>{disaster.pre[5]}</span></ListItem>
                    <ListItem><span>{disaster.pre[6]}</span></ListItem>
                    <ListItem><span>{disaster.pre[7]}</span></ListItem>
                </List>
            </Typography>
        </MainCard> */}
        <Grid container spacing={2}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <MainCard title={"Precautionary measures to be taken before " + disaster.name}>
                    <Typography variant="body2">
                    <List>
                        <ListItem><span>{disaster.pre[0]}</span></ListItem>
                        <ListItem><span>{disaster.pre[1]}</span></ListItem>
                        <ListItem><span>{disaster.pre[2]}</span></ListItem>
                        <ListItem><span>{disaster.pre[3]}</span></ListItem>
                        <ListItem><span>{disaster.pre[4]}</span></ListItem>
                        <ListItem><span>{disaster.pre[5]}</span></ListItem>
                        <ListItem><span>{disaster.pre[6]}</span></ListItem>
                        <ListItem><span>{disaster.pre[7]}</span></ListItem>
                    </List>
                    </Typography>
                </MainCard>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <div style={{backgroundImage:`url(${disaster.url})`, height:"100%", backgroundSize:"cover", borderRadius:"15px" }}>
                    { /* <img src={disaster.url}></img> */ }
                </div>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <MainCard title="DOs" style={{height: "55vh"}}>
                    <Typography variant="body2">
                        <List>
                            <ListItem><span>{disaster.DOs[0]}</span></ListItem>
                            <ListItem><span>{disaster.DOs[1]}</span></ListItem>
                            <ListItem><span>{disaster.DOs[2]}</span></ListItem>
                            <ListItem><span>{disaster.DOs[3]}</span></ListItem>
                            <ListItem><span>{disaster.DOs[4]}</span></ListItem>
                        </List>
                    </Typography>
                </MainCard>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <MainCard title="DON'Ts" style={{height: "55vh"}}>
                    <Typography variant="body2">
                        <List>
                            <ListItem><span>{disaster.DONTs[0]}</span></ListItem>
                            <ListItem><span>{disaster.DONTs[1]}</span></ListItem>
                            <ListItem><span>{disaster.DONTs[2]}</span></ListItem>
                            <ListItem><span>{disaster.DONTs[3]}</span></ListItem>
                            <ListItem><span>{disaster.DONTs[4]}</span></ListItem>
                        </List>
                    </Typography>
                </MainCard>
            </Grid>
        </Grid>
        {id==4 ?
        null: 
        <MainCard title={"What to do after " + disaster.name}>
            <Typography variant="body2">
                <List>
                    <ListItem><span>{disaster.post[0]}</span></ListItem>
                    <ListItem><span>{disaster.post[1]}</span></ListItem>
                    <ListItem><span>{disaster.post[2]}</span></ListItem>
                    <ListItem><span>{disaster.post[3]}</span></ListItem>
                    <ListItem><span>{disaster.post[4]}</span></ListItem>
                    <ListItem><span>{disaster.post[5]}</span></ListItem>
                    <ListItem><span>{disaster.post[6]}</span></ListItem>
                </List>
            </Typography>
        </MainCard>}
    </div>
    )
    
    
};

export default SamplePage;
