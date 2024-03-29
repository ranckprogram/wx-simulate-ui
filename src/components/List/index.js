import React from 'react';
import styles from './list.module.css'

function List (props) {
  const Item = props.renderItem
  return (<div>
    <ul>
      {
        props.dataSource.map(item => <Item key={item.id || item.icon} {...item} />)
      }
    </ul>
  </div>);
}

List.Item = function (props) {
  return <li className={styles.listItem} {...props}>{props.children}</li>
}

List.Item.Meta = function (props) {
  return <>
    {props.avatar && <div className={styles.avatar}>
      {props.avatar}
    </div>}
    <div className={styles.itemMiddle}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>{props.content}</div>
      <time className={styles.time}>{props.time}</time>
    </div>
  </>;
}

export default List;
