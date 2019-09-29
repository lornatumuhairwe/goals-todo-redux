import React from 'react';

export default function List (props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
              <span
                onClick={'complete' in item ? () => props.toggle(item) : null}
                style={{ textDecoration: item.complete ? 'line-through' : null }}
              >
                {item.name}
              </span>
          <button onClick={() => props.remove(item)}>X</button>
        </li>
      ))}
    </ul>
  )
}