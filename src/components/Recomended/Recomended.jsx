import React, { useEffect, useState } from "react";
import './Recomended.css'
import { API_KEY, value_converter } from "../../Data";
import {Link} from 'react-router-dom'

const Recomended =()=>{

    const [apiData,setApiData] = useState([]);
    const home = 0;
    
    const fetchData = async ()=>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=75&regionCode=In&videoCategoryId=${home}&key=${API_KEY}`
        await fetch(videoList_url).then(response =>response.json()).then(data=> setApiData(data.items))        
    }

    useEffect(()=>{ 
        fetchData();
    },[])



    return(
        <div className="recomended">
            {apiData.map((item,index)=>{
                if(index>10){
                    return(
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <div className="vid-info">
                                <h4>{item.snippet.title}</h4>
                                <h5>{item.snippet.channelTitle}</h5>
                                <p id="views">{value_converter(item.statistics.viewCount)} Views</p>
                            </div>
                        </Link>
                    )
                }
            })}
        </div>
    )
}

export default Recomended