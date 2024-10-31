import React from "react";
import { useNavigate } from "react-router-dom";

function LogoWithMypage(){
    const navigate = useNavigate();

    const home = () => {
        navigate('/home');
    }
    return(
        <div className="Logo2"> 
            <img  onClick={home}  className="logoImage" src="/image/logo.gif" alt="MovieBook" />
            <img onClick={null} className="mypage" src="/image/mypage.png" alt="mypage"></img>
        </div>
    );
}

export default LogoWithMypage;