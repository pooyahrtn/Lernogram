import React, { useState } from 'react';
import { Query } from 'react-apollo';
import query from './home.query';
import HomePage from './home.page';

export default function HomeController() {
    const [selectedFeedComment, setSelectedFeedComment] = useState();
    return (
        <Query query={query}>
            {
                ({ loading, error, data }) => {
                    return (
                        <HomePage
                            feeds={data.feeds}
                            selectedFeedComment={selectedFeedComment}
                            openCommentModal={(feedId) => setSelectedFeedComment(feedId)}
                            closeCommentModal={() => setSelectedFeedComment(null)}
                            loading={loading}
                        />
                    );
                }
            }
        </Query>
    );
}

