import { Container, Grid } from '@material-ui/core';
import React from 'react';
// import Product from '../../components/product/Product';
import {H2Shop,UlShop,TitleShop} from './shopsty';
import bannerImg from '../../images/banner-img-1.jpg';



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
                           
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </main>
    )
}

export default Shop;