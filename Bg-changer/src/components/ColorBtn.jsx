function ColorBtn({ color, handleColor }) {
  return <button onClick={() => handleColor(color)} className="colorBtn" style={{ backgroundColor: color }}> {color}</button>

}

export default ColorBtn;