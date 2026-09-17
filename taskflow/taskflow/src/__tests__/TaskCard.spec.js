import { mount } from '@vue/test-utils'
import TaskCard from '@/components/TaskCard.vue'

const baseTask = {
  id: 1,
  title: 'Préparer la revue de code',
  priority: 'normale',
  done: false
}

describe('TaskCard', () => {
  it('affiche le titre de la tâche', () => {
    const wrapper = mount(TaskCard, { props: { task: baseTask } })
    expect(wrapper.text()).toContain('Préparer la revue de code')
  })

  it('affiche le badge "À faire" quand la tâche n’est pas terminée', () => {
    const wrapper = mount(TaskCard, { props: { task: baseTask } })
    expect(wrapper.find('.task-card__badge').text()).toBe('À faire')
  })

  it('applique le modificateur BEM --done quand la tâche est terminée', () => {
    const wrapper = mount(TaskCard, { props: { task: { ...baseTask, done: true } } })
    expect(wrapper.find('.task-card__badge').classes()).toContain('task-card__badge--done')
  })

  it('émet "toggle" avec l’id de la tâche au clic sur le bouton', async () => {
    const wrapper = mount(TaskCard, { props: { task: baseTask } })
    await wrapper.find('.task-card__toggle').trigger('click')
    expect(wrapper.emitted('toggle')[0]).toEqual([1])
  })

  it('applique le modificateur --urgent pour une tâche urgente', () => {
    const wrapper = mount(TaskCard, { props: { task: { ...baseTask, priority: 'urgente' } } })
    expect(wrapper.classes()).toContain('task-card--urgent')
  })
})
