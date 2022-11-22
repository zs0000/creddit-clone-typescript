import s from "./DownvoteIcon.module.css"

export default function DownvoteIcon() {
  return (
    <div className={s.container}>
        <svg
        className={s.svg}
        fill="#646464b3"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 336.709 336.709"
      version="1.1"
      viewBox="0 0 336.709 336.709"
      xmlSpace="preserve"
    >
      <path d="M326.087 211.143L168.355 0 10.623 211.143H99.05v125.566h138.608V211.143h88.429zm-108.427-20v125.566h-98.611V191.143h-68.52L168.355 33.418l117.826 157.725H217.66z"></path>
    </svg>
    </div>
  )
}
