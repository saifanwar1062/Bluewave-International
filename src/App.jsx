import AllRoutes from './Allroutes'
import './App.css'
import { ApplyProvider } from './ApplyContext'
import ApplyModal from './ApplyModal'

function App() {
  return (
    <ApplyProvider>
      <AllRoutes />
      <ApplyModal />
    </ApplyProvider>
  )
}

export default App;
