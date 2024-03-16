import { useState, useCallback, useEffect } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState()

  const generatePassword = () => {
    let passwordString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (numbers) {
      passwordString += '0123456789'
    }
    if (characters) {
      passwordString += '!@#$%^&*()_+='
    }

    let pass = ''
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * passwordString.length)

      pass += passwordString.charAt(char);

    }

    setPassword(pass)
  }

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
  }
  useCallback(() => generatePassword, [length, numbers, characters, generatePassword])
  useEffect(generatePassword, [length, numbers, characters, setPassword]);
  return (
    <div className='m-4'>
      <h1 className="text-center mt-2 ">Password Generator</h1>
      <div className="input-group mb-3" >
        <input type="text" className="form-control " placeholder="Password" aria-readonly value={password} />
        <div className="input-group-append">
          <button className="btn btn-primary " type="button" onClick={copyToClipboard}>Copy</button>
        </div>
      </div>

      <div className='d-flex justify-content-around w-100'>
        <div>
          <input
            type="range"
            id='length'
            min="8"
            max="24"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div>
          <label htmlFor="number">Numbers&nbsp;</label>
          <input type="checkbox"
            onChange={() => { setNumbers((prev) => !prev) }} />
        </div>
        <div>
          <label htmlFor="character">Characters&nbsp;</label>
          <input type="checkbox"
            onChange={() => { setCharacters((prev) => !prev) }} />

        </div>
      </div>



    </div>


  )


}

export default App
