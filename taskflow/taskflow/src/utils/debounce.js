// Évite de relancer un filtrage/recherche à chaque frappe : on attend une
// courte pause avant d'exécuter la fonction, ce qui réduit le nombre de
// re-rendus déclenchés pendant la saisie (optimisation de performance).
export function debounce(fn, delay = 250) {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
