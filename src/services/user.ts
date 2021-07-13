import { useLocalStorage } from '@vueuse/core'

export const user = useLocalStorage('user', '')
