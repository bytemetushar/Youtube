import React, { useEffect, useState } from "react";
import './PlayVideo.css'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import share from '../../assets/share.svg'
import save from '../../assets/save.svg'
import { API_KEY, value_converter } from "../../Data";
import moment from "moment";


const PlayVideo = ({videoId})=>{

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async() =>{
        const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetail_url).then(responce=>responce.json()).then(data=>setApiData(data.items[0]));
    }

    const fetchOtherData = async() =>{
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(responce=>responce.json()).then(data=>setChannelData(data.items[0]))

        const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commentData_url).then(responce=>responce.json()).then(data=>setCommentData(data.items))

    }

    useEffect(()=>{
        fetchVideoData();
    },[])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])

    return(
        <div className="play-video">
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData?value_converter(apiData.statistics.viewCount):"1K"} Views &bull; {apiData? moment(apiData.snippet.publishedAt).fromNow():""}</p>
                <div>
                    <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):""}</span>
                    <span><img src={dislike} alt="" />10</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:""}</p>
                    <span> {channelData?value_converter(channelData.statistics.subscriberCount):""} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-discription">
                <p>{apiData?apiData.snippet.description:"Description Here"}</p>
                <hr />
                <h4>{apiData?value_converter(apiData.statistics.commentCount):"Comments"} Comments</h4>
                {commentData.map((item,index)=>{

                    return(
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.disLikeCount)}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default PlayVideo