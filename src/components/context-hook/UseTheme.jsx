import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeProvider'

const useTheme = () => {
	const value = useContext(ThemeContext)

	return value
}

export default useTheme