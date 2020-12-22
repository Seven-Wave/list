import {useState} from 'react'
import Menu from './components/Menu/Menu'
import MenuToggle from './components/MenuToggle/MenuToggle'


function App() {
  let items = []
  for (let i = 1; i <= 32; i++) {
    items.push({key: i.toString(), text: `item${i}`})
  }


  const [text, setText] = useState('')
  const [flag, setFlag] = useState(false)

  const search = (e) => {
    setText(e.target.value)
  }

  if (text.length > 0) {
    items = items.filter(i => i.text.match(text))
  }

  const toggleActiveMenu = () => {
    setFlag(!flag)
  }

  const menuCloseHandler = () => {
    setFlag(false)
  }

  return (
    <div className="App">
      <MenuToggle 
        onToggle={toggleActiveMenu}
        isOpen={flag}
      />
      <Menu 
        isOpen={flag}
        onClose={menuCloseHandler}
      />
      <input 
        type="search"
        placeholder="Search item"
        value={text}
        onChange={search}
        className="search"
      />
      {items && items.map((item, i) => {
        return (
          <div className="item" key={i}>{item.text}</div>
        )
      })}
    </div>
  );
}

export default App;
