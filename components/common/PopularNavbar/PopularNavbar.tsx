
import Link from "next/link"
import HotIcon from "../../icons/HotIcon/HotIcon"
import NewIcon from "../../icons/NewIcon/NewIcon"
import TopIcon from "../../icons/TopIcon/TopIcon"
import s from "./PopularNavbar.module.css"

export default function PopularNavbar() {



  return (
    <div className={s.container}>
      <span className={s.label}>
          Popular posts
        </span>
       <div className={s.main}>
        
        <div className={s.items}>
        <div className={s.itemcontainer}>
        <HotIcon/>
        <span className={s.hot}>
          Hot
        </span>
        </div>
        
        <div className={s.locationcontainer}>
        <span className={s.loclabel}>
          Everywhere
        </span>
        </div>
        <div className={s.newcontainer}>
          <NewIcon/>
        <span className={s.newlabel}>
          New
        </span>
        </div>
        <div className={s.topcontainer}>
          <TopIcon/>
        <span className={s.toplabel}>
          Top
        </span>
        </div>
        <div className={s.dotdotdotcontainer}>
        <span className={s.dotdotdot}>
          ...
        </span>
        </div>

       
        </div>
        <div className={s.endcontainer}>
          <Link className={s.postlink} href="/create/post">
          Create Post
          </Link>
        <span>
          "[]"
        </span>
       </div>
       </div>
       
    </div>
  )
}
