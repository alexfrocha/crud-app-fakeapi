import api from "../api";

export async function pegarRepositorioDoUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`)
        return resultado.data
    } catch (erro) {
        console.log(erro)
        return []
    }
}

export async function salvarRepositorio(postId, nome, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            postId: postId,
            data: data,
            id: id
        })
        return 'Sucesso'
    } catch (error) {
        console.log(error)
        return 'Erro'
    }
}

export async function criarRepositorios(postId, nome, data) {
    try {
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId,
        })
        return 'Sucesso'
    } catch (error) {
        console.log(error)
        return 'Erro'
    }
}

export async function deletarRepositorio(id) {
    try {
        await api.delete(`/repos/${id}`)
        return 'Sucesso'
    } catch (error) {
        console.log(error)
        return 'Erro'
    }
}