import './index.css'
import * as ReactDOM from 'react-dom/client';
import React from "react";
import {useState} from 'react';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);


class Task2 extends React.Component{
    render()
    {
        return (
            <table>
                <tr>
                    <th>First name</th>
                    <th>John</th>
                </tr>
                <tr>
                    <td>Last name</td>
                    <td>Silver</td>
                </tr>
                <tr>
                    <td>Occupation</td>
                    <td>Pirate Captain</td>
                </tr>
            </table>
        );
    }
}

class Task4 extends React.Component{
    render()
    {
        return (
            <div className="rows">
                <div className="row">
                    <img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" />
                    <div>Портативна рація</div>
                    <div>24 000$</div>
                </div>
                <div className="row1">
                    <img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" />
                    <div>Пор123тивна рація</div>
                    <div>24 000$</div>
                </div>
                <div className="row2">
                    <img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" />
                    <div>Пор123тивна рація</div>
                    <div>24 000$</div>
                </div>
                <div className="row3">
                    <img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" />
                    <div>Пор123тивна рація</div>
                    <div>24 000$</div>
                </div>
                <div className="row4">
                    <img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" />
                    <div>Пор123тивна рація</div>
                    <div>24 000$</div>
                </div>
            </div>
            // <table>
            //     <tr>
            //         <th><img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" /></th>
            //         <th><img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" /></th>
            //         <th><img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" /></th>
            //         <th><img style={{ width: 200, height: 200 }} src="https://reactjs.org/logo-og.png" alt="React Image" /></th>
            //     </tr>
            //     <tr>
            //         <td>Портативна рація</td>
            //         <td>Портативна рація</td>
            //         <td>Портативна рація</td>
            //         <td>Портативна рація</td>
            //     </tr>
            //     <tr>
            //         <td>24 000$</td>
            //         <td>24 000$</td>
            //         <td>24 000$</td>
            //         <td>24 000$</td>
            //     </tr>
            // </table>
        );
    }
}


const product1 = {name: "Mouse"}

function Product12(props) {
    return (
        <div>
            I'm a {props.product.name}
        </div>
    )
}


const cities = [
    {id: 1, name: "Chicago"},
    {id: 2, name: "Los Angeles"},
    {id: 3, name: "New York"},
];

class City extends React.Component {
    render() {
        return <option>{this.props.city.name}</option>
    }
}

class List extends React.Component {
    render() {
        return (
            <select name="" id="cities">
                {cities.map((city) => <City key={city.id} city={city}></City>)}
            </select>
        )
    }
}

function Product(props) {
    const {textColor, text} = props
    const [color] = useState('red')

    const style = {
        backgroundColor: color,
        color: textColor
    }
    return (<div style ={style}>I'm a {color} and content {text}</div>);
}

function App() {
    return (
        <div className={"App"}>
            <header className={"App-header"}>
                <Product textColor="yellow" text="sadasdasd"></Product>
            </header>
        </div>
    )
}

root.render(<div>
    <Task2/>
    <Product12 product={product1}/>
    <List data={cities}/>
    <App/>
    <Task4/>
</div>)
