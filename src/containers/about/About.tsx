import { Container, Grid } from "@material-ui/core";
import React from "react";
import BlogHomeItem from "../blog/components/BlogHome";
import {TitleAbout} from "./aboutstyle";
import about_img_1 from '../../images/about-img-1.jpg';
import about_img_2 from '../../images/about-img-2.jpg';
import about_img_3 from '../../images/about-img-3.jpg';
import about_img_4 from '../../images/about-img-4.jpg';
import about_img_5 from '../../images/about-img-5.jpg';
import logo_1 from '../../images/logo-1.png';
import logo_2 from '../../images/logo-2.png';
import logo_3 from '../../images/logo-3.png';
import logo_4 from '../../images/logo-4.png';
import logo_5 from '../../images/logo-5.png';
import logo_6 from '../../images/logo-6.png';
import video_btn from "../../images/video-button.png";
import { ColectionHome, ColectionText, LogoSlider, TitleHome, VideoBack, ViewMore } from "../home/homestyled";


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
const listBlog = [
    {
        name:"URBAN STYLE",
        image: about_img_1,
        text:"Lorem ipsum dolor sit amet Lorem Ipsum. Proin qual drese suis erestopius liqueenean sollicituin dis."
    },
    {
        name:"THE ROAD TO SUCCESSES",
        image: about_img_2,
        text:"Lorem ipsum dolor sit amet Lorem Ipsum. Proin qual drese suis erestopius liqueenean sollicituin dis."
    },
    {
        name:"YOUNGSTERS FASHION",
        image: about_img_3,
        text:"Lorem ipsum dolor sit amet Lorem Ipsum. Proin qual drese suis erestopius liqueenean sollicituin dis."
    }
]
const listLogo = [logo_1,logo_2,logo_3,logo_4,logo_5,logo_6,logo_2,logo_3];
const About:React.FC = () =>{
    return(
        <main>
           <TitleAbout>
               <div>
                   <h1>About</h1>
               </div>
           </TitleAbout>
            <section style={{margin:"70px 0"}}>
                <Container>
                    <Grid container spacing={3}>
                            {
                               listBlog.map((blog,index)=>(
                                   <Grid item lg={4} md={6} sm={6} xs={12} key={index} >
                                       <BlogHomeItem blog={blog}/>
                                   </Grid>
                               ))
                           }
                    </Grid>
                </Container>
            </section>
            <section>
                <LogoSlider {...settings}>
                    
                    {
                        listLogo.map((item,index)=> (<div>
                            <div key={index}>
                                <img src={item} alt="logo" className="img-logo-1"/>
                            </div>
                        </div>))
                    }
                </LogoSlider>
            </section>
            <VideoBack>
                    <div>
                        <img src={video_btn} alt=""/>
                    </div>
            </VideoBack>
            <ColectionHome>
                <Container>
                    <Grid container spacing={5} justify="center"
                        alignItems="center"> 
                        <Grid item lg={5} md={6}>
                            <img src={about_img_4} alt="" width="100%"/>
                        </Grid>
                        <Grid item lg={3} md={4}>
                            <img src={about_img_5} alt="" width="100%" />
                        </Grid>
                        <Grid item lg={4} md={4}>
                            <ColectionText>
                                <TitleHome> New Arrivals</TitleHome>
                                <h3>NEW COLLECTION</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipis cing elit. 
                                    Aenean commodo ligula eget dolor amet.</p>
                                <ViewMore to=''>view more</ViewMore>
                            </ColectionText>
                        </Grid>
                    </Grid>
                    </Container>
            </ColectionHome>
        </main>
    )


}
export default About;