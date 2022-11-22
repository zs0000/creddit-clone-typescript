import s from "./TrendingCard.module.css"
import Image from "next/image"
import test from "../../../public/test.png"
import subredicon from "../../../public/subredicon.png"
export default function TrendingCard() {
  return (
    <div className={s.card}>
        
        <div className={s.imagecontainer}>
            <div className={s.test}>
                    <span className={s.title}>
                        The Title of Posts
                    </span>
                    <span className={s.description}>
                        A description for the fluffy frowning fox and friends of the forest.
                    </span>
                    <div className={s.bottom}>
                    <Image src={subredicon} alt="an image" width={15} height={15} />
                    <span className={s.subreddit}>
                       
                       r/Subreddit and more
                   </span>
                    </div>
                   
            </div>
            <Image alt="an image" className={s.image} src={test}/>
        </div>
    </div>
  )
}
