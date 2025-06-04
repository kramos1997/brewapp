import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate checking for existing session on app load
  useEffect(() => {
    const checkAuthStatus = () => {
      const savedUser = localStorage.getItem('bcb_user')
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser))
        } catch (error) {
          console.error('Error parsing saved user:', error)
          localStorage.removeItem('bcb_user')
        }
      }
      setIsLoading(false)
    }

    checkAuthStatus()
  }, [])

  const login = async (email, password) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data
      const userData = {
        id: 1,
        email,
        name: email.split('@')[0],
        loyaltyPoints: 150,
        memberSince: '2024-01-15',
        preferences: {
          favoriteSize: 'medium',
          favoriteMilk: 'oat',
          notifications: true
        }
      }
      
      setUser(userData)
      localStorage.setItem('bcb_user', JSON.stringify(userData))
      setIsLoading(false)
      return { success: true }
    } catch (error) {
      setIsLoading(false)
      return { success: false, error: 'Login failed' }
    }
  }

  const register = async (name, email, password) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const userData = {
        id: Date.now(),
        email,
        name,
        loyaltyPoints: 0,
        memberSince: new Date().toISOString().split('T')[0],
        preferences: {
          favoriteSize: 'medium',
          favoriteMilk: 'regular',
          notifications: true
        }
      }
      
      setUser(userData)
      localStorage.setItem('bcb_user', JSON.stringify(userData))
      setIsLoading(false)
      return { success: true }
    } catch (error) {
      setIsLoading(false)
      return { success: false, error: 'Registration failed' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('bcb_user')
  }

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('bcb_user', JSON.stringify(updatedUser))
  }

  const addLoyaltyPoints = (points) => {
    const updatedUser = { 
      ...user, 
      loyaltyPoints: user.loyaltyPoints + points 
    }
    setUser(updatedUser)
    localStorage.setItem('bcb_user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    addLoyaltyPoints,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

