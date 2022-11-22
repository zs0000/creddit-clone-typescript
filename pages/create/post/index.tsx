import s from "../../../styles/CreatePost.module.css"

export default function CreatePost() {


  return (
    <div className={s.container}>
      <div className={s.form}>
          <div className={s.inputcontainer}>
            <input
            type="text"
            value={title || ""}
            onChange={(e)=>setTitle(e.target.value)}
            className={s.input}
            />


          </div>
      </div>
    </div>
  )
}
