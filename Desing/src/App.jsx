import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'

export default function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'

  if (normalizedPath === '/register') {
    return <RegistrationPage />
  }

  return <HomePage />
}
