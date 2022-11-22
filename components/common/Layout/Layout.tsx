import TopNavbar from "../TopNavbar/TopNavbar"
import s from "./Layout.module.css"


export default function Layout({children}: {
    children: React.ReactNode
}) {
  return (
    <div className={s.container}>
      <TopNavbar />
      <div className={s.main}>
      {children}
      </div>
      
      </div>
  )
}
