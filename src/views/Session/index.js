import React from 'react';
import Avatar from '@/components/Avatar';
import styles from './style.module.css';
function Session () {
  const sessionList = [{
    id: '1',
    type: 'send',
    content: '你好',
  }, {
    id: '2',
    type: 'receive',
    content: '你在哪里',
  }, {
    id: '4',
    type: 'send',
    content: '我在家',
  }, {
    id: '5',
    type: 'receive',
    content: '你么',
  }, {
    id: '6',
    type: 'send',
    content: '我今天心情不错',
  }, {
    id: '9',
    type: 'receive',
    content: '那就好',
  }, {
    id: '93',
    type: 'receive',
    content: 'lsdlkfhjfhsljkghdsjghdskjhgfsjfgahjsfdagdhasgdjahsda',
  }, {
    id: '34',
    type: 'send',
    content: '啊客服很简单快速的回复健康是否健康十分就是富士康的后果克己奉公京东方和高科技',
  }, {
    id: '74',
    type: 'receive',
    content: '那就好',
  }, {
    id: '11',
    type: 'send',
    content: 'lsdlkfhjfhsljkghdsjghdskjhgfsjfgahjsfdagdhasgdjahsda',
  }, {
    id: '52',
    type: 'receive',
    content: '啊客服很简单快速的回复健康是否健康十分就是富士康的后果克己奉公京东方和高科技',
  }];

  return (<div>
    <ul className={styles.sessionList}>
      {
        sessionList.map(item =>
          <li className={styles[item.type]} key={item.id}>
            <Avatar size="middle" className={styles.avatar} />
            <div className={styles.content}>
              <div className={styles.bubble}>{item.content}</div>
            </div>
          </li>
        )
      }
    </ul>
  </div>);
}

export default Session;
