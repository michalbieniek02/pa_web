import { useState, useEffect } from 'react';
import './ToDoList.css';

const ToDoList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchList();
    }, []);

    const fetchList = async () => {
        fetch('/api/todo')
            .then((response) => response.json())
            .then((data) => setList(data))
            .catch((error) => console.log(error));
    };

    return (
        <ul className='to-do-list'>
            {list.map((item) =>
                <li key={item._id}>
                    <p>Tittle: {item.title}</p>
                    <p>Comment: {item.comment}</p>
                </li>)}
        </ul>
    );
};

export default ToDoList;