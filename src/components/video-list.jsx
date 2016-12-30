import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos, onVideoSelect}) => (
    <ul className="col-md-4 list-group">
        {videos.map(video =>
            <VideoListItem
                key={video.etag}
                onVideoSelect={onVideoSelect}
                video={video} />
        )}
    </ul>
);

export default VideoList;
