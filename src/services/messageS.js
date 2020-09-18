const _url = 'http://localhost:2000/api'

/**
 * Obtenemos los mensajes que se tienen en la base de datos
 */
export async function getMessages() {
    const response = await fetch(`${_url}/messages`);
    const responseJson =  await response.json()
    return responseJson
}

/**
 * agregamos un nuevo comentario 
 * @param {*} message 
 */
export async function saveMessage(message) {
    const response = await fetch(`${_url}/savemessages`, {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(message)
    })
    const responseJson = await response.json()
    return responseJson;
}

export async function updateMessages(id, content) {
    const response = await fetch(`${_url}/updmessages/${id}`, {
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(content)
    });

    const responseJson = await response.json();
    return responseJson;
}

export default {
    getMessages
}