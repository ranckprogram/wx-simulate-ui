import React from 'react';
import List from '@/components/List';
import Avatar from '@/components/Avatar';
import styles from './style.module.css';
function AddressList (props) {

  const data = [{
    id: 1,
    title: 'ranck',
  },
  {
    id: 2,
    title: 'sofy',
  }, {
    id: 3,
    title: 'nian',
  }];

  function handleClick (item) {
    props.history.push(`/user/${item.id}`);
  }

  return (
    <div className={styles.userList}>
      <ul>
        <li>
          <h3>我的企业</h3>
          <div className={styles.group}>
            <List
              dataSource={data}
              renderItem={item => <List.Item onClick={() => {handleClick(item)}}>
                <List.Item.Meta
                  avatar={<Avatar size="middle" />}
                  title={item.title}
                  content={item.content}
                  time={item.time}
                />
              </List.Item>}
            />
          </div>
        </li>
        <li>
          <h3>A</h3>
          <div className={styles.group}>
            <List
              dataSource={data}
              renderItem={item => <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size="middle" />}
                  title={item.title}
                  content={item.content}
                  time={item.time}
                />
              </List.Item>}
            />
          </div>
        </li>
      </ul>

    </div>
  );

}


export default AddressList;
