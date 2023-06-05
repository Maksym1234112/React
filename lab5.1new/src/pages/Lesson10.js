import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions/users";
import { add_user, remove_user, increase, decrease } from "../store/reducers/counterReducer";

const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const topic = useSelector(state => state.lesson.topic);
    const users = useSelector(state => state.users);

    const increase1 = () => {
        dispatch(increase(10))
    }
    const decrease1 = () => {
        dispatch(decrease(10))
    }

    const addUser = () => {
        const user = {
            name: `Petya ${Date.now()}`,
            id: Date.now()
        }
        dispatch(add_user(user));
    }

    const removeUser = (id) => {
        dispatch(remove_user(id));
    }

    return (
        <div>
            <div>
                Lesson: {topic}
                <br/>
                Counter: {counter}
                <button onClick={increase1}>Increase counter</button>
                <button onClick={decrease1}>Decrease counter</button>
            </div>
            
            <div>
                <button onClick={addUser}>Add user</button>
                <button onClick={() => dispatch(fetchUsers())}>Add users from fakeAPI</button>
    
                {users.length ? 
                <div>
                    <h3>Users</h3>
                    {users.map(user => 
                        <div id={user.id} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                </div>
                : 
                <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export { Lesson10 }