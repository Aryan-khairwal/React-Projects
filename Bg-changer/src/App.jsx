import { useState } from "react"
import ColorBtn from "./components/ColorBtn"

function App() {

  const [bgColor, setBgColor] = useState('grey')
  return <div className=" text-center vh-100 " style={{ backgroundColor: bgColor }}>
    <h1 className="pt-4 text-white">Background Changer</h1>

    <div className="btnContainer">
      <ColorBtn color="Red" handleColor={setBgColor} />
      <ColorBtn color="Green" handleColor={setBgColor} />
      <ColorBtn color="Blue" handleColor={setBgColor} />
      <ColorBtn color="Yellow" handleColor={setBgColor} />
      <ColorBtn color="Orange" handleColor={setBgColor} />
      <ColorBtn color="Purple" handleColor={setBgColor} />
      <ColorBtn color="Brown" handleColor={setBgColor} />
      <ColorBtn color="Pink" handleColor={setBgColor} />

    </div>
  </div >
}

export default App
