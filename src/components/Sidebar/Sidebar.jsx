import React from "react";
import './Sidebar.css'
import home from '../../assets/home.svg'
import game_icon from '../../assets/game.svg'
import automobiles from '../../assets/automobiles.svg'
import sports from '../../assets/sports.svg'
import entertainment from '../../assets/entertainment.svg'
import tech from '../../assets/technology.svg'
import music from '../../assets/music.svg'
import blogs from '../../assets/blogs.svg'
import news from '../../assets/news.svg'
import jack from '../../assets/profile.png'
import tom from '../../assets/profile.png'
import cameron from '../../assets/profile.png'
import megan from '../../assets/profile.png'
import simon from '../../assets/profile.png'

const Sidebar = ({sidebar, category, setCategory}) =>{
    return(
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-links ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className={`side-links ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt="" /><p>Gaming</p>
                </div>
                <div className={`side-links ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt="" /><p>Automobiles</p>
                </div>
                <div className={`side-links ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                    <img src={sports} alt="" /><p>Sports</p>
                </div>
                <div className={`side-links ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className={`side-links ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                    <img src={tech} alt="" /><p>Technology</p>
                </div>
                <div className={`side-links ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                    <img src={music} alt="" /><p>Music</p>
                </div>
                <div className={`side-links ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                    <img src={blogs} alt="" /><p>Blogs</p>
                </div>
                <div className={`side-links ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                    <img src={news} alt="" /><p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-links">
                    <img src={jack} alt="" /><p>PewDiePie</p>
                </div>
                <div className="side-links">
                    <img src={simon} alt="" /><p>Mrbeast</p>
                </div>
                <div className="side-links">
                    <img src={tom} alt="" /><p>Justin beiber</p>
                </div>
                <div className="side-links">
                    <img src={megan} alt="" /><p>5-mins creaft</p>
                </div>
                <div className="side-links">
                    <img src={cameron} alt="" /><p>nass daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar