import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key) => {
    const [mode , setMode] = useLocalStorage(key)
    console.log('useDarkMode')

    // const body = document.querySelector('body').classList.add('dark-mode')
    useEffect( () => {
        console.log(window.localStorage.getItem('dark-mode'))
        mode === true ? document.body.classList.add('dark-mode') :document.body.classList.remove('dark-mode')
    },[mode])

    return [mode,setMode]
}