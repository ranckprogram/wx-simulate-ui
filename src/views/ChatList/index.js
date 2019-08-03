import React, { } from 'react';
import styles from './styles.module.css'
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';

function ChatList () {
    return (
        <div className={styles.content}>
            <Header />
            <div className={styles.list}>
                <ul>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.avatar}>
                                <Avatar />
                            </div>
                            <div className={styles.itemMiddle}>
                                <h3>ranck</h3>
                                <p>content</p>
                                <time>9:10</time>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.avatar}>
                                <Avatar />
                            </div>
                            <div className={styles.itemMiddle}>
                                <h3>ranck</h3>
                                <p>content</p>
                                <time>9:10</time>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.avatar}>
                                <Avatar />
                            </div>
                            <div className={styles.itemMiddle}>
                                <h3>ranck</h3>
                                <p>content</p>
                                <time>9:10</time>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.avatar}>
                                <Avatar />
                            </div>
                            <div className={styles.itemMiddle}>
                                <h3>ranck</h3>
                                <p>content</p>
                                <time>9:10</time>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.avatar}>
                                <Avatar />
                            </div>
                            <div className={styles.itemMiddle}>
                                <h3>ranck</h3>
                                <p>content</p>
                                <time>9:10</time>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.avatar}>
                                <Avatar />
                            </div>
                            <div className={styles.itemMiddle}>
                                <h3>ranck</h3>
                                <p>content</p>
                                <time>9:10</time>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ChatList;