import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import { FixedSizeList as List } from 'react-window';
// import {useEffect, useState} from "react";
// import useFetch from "react-fetch-hook"

const info = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    }
]



function Thef() {
    const [posts, setPosts] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/photos"


    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    return Error("Oh no");
                }
                return res.json();
            })
            .then(data => setPosts(data));
    });

    // const words = text.split(' ');
    //
    // let wordCount = 0;
    // words.forEach((word) => {
    //     if (word.trim() !== '') {
    //         wordCount++;
    //     }
    // });

    function Row({ index, style }) {

        const words = posts[index].title.split(' ');

        let wordCount = 0;
        words.forEach((word) => {
            if (word.trim() !== '') {
                wordCount++;
            }
        });
        if (wordCount < 7) return (
            <div className={index % 2} style={style}>
                {posts[index].title}  ,
                {<a href={posts[index].url} target="_blank">{posts[index].thumbnailUrl}</a>}
            </div>
        )

    }

    // const Row = ({ index, style }) => (
    //     <div className={index % 2} style={style}>
    //         {posts[index].title}
    //         {<a href={posts[index].url} target="_blank">{posts[index].thumbnailUrl}</a>}
    //     </div>
    // );

    const Example = () => (

        <List
            className="List"
            height={350}
            itemCount={posts.length}
            itemSize={35}
            width={600}
        >
            {Row}
        </List>
    );
    return (
        <div className="App">
            <h1>Posts</h1>
            <h2>...are here</h2>
            <List
                className="List"
                height={350}
                itemCount={posts.length}
                itemSize={35}
                width={600}
            >
                {Row}
            </List>
        </div>
    );
    // return (
    //     <ul>
    //         {info.map(inf => <li>name={inf.title}; url={<a href={inf.url} target="_blank">{inf.thumbnailUrl}</a>}; key={inf.id}</li>)}
    //     </ul>
    // )
}

// const {data} = useFetch("https://jsonplaceholder.typicode.com/photos");
// console.log(data[1])


function Task() {
    return (
        info[1].title
    )

}

function Task1() {
    return (
        <a href={info[1].url} target="_blank">{info[1].thumbnailUrl}</a>
        // <img src={info[1].thumbnailUrl}/>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <div>
            <Task/>
        </div>
        <div>
            <Task1/>
        </div>
        <div>
            <Thef/>
        </div>
    </div>

);
