import React from 'react';
import "./Posts.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteIcon from '@mui/icons-material/Favorite'; // Coração preenchido
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Coração não preenchido
import { red } from '@mui/material/colors'; // Importe da cor vermelho
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"; // Save não preenchido
import BookmarkIcon from '@mui/icons-material/Bookmark'; // Save preenchido
import { useState } from 'react';


function Posts({user,postImage,likes,timestamp}) {
    return(
        <div className='post'>
            <div className='post__header'>
                <div className='post__headerAuthor'>
                    <Avatar>{user.charAt(0).toUpprCase}</Avatar> {user}  <span>{timestamp}</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className='post__image'>
                <img src='https://cdn.pixabay.com/photo/2023/04/30/12/15/rock-formations-7960445_1280.jpg'/>
            </div>
            <div className='post__footer'>
                <div className='post__footerIcons'>
                    <div className='post__iconsMain'>
                        <FavoriteBorderIcon className="postIcon" />
                        <ChatBubbleOutlineIcon className="postIcon" />
                        <TelegramIcon className="postIcon" />
                    </div>
                    <div className='post__iconSave'>
                        <BookmarkBorderIcon className="postIcon" />
                    </div>
                </div>
                Liked by {likes} people.
            </div>
        </div>
    )
}


export default Posts;