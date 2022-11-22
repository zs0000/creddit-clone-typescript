import s from "./TopIcon.module.css"

export default function TopIcon() {
  return (
    <div className={s.container}>
        <svg
        className={s.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#aaa9a9"
      stroke="#000"
      strokeLinecap="square"
     
      color="#aaa9a9"
      viewBox="0 0 24 24"
    >
      <path  d="M2 12L2 21 6 21 6 12z"></path>
      <path d="M18 7L18 21 22 21 22 7z"></path>
      <path d="M10 3L10 21 14 21 14 3z"></path>
    </svg>
    </div>
  )
}
