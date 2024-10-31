import React from "react";

function BottomButton({text, onClick, disabled, backgroundColor}) {
    const buttonStyle = {
        backgroundColor : backgroundColor? backgroundColor : '#d04040' ,
        color : '#ffffff',
        width : '100%',
        fontSize : '25px',
        fontWeight : 'bold',
        border : 'none',
        margin : '5px 0px',
        padding : '25px 0px',
    }
    const divStyle = {
        backgroundColor : '#ffffff',
        position : 'sticky',
        bottom : '0',
        width: '100%',
        alignItems : 'center',
        justifyContent : 'center',
        padding : '5px 0px'
    }
    return(
        <div style={divStyle}>
            <button style={buttonStyle} onClick={onClick} disabled={disabled}>{text}</button>
        </div>
    );
}

export default BottomButton;