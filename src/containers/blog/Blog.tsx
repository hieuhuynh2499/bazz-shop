import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { TitleAbout } from '../about/aboutstyle';
import LeftBlog from "./components/leftblog/LeftBlog";

const Blog:React.FC = () =>{
    return(
        <main>
            <TitleAbout style={{margin:"0 0 50px"}}>
            <h1>BLOG LEFT SIDEBAR</h1>
            </TitleAbout>
            <Container>
                <Grid container>
                    <Grid item lg={3}>
                        <LeftBlog/>
                    </Grid>
                    <Grid item lg={9}>
                        
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Blog;