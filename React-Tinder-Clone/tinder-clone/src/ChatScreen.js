import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState(''); //keep track input type

    const [messages, setMessages] = useState([
        {
            name: 'Matamong',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cfac0e69-e09c-46d8-bfd3-d460377572b5/dbfewi9-98d216c6-9ff7-489d-86de-571c98fd090e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2ZhYzBlNjktZTA5Yy00NmQ4LWJmZDMtZDQ2MDM3NzU3MmI1XC9kYmZld2k5LTk4ZDIxNmM2LTlmZjctNDg5ZC04NmRlLTU3MWM5OGZkMDkwZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.zFiVFkYy1hgLnmsNMTMdTgkaT5JEWttxxtsZv7Ig0NY',
            message: 'Hello'
        },
        {
            name: 'Matamong',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cfac0e69-e09c-46d8-bfd3-d460377572b5/dbfewi9-98d216c6-9ff7-489d-86de-571c98fd090e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2ZhYzBlNjktZTA5Yy00NmQ4LWJmZDMtZDQ2MDM3NzU3MmI1XC9kYmZld2k5LTk4ZDIxNmM2LTlmZjctNDg5ZC04NmRlLTU3MWM5OGZkMDkwZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.zFiVFkYy1hgLnmsNMTMdTgkaT5JEWttxxtsZv7Ig0NY',
            message: '안녕하세여 반가워여'
        },
        {
            message: "안녕하세여"
        }

    ]);

    const handleSend = (e) => {
        e.preventDefault(); //엔터칠때 리프레쉬 되는거 방지해줌
        setMessages([...messages, { message: input }]);
        setInput(""); //Input 초기화
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with matamong on 10/08/20</p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            calssName="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                )
            )}
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="메시지를 입력하세요"
                    type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">보내기</button>
            </form>
        </div>
    )
}



export default ChatScreen
