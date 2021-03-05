import React from 'react';
import imgblog from "../../../../images/blog-img-4-107x83.jpg";
import imgblog1 from "../../../../images/blog-img-3-107x83.jpg";
import imgblog2 from "../../../../images/blog-img-5-107x83.jpg";
import blog2 from "../../../../images/banner-300x202.jpg";
import {RecentBlog,RecentBlogSpan1,RecentBlogSpan2,SpanBlog} from './leftblogstyle';
import { UlShop } from '../../../shop/shopsty';


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
    }
]
const LeftBlog:React.FC = () =>{
    return(
        <section>
            <div>
                <h3>RECENT POSTS</h3>
                <RecentBlog>
                    <img src={imgblog} alt=""/>
                    <p>
                        <RecentBlogSpan1>Fashion Week </RecentBlogSpan1>
                        <RecentBlogSpan2>June 25, 2018 </RecentBlogSpan2>
                    </p>
                </RecentBlog>
                <RecentBlog>
                    <img src={imgblog1} alt=""/>
                    <p>
                        <RecentBlogSpan1>Fashion Week </RecentBlogSpan1>
                        <RecentBlogSpan2>June 25, 2018 </RecentBlogSpan2>
                    </p>
                </RecentBlog>
                <RecentBlog>
                    <img src={imgblog2} alt=""/>
                    <p>
                        <RecentBlogSpan1>Fashion Week </RecentBlogSpan1>
                        <RecentBlogSpan2>June 25, 2018 </RecentBlogSpan2>
                    </p>
                </RecentBlog>
            </div>
            <div>
                <h3>CATEGORY</h3>
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
            </div>
            <div>
                <h3>TAG</h3>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    <SpanBlog>
                        Advertising
                    </SpanBlog>
                    <SpanBlog>
                       Branding
                    </SpanBlog>
                    <SpanBlog>
                      Campanign
                    </SpanBlog>
                    <SpanBlog>
                       Design
                    </SpanBlog>
                    <SpanBlog>
                       Digital
                    </SpanBlog>
                    <SpanBlog>
                        Elegaint    
                    </SpanBlog>
                    <SpanBlog>
                        Liftstyle
                    </SpanBlog>
                    </div>
            </div>
            <div style={{margin:"30px 0"}}>
                <img src={blog2} alt="" width="100%"/>
            </div>
        </section>
    )
}

export default LeftBlog;