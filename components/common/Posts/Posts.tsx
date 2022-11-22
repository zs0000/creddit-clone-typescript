import PostsCard from "../PostsCard/PostsCard"
import s from "./Posts.module.css"

export default function Posts() {
  const posts = [
    {
        title:"what song hits different after you read the lyrics?",
        author: "Klusten",
        subreddit:"r/AskReddit",
        time:"6 hours ago",
        id:10
    },
    {
        title:"what song hits different after you read the lyrics?",
        author: "Klusten",
        subreddit:"r/AskReddit",
        time:"6 hours ago",
        id:12
    }
  ]
    return (
    <div className={s.container}>
        {posts.map((post)=>(
            <PostsCard
            key={post.id}
            title={post.title}
            author={post.author}
            subreddit={post.subreddit}
            time={post.time}
            />
        ))}
    </div>
  )
}
