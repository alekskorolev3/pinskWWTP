const dev = false

export const API = dev ? 'http://192.168.2.42:8000/api' : 'http://127.0.0.1:8000/api'
export const ADDRESS = dev ? 'http://192.168.2.42:8000' : 'http://127.0.0.1:8000'
export const wsAPI = 'ws://127.0.0.1:8000/ws'
