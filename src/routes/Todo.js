import React, { useEffect, useState } from 'react';
import API from '../api';

export default function Todo() {
    const [list, setList] = useState([]);
    useEffect(() => {
        API.get('/todo')
        .then(res => setList(res.data));
    }, []);
    return (
        <div>
        {list.map(todo => (
            <div key={todo.id}>
                {todo.content}
            </div>
        ))
        }
        </div>
    );
}