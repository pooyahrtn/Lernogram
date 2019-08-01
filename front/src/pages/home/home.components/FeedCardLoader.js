import React from 'react';
import ContentLoader from 'react-content-loader';
import { Card } from './FeedCard';

export default function FeedCardLoader() {
    return (
        <Card style={{
            padding: 0,
            borderRadius: 15,
        }}>
            <ContentLoader
                height={160}
                speed={2}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            />
        </Card>
    );
}