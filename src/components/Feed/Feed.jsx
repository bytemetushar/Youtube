import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../Data";
import moment from "moment";
const Feed = ({ category, query, setQuery }) => {
  const [data, setData] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=In&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.items);
        console.log(data);
      });
  };
  const handleSearch = async () => {
    try {
      const search_Url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=${API_KEY}`;
      await fetch(search_Url)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data.items);
          console.log(data);
        });
    } catch (error) {
      console.error("Error fetching data from You tube Api", error);
    }
  };

  useEffect(() => {
    if (category) setQuery("");
    setData([]);
    setVideos([]);
    if (query) {
      handleSearch();
    } else {
      fetchData();
    }
  }, [category, query]);

  return (
    <div>
      {query ? (
        <div className="feed">
          {videos.map((video, index) => {
            return (
              <Link
                key={index}
                to={`video/${video.snippet.videoId}/${video.id.videoId}`}
                className="feed"
              >
                <div key={video.id.videoId} className="card">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                  />
                  <h3>{video.snippet.title}</h3>
                  <p>{video.snippet.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="feed">
          {data.map((item, index) => {
            return (
              <Link
                key={index}
                to={`video/${item.snippet.categoryID}/${item.id}`}
                className="feed"
              >
                <div className="card">
                  <img src={item.snippet.thumbnails.medium.url} alt="" />
                  <h2>{item.snippet.title}</h2>
                  <h3>{item.snippet.channelTitle}</h3>
                  <p>
                    {value_converter(item.statistics.viewCount)} Views &bull;{" "}
                    {moment(item.snippet.publishedAt).fromNow()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Feed;
