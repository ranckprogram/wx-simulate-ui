import React from 'react';
import Avatar from '@/components/Avatar';
import Icon from '@/components/Icon';
import List from '@/components/List';

import styles from './style.module.css';
function UserInfo () {

  const remarks = [{
    id: 1,
    name: '设置备注',
  }];

  const browseList = [{
    id: 'circleOfFriends',
    name: '朋友圈',
  }, {
    id: 'moreInfo',
    name: '更多信息',
  }];

  const callWayList = [{
    id: 'message',
    name: '发消息',
  }, {
    id: 'media',
    name: '音视频通话',
  }]
  
  return (<div>
    <div className={styles.baseInfo}>
      <Avatar />
      <div className={styles.content}>
        <h3>ranck <Icon />  </h3>
        <p>昵称： 千叶</p>
        <p>微信号：zhang-yi-01</p>
        <p>地区： 四川 成都</p>
      </div>
    </div>
    <div className={styles.remark}>
      <List
        dataSource={remarks}
        renderItem={item => <List.Item style={{ padding: ".2rem" }}>{item.name}</List.Item>}
      />
    </div>
    <div className={styles.browseList}>
      <List
        dataSource={browseList}
        renderItem={item => <List.Item>
          <List.Item.Meta
            title={item.name}
          />
        </List.Item>}
      />
    </div>
    <div className={styles.callWayList}>
      <List
        dataSource={callWayList}
        renderItem={item => <List.Item>
          <List.Item.Meta
            title={item.name}
          />
        </List.Item>}
      />
    </div>
  </div>);
}

export default UserInfo;
