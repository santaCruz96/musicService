import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'

const useTheme = () => {
	const value = useContext(ThemeContext)

	return value
}

export default useTheme