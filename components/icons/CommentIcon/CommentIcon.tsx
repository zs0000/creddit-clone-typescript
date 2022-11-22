import s from "./CommentIcon.module.css"

export default function CommentIcon() {
  return (
    <div className={s.container}>
         <svg
         className={s.svg}
         fill="#646464b3"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#646464b3" fillRule="nonzero">
          <path d="M5.25 18A3.25 3.25 0 012 14.75v-8.5A3.25 3.25 0 015.25 3h13.5A3.25 3.25 0 0122 6.25v8.5A3.25 3.25 0 0118.75 18h-5.738L8 21.75a1.25 1.25 0 01-1.999-1V18h-.75zm7.264-1.5h6.236a1.75 1.75 0 001.75-1.75v-8.5a1.75 1.75 0 00-1.75-1.75H5.25A1.75 1.75 0 003.5 6.25v8.5c0 .966.784 1.75 1.75 1.75h2.249v3.75l5.015-3.75z"></path>
        </g>
      </g>
    </svg>
    </div>
  )
}
