import useLocalStorage from './useLocalStorage'

export const useLightMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('lightmode', initialValue);
    return [value, setValue];
}