import api from "../api";

export async function buscaUsuario(usuario) {
    try {
        const resultado = await api.get(`/users?login=${usuario.toLowerCase()}`)
        return resultado.data[0]
    } catch (erro) {
        console.log(erro)
        return {}
    }
}