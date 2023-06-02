import { Form } from "react-router-dom";
import React from 'react';
import url_a from "./url";
import {useEffect} from "react";
import {useState} from "react";
import {
    createBrowserRouter, Link,
    RouterProvider, Routes, Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Content from "./content";


export default function Product(props) {


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };


    const [posts, setPosts] = useState("");
    // const url_tt = "https://dummyjson.com/products/category/womens-shoes"
    // const url_t12 = [url_tt, "https://dummyjson.com/products/category/smartphones"]
    useEffect(() => {
        fetch(url_a[props.props])
            .then((response) => response.json())
            .then((actualData) => setPosts(actualData));
    }, []);
    
    if (posts){
        console.log(JSON.stringify(posts))
        return (
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="Search here"
                        onChange={handleSearch}
                        value={searchTerm} />
                </div>
                <div>
                    {/*{JSON.stringify(posts)}*/}


                    {posts.products.map((product) => <div>
                        {product.title}
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}><img src={product.thumbnail}/></Link>
                        </li>
                    </div>)}
                </div>
            </div>
        );
    }

}
// root.render(
//     <div>
//         <RouterProvider router={router1} />
//     </div>
// )
// const letmebe = Product.props.props;
//
// export class Letmebe extends React.Component {
//     render() {
//         const plw = Product.props.props;
//         return (
//             <div>
//                 <h2>1236</h2>
//             </div>
//         )
//     }
// }