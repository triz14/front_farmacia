import axios from "axios";

const api = axios.create({
    baseURL: "https://farmacia-jjxo.onrender.com/"
})

export const cadastrarCategoria = async (url: string, dados: object, setDados: Function) => {
    const resp = await api.post(url, dados)
    setDados(resp.data)
}

export const AtualizarCategoria = async (url: string, dados: object, setDados: Function) => {
    const resp = await api.put(url, dados)
    setDados(resp.data)
}

export const deletarCategoria = async (url: string) => {
    await api.delete(url)
}

export const buscarCategoria = async (url: string, setDados: Function) => {
    const resp = await api.get(url)
    setDados(resp.data)
}