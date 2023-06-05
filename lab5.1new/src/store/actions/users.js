import { add_users } from "../reducers/counterReducer"

export const fetchUsers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(add_users(json)))
    }
}