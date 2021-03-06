import React from 'react';

const VideoDetail = ({video}) => !video ? <div>Loading ...</div> : (
    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} className="embed-responsive-item"></iframe>
        </div>
        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    </div>
);

export default VideoDetail;
