import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'
import { useAuth } from '../context/AuthContext'
import '../styles/Auth.css'

export default function AuthPage() {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { register, login } = useAuth()
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const switchMode = () => {
    setIsLoginMode(prevMode => !prevMode)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      alert("Заповніть обов'язкові поля!")
      return
    }

    if (isLoginMode) {
      login(formData)
    } else register(formData)

    navigate('/about-us')
  }

  return (
    <div className='auth-container'>
      <h1 className='auth-title'>{isLoginMode ? 'Увійти' : 'Зареєструватися'}</h1>
      <div className='auth-form-container'>
        <form className='auth-form'>
          {!isLoginMode && (
            <Input
              type='text'
              name='name'
              placeholder='Ваш нікнейм'
              value={formData.name}
              onChange={handleChange}
              className='auth-input'
            />
          )}
          <Input
            type='text'
            name='email'
            placeholder='Електронна пошта'
            value={formData.email}
            onChange={handleChange}
            className='auth-input'
          />
          <Input
            type='text'
            name='password'
            placeholder='Пароль'
            value={formData.password}
            onChange={handleChange}
            className='auth-input'
          />
          <Button
            className='auth-submit-btn'
            onClick={handleSubmit}
            children={isLoginMode ? 'Увійти' : 'Зареєструватися'}
          />
        </form>

        <div className='auth-switch-container'>
          <p className='switch-txt'>{isLoginMode ? 'Немає акаунту?' : 'Вже є акаунт?'}</p>
          <Button
            onClick={switchMode}
            className='switch-btn'
            variant='outline'
            children={isLoginMode ? 'Зареєструватися' : 'Увійти'}
          />
        </div>
      </div>
    </div>
  )
}
