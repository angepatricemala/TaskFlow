// Cette fonction appelle une API REST publique de test (JSONPlaceholder).
// C'est exactement ce type d'appel qu'on documente et vérifie avec Postman :
// GET https://jsonplaceholder.typicode.com/todos?_limit=8
const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=8'

const PRIORITIES = ['normale', 'normale', 'urgente']

export async function fetchTasks() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error(`Erreur API : ${response.status}`)
  }

  const data = await response.json()

  return data.map((item, index) => ({
    id: item.id,
    title: item.title,
    done: item.completed,
    priority: PRIORITIES[index % PRIORITIES.length]
  }))
}
