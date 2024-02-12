import { useState } from "react"
import "/home/shamsi/springboard/react_eventsState_EX/eightball/src/style.css"
const EightBall = () => {


    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a question");
    
    const handleClck = () => {
        const arr = [
            { msg: "It is certain.", color: "green" },
            { msg: "It is decidedly so.", color: "green" },
            { msg: "Without a doubt.", color: "green" },
            { msg: "Yes - definitely.", color: "green" },
            { msg: "You may rely on it.", color: "green" },
            { msg: "As I see it, yes.", color: "green" },
            { msg: "Most likely.", color: "green" },
            { msg: "Outlook good.", color: "green" },
            { msg: "Yes.", color: "green" },
            { msg: "Signs point to yes.", color: "goldenrod" },
            { msg: "Reply hazy, try again.", color: "goldenrod" },
            { msg: "Ask again later.", color: "goldenrod" },
            { msg: "Better not tell you now.", color: "goldenrod" },
            { msg: "Cannot predict now.", color: "goldenrod" },
            { msg: "Concentrate and ask again.", color: "goldenrod" },
            { msg: "Don't count on it.", color: "red" },
            { msg: "My reply is no.", color: "red" },
            { msg: "My sources say no.", color: "red" },
            { msg: "Outlook not so good.", color: "red" },
            { msg: "Very doubtful.", color: "red" },
          ]

          const randomElement = arr[Math.floor(Math.random() * arr.length)]

          // Update Color
          setColor(randomElement.color)

          // Update Msg
          setMsg(randomElement.msg)
    }
    return (
        <div>
            <div onClick={handleClck} 
            style={{ backgroundColor: color}}
            className="ball"><p>{msg}</p></div>
        </div>
        
        
    )
}
export default EightBall;