import React, { } from 'react';
import styles from './styles.module.css'
import Header from '@/components/Header';

function ChatList () {
    return (
        <div className={styles.content}>
            <Header />
            <div>
                <ul>
                    <li>
                        <div>
                            <i className={styles.avatar}></i>
                            <div>
                                <h3>ranck</h3>
                                <p>content</p>
                            </div>
                            <time>
                                9:10
                            </time>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ChatList;