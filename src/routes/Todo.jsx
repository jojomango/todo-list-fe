/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/core';
import API from '../api';

const todoItemCss = (complete) => css`
  text-decoration: ${complete ? 'line-through' : 'inherit'};
`;

export default function Todo() {
    const [list, setList] = useState([]);
    useEffect(() => {
        API.get('/todo')
        .then(res => setList(res.data));
    }, []);
    return (
    <div>
      <h3>TODO:</h3>
      {list.map(todo => (
          <div
            key={todo.id}
            css={todoItemCss(todo.complete)}
          >
              {todo.content}
          </div>
      ))
      }
    </div>
    );
}