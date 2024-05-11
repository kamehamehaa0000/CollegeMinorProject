import { createContext } from 'react'

const logoutModalContext = createContext({
  isOpen: false,
  setIsOpen: (current) => {},
})

export default logoutModalContext
