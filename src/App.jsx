import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home')
  }, [navigate])

  return null
}

export default App
