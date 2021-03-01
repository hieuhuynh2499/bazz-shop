import React, { useEffect } from 'react';
import { Banner ,
    ColectionHome,
    ColectionText,
    LogoSlider,
    ViewMore,HomeNew,HomeNewContainer,
    TitleHome,HomeProductsTitle,VideoBack,
    Email,BlogHome,BackFooter

} from "./homestyled";
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import {productItem} from "../../components/product/Product";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import h1_img_1 from '../../images/h1-img-1.jpg';
import h1_img_2 from '../../images/h1-img-2.jpg';
import logo_1 from '../../images/logo-1.png';
import logo_2 from '../../images/logo-2.png';
import logo_3 from '../../images/logo-3.png';
import logo_4 from '../../images/logo-4.png';
import logo_5 from '../../images/logo-5.png';
import logo_6 from '../../images/logo-6.png';
import img_1 from '../../images/img-1.jpg';
import img_2 from '../../images/img-2.jpg';
import img_1_text from '../../images/img-1-text.png';
import img_2_text from '../../images/img-2-text.png';
import Product from '../../components/product/Product';

import BlogHomeItem from "../blog/components/BlogHome";
import blog_img_1 from '../../images/blog-img-1.jpg';
import blog_img_2 from '../../images/blog-img-2.jpg';
import blog_img_3 from '../../images/blog-img-3.jpg';

import video_btn from "../../images/video-button.png";
import {HiOutlineMail} from "react-icons/hi";
import { cartRequest } from '../../actions/cart';
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


const listLogo = [logo_1,logo_2,logo_3,logo_4,logo_5,logo_6,logo_2,logo_3];
const listBlog = [
    {
        name:"BEST FASHION INFLUENCERS SUMMER AND WINTER 2018",
        image: blog_img_1,
        text:"June 26, 2018 3 Comments"
    },
    {
        name:"THE IDENTITY PROJECT FOR THE FASHION REVOLUTION FAIR",
        image: blog_img_2,
        text:"June 26, 2018 3 Comments"
    },
    {
        name:"NEW BRANDING SOLUTIONS FOR STREETWEAR BRANDS",
        image: blog_img_3,
        text:"June 26, 2018 3 Comments"
    }
]



const Home:React.FC = () =>{
    const listProducts = useSelector((state:any) => state.addtocart.listProducts);
    const listProducts1 = useSelector((state:any) => state.addtocart);
    console.log(listProducts1);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(cartRequest())
    },[dispatch]);
    return(
        <main >
            <Banner>
                <div>
                    <h4>Pave the way to cool </h4>
                    <h2>The Ultimate Street Style Vibe </h2>
                </div>
            </Banner>
            <ColectionHome>
                <Container>
                    <Grid container spacing={5} justify="center"
                        alignItems="center"> 
                        <Grid item lg={5} md={6}>
                            <img src={h1_img_1} alt="" width="100%"/>
                        </Grid>
                        <Grid item lg={3} md={4}>
                            <img src={h1_img_2} alt="" width="100%" />
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
            <HomeNew>
                <Grid container spacing={1}>
                    <Grid item lg={6}>
                        <HomeNewContainer>
                            <img src={img_1} alt=""  className="img-new-background"/>
                            <div>
                                <img src={img_1_text} alt="" className="img-new-text"/>
                                <button>show now</button>
                            </div>
                        </HomeNewContainer>
                    </Grid>
                    <Grid item  lg={6}>
                    <HomeNewContainer>
                            <img src={img_2} alt="" width="100%" className="img-new-background"/>
                            <div>
                                <img src={img_2_text} alt=""width="100%" className="img-new-text"/>
                                <button style={{background:"#fff",color:"#000"}}>show now</button>
                            </div>
                        </HomeNewContainer>
                    </Grid>
                </Grid>
            </HomeNew>
            <section style={{padding:"50px 0px"}}>
                <Container>
                   <HomeProductsTitle>
                        <TitleHome>
                            Experience the buzz
                        </TitleHome>
                        <h1>THE URBAN FLARE</h1>
                        <h5>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam eget.</h5>
                   </HomeProductsTitle>
                   <Grid container spacing={3}>
                       {
                           listProducts.map((item:productItem,index:number)=>(
                            <Grid item lg={3} key={index}>
                                <Product product={item} />
                            </Grid>
                           ))
                       }
                   </Grid>
                </Container>
            </section>
            <VideoBack>
                    <div>
                        <img src={video_btn} alt=""/>
                    </div>
            </VideoBack>
            <Email>   
                <div className="email">
                    <form action="">
                       <div>
                           <span><HiOutlineMail/></span>
                           <input type="text" placeholder="get newletters"/>
                       </div>
                       <button>subscribe</button>
                    </form>
                </div>
            </Email>
            <BlogHome>
                    <Container>
                        <HomeProductsTitle>
                            <TitleHome>
                                Experience the buzz
                            </TitleHome>
                            <h1>LATEST BLOG POSTS</h1>
                        </HomeProductsTitle>
                        <Grid container spacing={2}>
                           {
                               listBlog.map((blog,index)=>(
                                   <Grid item lg={4} key={index} >
                                       <BlogHomeItem blog={blog}/>
                                   </Grid>
                               ))
                           }
                        </Grid>
                    </Container>
            </BlogHome>
            <section style={{paddingBottom:"100px"}}>
                <Container>
                    <BackFooter></BackFooter>
                </Container>
            </section>
        </main>
    )
}

export default Home;