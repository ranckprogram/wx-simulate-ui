import React, { } from 'react';
import Avatar from '@/components/Avatar';
import List from '@/components/List';

function ChatList (props) {
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

    function handleGoSession (item) {
        props.history.push(`/session/${item.id}`)
    }

    return (
        <List
            dataSource={data}
            renderItem={item => <List.Item onClick={() => { handleGoSession(item) }}>
                <List.Item.Meta
                    avatar={<Avatar size="middle" />}
                    title={item.title}
                    content={item.content}
                    time={item.time}
                />
            </List.Item>}
        />
    );
}

export default ChatList;