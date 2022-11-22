import s from "./BookmarkIcon.module.css"

export default function BookmarkIcon() {
  return (
    <div className={s.container}>
        <svg
        className={s.svg}
        fill="#646464b3"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 330 330"
      version="1.1"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <path d="M265 0H65c-8.284 0-15 6.716-15 15v300a15 15 0 0024.37 11.713L165 254.21l90.63 72.503a14.989 14.989 0 009.372 3.287A14.999 14.999 0 00280 315V15c0-8.284-6.716-15-15-15zm-15 283.79l-75.63-60.503c-2.739-2.191-6.055-3.287-9.37-3.287s-6.631 1.096-9.37 3.287L80 283.79V30h170v253.79z"></path>
    </svg>
    </div>
  )
}
