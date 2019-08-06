import React from 'react';
import List from '@/components/List';
import Icon from '@/components/Icon';

function Found () {
  const data = [{
    id: 1,
    title: '朋友圈',
    icon: 'icondyndetailfriendscircle',
  },
  {
    id: 2,
    title: '扫一扫',
    icon: 'iconscan',
  }, {
    id: 3,
    title: '摇一摇',
    icon: 'iconshake',
  }, {
    id: 5,
    title: '购物',
    icon: 'iconshop',
  }, {
    id: 6,
    title: '游戏',
    icon: 'icongame-',
  }];
  return (
    <div>
      <List
        dataSource={data}
        renderItem={item => <List.Item data={1}>
          <List.Item.Meta
            avatar={<Icon size="small" type={item.icon} />}
            title={item.title}
          />
        </List.Item>}
      />
    </div>
  );
}

export default Found;
