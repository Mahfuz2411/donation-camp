import { Outlet } from 'react-router-dom'

import Header from './Components/Header'

function App() {

  return (
    <div className='m-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
