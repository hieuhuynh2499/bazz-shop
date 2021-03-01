import React from "react";
import {BlogItem} from "./bloghomestyle";
interface productItem {
    name:string,
    image:any,
    text:string
}

interface productInterface {
    blog:productItem
}
const BlogHomeItem:React.FC<productInterface> = ({blog={}}) => {
    const {name,image,text} = blog;
    return(
        <BlogItem>
            <div className="blog-img">
                <img src={image} alt="" />
            </div>
            <div className="blog-content">
                <div className="blog-content-title">
                    <h3>{name}</h3>
                </div>
                <div className="blog-content-time">
                    {text}
                </div>
            </div>
        </BlogItem>
    )
}

export default BlogHomeItem;