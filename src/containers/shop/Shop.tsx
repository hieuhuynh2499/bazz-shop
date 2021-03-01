import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Product from '../../components/product/Product';
import {H2Shop,UlShop,TitleShop} from './shopsty';
import img_shop from '../../images/shop-img-1.jpg';
import img_shop_1 from '../../images/shop-img-2.jpg';
import img_shop_2 from '../../images/shop-img-3.jpg';
import img_shop_3 from '../../images/shop-img-4.jpg';
import img_shop_4 from '../../images/shop-img-5.jpg';
import img_shop_5 from '../../images/shop-img-6.jpg';
import img_shop_6 from '../../images/shop-img-7.jpg';
import img_shop_7 from '../../images/shop-img-8.jpg';
import bannerImg from '../../images/banner-img-1.jpg';


const listProducts = [
    {
        name:"DENIM",
        price:90,
        image:img_shop
    },
    {
        name:"BRAVE",
        price:190,
        image:img_shop_1
    },
    {
        name:"STARS",
        price:34,
        image:img_shop_2
    },
    {
        name:"SILK",
        price:74,
        image:img_shop_3
    },
    {
        name:"GAME",
        price:42,
        image:img_shop_4
    },
    {
        name:"GAME",
        price:97,
        image:img_shop_5
    },
    {
        name:"MAX",
        price:56,
        image:img_shop_6
    },
    {
        name:"VEST",
        price:89,
        image:img_shop_7
    },
    {
        name:"VEST",
        price:89,
        image:img_shop_7
    },
]

const listUl = [
    {
        name:"Accessories",
        number : 14
    },
    {
        name:"Basics",
        number : 15
    },
    {
        name:"Black",
        number : 19
    },
    {
        name:"Casual",
        number : 34
    },{
        name:"Clothes",
        number : 61
    }
    ,{
        name:"Design",
        number : 26
    },
    {
        name:"Electronics",
        number : 87
    },{
        name:"Equipment",
        number : 47
    }
    ,{
        name:"Fall",
        number : 81
    },{
        name:"Fashion",
        number : 76
    }
]
const Shop:React.FC = () =>{
    return(
        <main>
            <TitleShop>
                <Container>
                    <h5>Home  /  Product List  /  Left Sidebar</h5>
                    <h3>LEFT SIDEBAR</h3>
                </Container>
            </TitleShop>
            <section>
                <Container>
                    <Grid container spacing={3} >
                        <Grid item lg={3}>
                            <H2Shop>category</H2Shop>
                            <UlShop>
                                {
                                    listUl.map((item,index)=>(
                                        <li key={index}>
                                            <span>{item.name}</span>
                                            <span>({item.number})</span>
                                        </li>
                                    ))
                                }
                            </UlShop>
                            <img style={{marginTop:"30px"}} src={bannerImg} width="100%" alt=""/>
                        </Grid>
                        <Grid item lg={9}>
                            <Grid container spacing={2}>
                            {
                                listProducts.map((item,index) =>(
                                    <Grid item lg={4} key={index}>
                                        <Product product={item} />
                                    </Grid>
                                ))
                            }
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </main>
    )
}

export default Shop;