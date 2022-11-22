import TrendingCard from "../TrendingCard/TrendingCard"
import s from "./Trending.module.css"

export default function Trending() {
  return (
    <div className={s.container}>
        
    <div className={s.main}>
    <span className={s.label}>
        Trending today
    </span>
    <div className={s.items}>
      <TrendingCard/>
      <TrendingCard/>
      <TrendingCard/>
    </div>
    </div>
    </div>
  )
}
