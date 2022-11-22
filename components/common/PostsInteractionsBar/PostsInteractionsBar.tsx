import BookmarkIcon from "../../icons/BookmarkIcon/BookmarkIcon"
import CommentIcon from "../../icons/CommentIcon/CommentIcon"
import ShareIcon from "../../icons/ShareIcon/ShareIcon"
import s from "./PostsInteractionsBar.module.css"

type PostProps ={
    comments:string
}

export default function PostInteractionsBar({comments} : PostProps) {
  return (
    <div className={s.container}>
        <div className={s.item}>
        <CommentIcon/>
      
        <span className={s.label}>
        {comments && comments + " "}
            Comments
        </span>
        </div>
        <div className={s.item}>
            <ShareIcon/>
        <span className={s.label}>
           
            Share
        </span>
        </div>
        <div className={s.item}>
        <BookmarkIcon/>
        <span className={s.label}>
            Save
        </span>
        </div>
        <div className={s.item}>
            ...
        </div>
    </div>
  )
}
