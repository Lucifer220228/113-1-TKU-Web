import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <h1>家庭背景</h1>
        <p>跟父母還有哥哥一起住在台北，目前在淡江住宿</p>
        <div>
          <p>這是我覺得很可愛的小貓！</p>
          <img src="cat.jfif" alt="可愛的小貓" />
          <a href="https://crazypetter.com.tw/how-to-raise-kittens/">點擊這裡查看更多</a>
        </div>
        <h1>興趣愛好</h1>
        <ul>
          <li>運動</li>
          <li>睡覺</li>
          <li>看小說</li>
        </ul>
      </body>

    </>
  )
}

export default App
