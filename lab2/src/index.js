import * as ReactDOM from 'react-dom/client';
import { useState } from 'react'
import { Component } from 'react'
import React from "react";
const root = ReactDOM.createRoot(
    document.getElementById('root')
);


function Task1({num}){
    const counters = [
        {id: 1, initial: 6, min: -5, max: 10},
        {id: 2, initial: 5},
        {id: 3},
    ];

    counters[1].max = 10
    counters[1].min = -10
    counters[2].initial = 0
    counters[2].max = 10
    counters[2].min = -10
    const [count, setCount] = useState(counters[num].initial)
    const maxGuests = counters[num].max
    const minGuests = counters[num].min

    const resetCount = () => {
        setCount(counters[num].initial)
    }

    const decrementCount = () => {
        if (count > minGuests) setCount(count - 1)
    }

    const incrementCount = () => {
        if (count < maxGuests) setCount(count + 1)
        else if (count > maxGuests) setCount(maxGuests)
    }


    return (
        <table>
            <tr>Поточний рахунок: {count}<button type="button" onClick={incrementCount}>+</button>
                <button type="button" onClick={decrementCount}>-</button><button type="button" onClick={resetCount}>Reset</button></tr>
            {/*<tr>Поточний рахунок: {count}<button type="button" onClick={incrementCount}>+</button>*/}
            {/*    <button type="button" onClick={decrementCount}>-</button><button type="button" onClick={resetCount}>Reset</button></tr>*/}
            {/*<tr>Поточний рахунок: {count}<button type="button" onClick={incrementCount}>+</button>*/}
            {/*    <button type="button" onClick={decrementCount}>-</button><button type="button" onClick={resetCount}>Reset</button></tr>*/}
        </table>
    )
}


function Product(props) {
    return (
        <div>
            I'm a {props.product.name}
        </div>
    )
}

// counter={counters[0]}

function Task2({carrt}) {

    const products = [
        {name: "Constructor LEGO", price: 300, quantity: 1},
        {name: "Train station", price: 200, quantity: 1},
        {name: "Hot Wheels Track", price: 150, quantity: 1},
    ];

    const [count, setCount] = useState(products[carrt].quantity)

    const total1 = products[carrt].price * products[carrt].quantity
    const [total2, setTotal] = useState(total1)
    const decrementCount = () => {
        if (count > 0) setCount(count - 1)
        setTotal(total2 - products[carrt].price)
    }

    const incrementCount = () => {
        setCount(count + 1)
        setTotal(total2 + products[carrt].price)
    }

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>{products[carrt].name}</td>
                <td>{products[carrt].price}</td>
                <td><button type="button" onClick={incrementCount}>+</button>{count}<button type="button" onClick={decrementCount}>-</button></td>
                <td>{total2}</td>
            </tr>
        </table>
    )

}

function Task3() {

    const [ran, setRan] = useState(0);
    const [guess, setGuess] = useState("");
    const [msg, setMsg] = useState("");
    const [count, setCount] = useState(0);
    const [res, setRes] = useState("");

    const [disable1, setDisable1] = useState(false);
    const [disable2, setDisable2] = useState(false);


    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(Math.floor(Math.random() * (1000 - 1 + 1)));

    const checkGuess = () => {
        setMsg(getMessage(guess, ran));
        setCount((count) => count + 1);
        if (count > 9) {
            start()
            setRes("Lose!")
            setDisable2(true)
            setDisable1(false)
        }
    };

    const start = () => {
        setDisable1(true);
        setDisable2(false);
        setRan(randomNumberInRange(1, 1000));
        setCount(0);
        setMsg("");
    };

    function getMessage(guess, rnd) {
        const guessNo = Number(guess);
        if (guessNo < rnd) return "N >" + guess;
        if (guessNo > rnd) return "N <" + guess;
        if (guessNo === rnd) {
            setRes("Win!");
            setDisable1(false)
            setDisable2(true)
        }
    }


    return(
        <div>
            <div>
                <h2>Press new game to start</h2>
                <button type="button" onClick={start} disabled={disable1}>New game</button>
                <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)}/>
                <button type="button" onClick={checkGuess} disabled={disable2}>Check</button>
            </div>
            <div>
                Information: {msg}
            </div>
            <div>
                Attempts: {count}
            </div>
            <div>
                Result: {res}
            </div>
        </div>
    )
}



root.render(
    <div>
        <div>
            <table>
                <Task1 num={0}/>
                <Task1 num={1}/>
                <Task1 num={2}/>
            </table>
        </div>
        <div>
            <Task2 carrt={0}/>
            <Task2 carrt={1}/>
            <Task2 carrt={2}/>
        </div>
        <div>
            <Task3/>
        </div>
    </div>

);
