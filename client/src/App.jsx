import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import ErrorPage from './pages/error/ErrorPage'
import UserPage from './pages/UserPage'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
    return (
        <Router>
            <Header />
            <main className='container content'>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/signin' element={<SignInPage />} />
                    <Route path='/profile' element={<UserPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}
export default App