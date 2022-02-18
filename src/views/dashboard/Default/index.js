import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import { API_KEY } from 'store/constant';
import { getDateTime, unix_timestamp } from './presentData';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [coordinates, setCoordinates] = useState([19.07609, 72.877426]);
    const [fulldata, setFulldata] = useState();
    const [weather, setWeather] = useState('smoke');

    function showPosition(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        setCoordinates([position.coords.latitude, position.coords.longitude]);
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setCoordinates([19.07609, 72.877426]);
                console.log('User denied the request for Geolocation.');
                break;
            case error.POSITION_UNAVAILABLE:
                setCoordinates([19.07609, 72.877426]);
                console.log('Location information is unavailable.');
                break;
            case error.TIMEOUT:
                setCoordinates([19.07609, 72.877426]);
                console.log('The request to get user location timed out.');
                break;
            case error.UNKNOWN_ERROR:
                setCoordinates([19.07609, 72.877426]);
                console.log('An unknown error occurred.');
                break;
            default:
                console.log('Default');
                break;
        }
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }

    function classifyWeather(w) {
        if (w >= 200 && w < 300) {
            setWeather('thunderstorm');
        } else if (w >= 300 && w < 400) {
            setWeather('drizzle');
        } else if (w >= 500 && w < 600) {
            setWeather('rain');
        } else if (w >= 600 && w < 700) {
            setWeather('snow');
        } else if (w >= 700 && w < 800) {
            setWeather('smoke');
        } else if (w === 800) {
            setWeather('clear');
        } else if (w > 800) {
            setWeather('cloudy');
        }
    }

    function fetchWeatherData() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${API_KEY}&units=metric`)
            .then(function (resp) {
                return resp.json();
            }) // Convert data to json
            .then(function (data) {
                console.log(data);
                setFulldata(data);
            })
            .catch(function () {
                // catch any errors
            });
        const weather = fulldata?.weather[0]?.id;
        console.log(weather);
        classifyWeather(weather);
    }

    useEffect(() => {
        setLoading(false);
        getLocation();
        fetchWeatherData();
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <div className={`dashboard_splash ${weather}`}>
                    <div>
                        <h1>{fulldata?.name}</h1>
                        <h4>{getDateTime()}</h4>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard
                            temp={fulldata?.main?.temp}
                            limits={[fulldata?.main?.temp_min, fulldata?.main?.temp_max]}
                            lat={coordinates[0]}
                            lon={coordinates[1]}
                            isLoading={isLoading}
                        />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard humidity={fulldata?.main?.humidity} pressure={fulldata?.main?.pressure} isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard info={fulldata?.weather[0]?.main} icon={fulldata?.weather[0]?.icon} isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard sun={[fulldata?.sys?.sunrise, fulldata?.sys?.sunset]} isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    {/* <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid> */}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
