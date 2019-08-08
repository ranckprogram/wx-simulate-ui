import React from 'react';
import styles from './style.module.css';
import List from '@/components/List';
import Icon from '@/components/Icon';
import Avatar from '@/components/Avatar';
import yy from './yy.jpg';
function Me () {
  const list = [
    [{
      title: '支付',
      icon: 'iconpay',
    }],
    [{
      title: '收藏',
      icon: 'iconcube',
    }, {
      title: '相册',
      icon: 'iconLC_icon_photo_line',
    }, {
      title: '卡包',
      icon: 'iconwallet',
    }, {
      title: '表情',
      icon: 'iconemoji',
    }],
    [{
      title: '设置',
      icon: 'iconset',
    }],
  ];
  return (
    <div>
      <div className={styles.header}>
        <Avatar src={yy} />
        <div className={styles.content}>
          <h3>张仪</h3>
          <span>微信号: zhang-yi-01</span>
        </div>
      </div>
      <ul className={styles.list}>
        {list.map((obj, index) => <li key={index}>
          <List
            dataSource={obj}
            renderItem={item => <List.Item data={1}>
              <List.Item.Meta
                avatar={<Icon type={item.icon} />}
                title={item.title}
                content={item.content}
                time={item.time}
              />
            </List.Item>}
          />
        </li>)}
      </ul>
    </div>
  );
}

export default Me;
