import ChatList from '@/views/ChatList';
import AddressList from '@/views/AddressList';
import Found from '@/views/Found';
import Me from '@/views/Me';
import UserInfo from '@/views/UserInfo';
import Session from '@/views/Session';

const config = [
  {
    path: '/chat/list',
    component: ChatList,
  }, {
    path: '/address/list',
    component: AddressList,
  }, {
    path: '/found',
    component: Found,
  }, {
    path: '/me',
    component: Me,
  }, {
    path: '/user/:id',
    component: UserInfo,
    meta: {
      hasBack: true,
    }
  },{
    path: '/session/:id',
    component: Session,
    meta: {
      hasBack: true,
      footer: true,
    },
  },{
    path: '/user/:id',
    component: UserInfo,
  }
];

export default config;
