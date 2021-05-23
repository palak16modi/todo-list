import React from 'react'

export const Footer = () => {

    let footerstyle = {
        width: "100%",
        padding: "18px",
        position: "relative",
        top: "60vh",
    }
    
    return (
        <div className="bg-dark text-light" style={footerstyle} >
            <p className = "text-center"> 
                copyright &copy; MyTodoList.com
            </p>
            
        </div>
    )
}
