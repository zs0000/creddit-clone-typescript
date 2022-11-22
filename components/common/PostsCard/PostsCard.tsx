import DownvoteIcon from "../../icons/DownvoteIcon/DownvoteIcon"
import PostInteractionsBar from "../PostsInteractionsBar/PostsInteractionsBar"
import UpvoteIcon from "../../icons/UpvoteIcon/UpvoteIcon"
import s from "./PostsCard.module.css"
import { FC } from "react";

interface PostCardProps  {
    title: string;
    author: string;
    time: string;
    subreddit: string;
}

const PostCard:FC<PostCardProps> = (props)=> {

    const upvotes = "3.7k"
    const comments = "3.0k"

  return (
    <div className={s.container}>
       
        <div className={s.upvotes}>
            <UpvoteIcon/>
        {upvotes}
            <DownvoteIcon/>
        </div>
        <div className={s.primaryinfo}>
        <div className={s.postinfo}>
        <span className={s.subreddit}>
        {props.subreddit}
        </span>
        <span className={s.dot}>
            .
        </span>
        <span className={s.author}>
        Posted by u/{props.author}
        </span>
        <span className={s.time}>
            {props.time}
        </span>
        </div>
        <div className={s.posttitle}>
            <span className={s.title}>
            {props.title}
            </span>
        </div>
        <PostInteractionsBar comments={comments}/>
        </div>
         {/* 
        {if(hasImg){
            <div className={s.image}>
            <Image src={post.image_url}/>
            </div>
        }}
        */}
       
    </div>
  )
}

export default PostCard;