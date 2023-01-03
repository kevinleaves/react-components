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

  const [isPurchased, setPurchased] = useState(false);

  const style = {
    textDecoration: isPurchased ? 'line-through' : 'none'
  }

  return (
    <li style={style} onClick={() => {setPurchased(!isPurchased)}}>{listItem}</li>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
