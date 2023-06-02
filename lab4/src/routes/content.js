import {Form, Link, useParams} from "react-router-dom";
import React from 'react';
import {useEffect} from "react";
import {useState} from "react";
import Product from "./product";
import url_a from "./url";


const Content = () => {
    const { id } = useParams();
    // const [posts, setPosts] = useState("");
    // useEffect(() => {
    //     fetch(url_a[2])
    //         .then((response) => response.json())
    //         .then((actualData) => setPosts(actualData));
    // }, []);
    return (
        <div>
            <h2>Product ID: {id}</h2>
        </div>
    );
    // if (posts){
    //     console.log({id});
    //     return (
    //         <div>
    //             {posts.products[1].title}
    //             <h2>{id}</h2>
    //             <div>
    //                 <img src={posts.products[1].thumbnail}/>
    //             </div>
    //             {/*{posts.products.map(dat => <div>*/}
    //             {/*    {dat.title}*/}
    //             {/*    <div>*/}
    //             {/*        <img src={dat.thumbnail}/>*/}
    //             {/*    </div>*/}
    //             {/*</div>)}*/}
    //         </div>
    //     )
    // }
};

export default Content;