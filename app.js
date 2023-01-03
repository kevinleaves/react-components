// TODO
const { useState } = React;

const App = () => {

  return (
    <>
      <h1>MY GROCERY LIST</h1>
      <GroceryList items = {['Apples', 'Pineapples']}/>
    </>
  )
}

function GroceryList ({items, handleClick}) {
  return (
    <ul>
      {items.map((item) => (
        <GroceryListItem listItem={item}/>
      ))}
    </ul>
  )
}

const GroceryListItem = ({listItem}) => {

  const [isHovered, setHovered] = useState(false);

  const style = {
    fontWeight: isHovered ? 'bold' : 'normal'
  }

  return (
    <li style={style}
    onMouseEnter={() => {setHovered(true)}}
    onMouseLeave={() => {setHovered(false)}}>
    {listItem}
    </li>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
