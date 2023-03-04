import Nav from './components/Nav'
import Center from './components/Center'
import ContextTodo from './components/ContextTodo'
import './App.css'

function App() {
  

  return (
    
    <div className="App">
      <ContextTodo >
      <img  className="Bg-Desktop "src="/TODOAPP/images/bg-desktop-light.jpg" alt="bg-desktop-light" />
      <img  className="Bg-Mobile "src="/TODOAPP/images/bg-mobile-light.jpg" alt="bg-desktop-light" />
      <Nav />
      <Center />
      </ContextTodo>
    </div>
  )
}

export default App
