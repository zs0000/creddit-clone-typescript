import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link"
import NavDropdown from "../NavDropdown/NavDropdown"
import s from "./TopNavbar.module.css"

export default function TopNavbar() {
  const session = useSession();
  return (
    <div className={s.container}>
        <div className={s.leftcontainer}>
            <div className={s.svgcontainer}>
            <Link  href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={s.redditsvg}><g><circle fill="#FF4500" cx="10" cy="10" r="10"></circle><path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path></g></svg>
            </Link>
            </div>
            <div>

            </div>
            
        </div>
        
        <NavDropdown/>
   
        <div className={s.group}>
        <svg
        className={s.searchsvg}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 488.4 488.4"
      version="1.1"
      viewBox="0 0 488.4 488.4"
      xmlSpace="preserve"
    >
      <path d="M0 203.25c0 112.1 91.2 203.2 203.2 203.2 51.6 0 98.8-19.4 134.7-51.2l129.5 129.5c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6c4.8-4.8 4.8-12.5 0-17.3l-129.6-129.5c31.8-35.9 51.2-83 51.2-134.7C406.4 91.15 315.2.05 203.2.05S0 91.15 0 203.25zm381.9 0c0 98.5-80.2 178.7-178.7 178.7s-178.7-80.2-178.7-178.7 80.2-178.7 178.7-178.7 178.7 80.1 178.7 178.7z"></path>
    </svg>
            <input type="text" 
            className={s.search}
            placeholder="Search Reddit" />
        </div>
        <div className={s.rightcontainer}>
          {!session ? <>
            <Link href="/sign-up/" className={s.signupbutton}>
            Sign Up
          </Link>
          <button className={s.button}>
            Log In
          </button></>
           :
           <>
           hello signed in fellow
           </>}
        </div>
        <div className={s.usercontainer}>
          <div className={s.usersvgcontainer}>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      className={s.usersvg}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M256 0c-65.733 0-119.211 53.479-119.211 119.211S190.267 238.423 256 238.423s119.211-53.479 119.211-119.211S321.733 0 256 0zm0 218.024c-54.486 0-98.813-44.328-98.813-98.813S201.515 20.398 256 20.398s98.813 44.328 98.813 98.813-44.328 98.813-98.813 98.813zM426.272 331.529C380.792 286.049 320.32 261 256 261s-124.791 25.047-170.273 70.529c-45.48 45.48-70.529 105.952-70.529 170.272 0 5.632 4.566 10.199 10.199 10.199h461.204c5.632 0 10.199-4.567 10.199-10.199.001-64.319-25.048-124.791-70.528-170.272zM35.831 491.602C41.179 374.789 137.889 281.398 256 281.398s214.821 93.391 220.17 210.204H35.831z"></path>
      <path d="M182.644 457.944H66.295c-5.633 0-10.199 4.567-10.199 10.199s4.566 10.199 10.199 10.199h116.349c5.633 0 10.199-4.567 10.199-10.199s-4.566-10.199-10.199-10.199zM225.621 457.944h-7.337c-5.633 0-10.199 4.567-10.199 10.199s4.566 10.199 10.199 10.199h7.337c5.633 0 10.199-4.567 10.199-10.199s-4.566-10.199-10.199-10.199z"></path>
    </svg>
          </div>
    <div className={s.arrowsvgcontainer}>
        <svg
        className={s.arrowsvg}
      xmlns="http://www.w3.org/2000/svg"
      
      x="0"
      y="0"
      enableBackground="new 0 0 30.727 30.727"
      version="1.1"
      viewBox="0 0 30.727 30.727"
      xmlSpace="preserve"
    >
      <path d="M29.994 10.183L15.363 24.812.733 10.184a2.5 2.5 0 113.536-3.536l11.095 11.093L26.461 6.647a2.5 2.5 0 113.533 3.536z"></path>
    </svg>
        </div>
          </div>
    </div>
  )
}
