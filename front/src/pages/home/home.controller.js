import React, { useState } from 'react';
import HomePage from './home.page';

export default function HomeController() {
    const [isCommentModalVisible, setCommentModalVisibility] = useState(false);
    return (
        <HomePage
            feeds={feeds}
            isCommentModalVisible={isCommentModalVisible}
            openCommentModal={() => setCommentModalVisibility(true)}
            closeCommentModal={() => setCommentModalVisibility(false)}
        />
    );
}

type Feed = {
    image: string,
    user: {
        name: string,
    },
    caption: string,
    n_comments: number,
    id: string,
}

const feeds: Feed[] = [
    {
        user: {
            name: 'pooya'
        },
        caption: 'hello my friends',
        n_comments: 10,
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Tioman_Rainforest.JPG',
        id: '1',
    },
    {
        user: {
            name: 'pooya'
        },
        caption: 'hello my friends',
        n_comments: 10,
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Tioman_Rainforest.JPG',
        id: '2',
    }
]
