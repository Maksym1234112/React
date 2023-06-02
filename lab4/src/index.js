import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import {
    createBrowserRouter, Link,
    RouterProvider,
} from "react-router-dom";
import Product from "./routes/product";
import taskStyles from "./task.module.css"
import Content from "./routes/content";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Task/>,
    },
    {
        path: "products/:productId",
        element: <Product props={1}/>,
    },
    {
        path: "product/:productId",
        element: <Product props={0}/>
    },
    {
        path: "product1/:productId",
        element: <Product props={1}/>
    },
    {
        path: "product2/:productId",
        element: <Product props={2}/>
    },
    {
        path: "product3/:productId",
        element: <Product props={3}/>
    },    {
        path: "product4/:productId",
        element: <Product props={4}/>
    },
    {
        path: "product5/:productId",
        element: <Product props={5}/>
    },
    {
        path: "product6/:productId",
        element: <Product props={6}/>
    },
    {
        path: "product7/:productId",
        element: <Product props={7}/>
    },
    {
        path: "product8/:productId",
        element: <Product props={8}/>
    },
    {
        path: "product9/:productId",
        element: <Product props={9}/>
    },
    {
        path: "product10/:productId",
        element: <Product props={10}/>
    },
    {
        path: "product11/:productId",
        element: <Product props={11}/>
    },
    {
        path: "product12/:productId",
        element: <Product props={12}/>
    },
    {
        path: "product13/:productId",
        element: <Product props={13}/>
    },
    {
        path: "product14/:productId",
        element: <Product props={14}/>
    },
    {
        path: "product15/:productId",
        element: <Product props={15}/>
    },
    {
        path: "product16/:productId",
        element: <Product props={16}/>
    },
    {
        path: "product17/:productId",
        element: <Product props={17}/>
    },
    {
        path: "product18/:productId",
        element: <Product props={18}/>
    },
    {
        path: "product19/:productId",
        element: <Product props={19}/>
    },
    {
        path: "/product/:id",
        element: <Content/>
    }
    // {
    //     path: "/products",
    //     element: <Content/>
    // }
]);


fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(console.log);


function Task() {
    const [posts, setPosts] = useState([]);


    const url = "https://dummyjson.com/products/categories"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    });

    return (
        <div>
            <div className={taskStyles.box}>
                <ul>
                    {posts.map(post => <li>
                        <Link to={`/products/2`}>{post}</Link>
                    </li>)}
                </ul>
            </div>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product/1`}>{posts[0]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product1/2`}>{posts[1]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product2/3`}>{posts[2]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product3/4`}>{posts[3]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product4/5`}>{posts[4]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product5/6`}>{posts[5]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product6/7`}>{posts[6]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product7/8`}>{posts[7]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product8/9`}>{posts[8]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product9/10`}>{posts[9]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product10/11`}>{posts[10]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product11/12`}>{posts[11]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product12/13`}>{posts[12]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product13/14`}>{posts[13]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product14/15`}>{posts[14]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product15/16`}>{posts[15]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product16/17`}>{posts[16]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product17/18`}>{posts[17]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product18/19`}>{posts[18]}</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to={`/product19/20`}>{posts[19]}</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}

            {/*<button onClick={raiseInvoiceClicked}>{posts[1]}</button>*/}
        </div>
    )

}

root.render(
    <div>
        <RouterProvider router={router} />
    </div>
)
