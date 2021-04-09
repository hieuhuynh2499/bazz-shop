import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { TitleAbout } from '../about/aboutstyle';
import LeftBlog from "./components/leftblog/LeftBlog";
import blog_1 from "../../images/blog-img-7.jpg";
import blog_2 from "../../images/blog-img-8.jpg";
import blog_3 from "../../images/blog-img-9.jpg";
import { ViewMore } from '../home/homestyled';
const Blog:React.FC = () =>{
    return(
        <main>
            <TitleAbout style={{margin:"0 0 50px"}}>
            <h1 style={{textAlign:"center"}}>BLOG LEFT SIDEBAR</h1>
            </TitleAbout>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={3}>
                        <LeftBlog/>
                    </Grid>
                    <Grid item lg={9}>
                        <div style={{marginBottom:"30px"}}>
                            <img src={blog_1} alt="" width="100%"/>
                            <span>June 26, 2018 / Design</span>
                            <h2>BE ON THE WINNING SIDE OF ANY DISC</h2>
                            <p>Lorem ipsum dolor sit amet, ex novum erant epicuri pro, cum ne graeco convenire. Modo legimus moderatius eam ut, in agam idque latine cum. Graeco omnium laboramus ut sit. An qui putent viderer conceptam. Nam veri primis nominati an. Detracto cotidieque deterruisset ex nec, has ea essent detraxit consetetur. </p>
                            <ViewMore to=''>view more</ViewMore>
                        </div>
                        <div style={{marginBottom:"30px"}}>
                            <img src={blog_2} alt="" width="100%"/>
                            <span>June 26, 2018 / Design</span>
                            <h2>BE ON THE WINNING SIDE OF ANY DISC</h2>
                            <p>Lorem ipsum dolor sit amet, ex novum erant epicuri pro, cum ne graeco convenire. Modo legimus moderatius eam ut, in agam idque latine cum. Graeco omnium laboramus ut sit. An qui putent viderer conceptam. Nam veri primis nominati an. Detracto cotidieque deterruisset ex nec, has ea essent detraxit consetetur. </p>
                            <ViewMore to=''>view more</ViewMore>
                        </div>
                        <div style={{marginBottom:"30px"}}>
                            <img src={blog_3} alt="" width="100%"/>
                            <span>June 26, 2018 / Design</span>
                            <h2>BE ON THE WINNING SIDE OF ANY DISC</h2>
                            <p>Lorem ipsum dolor sit amet, ex novum erant epicuri pro, cum ne graeco convenire. Modo legimus moderatius eam ut, in agam idque latine cum. Graeco omnium laboramus ut sit. An qui putent viderer conceptam. Nam veri primis nominati an. Detracto cotidieque deterruisset ex nec, has ea essent detraxit consetetur. </p>
                            <ViewMore to=''>view more</ViewMore>
                        </div>
                        
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Blog;