import React from 'react';
import List from '@/components/List';
import Avatar from '@/components/Avatar';

function AddressList () {

  const data = [{
    id: 1,
    title: 'ranck',
    content: '我最近对小念念心动了，怎么办，她都不约我'
  },
  {
    id: 2,
    title: 'sofy',
    content: '我最近对小念念心动了，怎么办，她都不约我',
    time: '9:00',
  }, {
    id: 3,
    title: 'nian',
  }];

  return (
    <div>
      <List
        dataSource={data}
        renderItem={item => <List.Item data={1}>
          <List.Item.Meta
            avatar={<Avatar size="middle"/>}
            title={item.title}
            content={item.content}
            time={item.time}
          />
        </List.Item>}
      />
    </div>
  );

}


export default AddressList;
