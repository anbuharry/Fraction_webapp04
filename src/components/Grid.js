import React from "react";
import {Grid} from '@material-ui/core'

function App() {
    return (
        <Grid lg={12}item Container spacing={2}>
            <Grid item lg={3} sm={6} xs={12} > <h1 style={{backgroundColor:"yellow"}} >Video 1 </h1></Grid> 
            <Grid item lg={3} sm={6} xs={12} > <h1 style={{backgroundColor:"yellow"}} >Video 2 </h1></Grid> 
            <Grid item lg={3} sm={6} xs={12} > <h1 style={{backgroundColor:"yellow"}} >Video 3 </h1></Grid> 
            <Grid item lg={3} sm={6} xs={12} > <h1 style={{backgroundColor:"yellow"}} >Video 4 </h1></Grid> 
            <Grid item lg={3} sm={6} xs={12} > <h1 style={{backgroundColor:"yellow"}} >Video 5 </h1></Grid> 
            
        </Grid>
    );
}
export default App;
