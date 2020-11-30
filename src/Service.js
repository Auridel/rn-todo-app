class Service {
    static async getTodos () {
        try {
            return await req("https://rn-todo-app-4a127.firebaseio.com/todos.json");
        }catch (e) {
            console.log(e);
        }
    }
    static async deleteTodo (id) {
        try {
            return await req(`https://rn-todo-app-4a127.firebaseio.com/todos/${id}.json`, "DELETE");
        }catch (e) {
            console.log(e);
        }
    }
    static async updateTodo (id, title) {
        try {
            return await req(`https://rn-todo-app-4a127.firebaseio.com/todos/${id}.json`, "PATCH", {title});
        }catch (e) {
            console.log(e);
        }
    }
    static async addTodo (todo) {
        try {
            return await req("https://rn-todo-app-4a127.firebaseio.com/todos.json", "POST", {title: todo});
        }catch (e) {
            console.log(e);
        }
    }
}

async function req(url, method = "GET", data) {
    const config = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    }
    if(data) config.body = JSON.stringify(data);

    const res = await fetch(url, config);
    return await res.json();
}