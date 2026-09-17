<template>
  <section class="home-view">
    <h1 class="home-view__title">TaskFlow</h1>
    <p class="home-view__subtitle">Petit gestionnaire de tâches — démo Vue 3 + SCSS/BEM.</p>

    <SearchBar @search="query = $event" />

    <p v-if="loading" class="home-view__status">Chargement des tâches…</p>
    <p v-else-if="error" class="home-view__status home-view__status--error">
      Impossible de charger les tâches ({{ error }}).
    </p>

    <TaskList v-else :tasks="filteredTasks" @toggle="toggleTask" />
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import TaskList from '@/components/TaskList.vue'
import { fetchTasks } from '@/api/tasksApi'

const tasks = ref([])
const query = ref('')
const loading = ref(true)
const error = ref(null)

const filteredTasks = computed(() => {
  if (!query.value) return tasks.value
  return tasks.value.filter((t) => t.title.toLowerCase().includes(query.value))
})

function toggleTask(id) {
  const task = tasks.value.find((t) => t.id === id)
  if (task) task.done = !task.done
}

onMounted(async () => {
  try {
    tasks.value = await fetchTasks()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<style lang="scss" scoped>
.home-view {
  &__title {
    margin: 0 0 $space-1;
  }

  &__subtitle {
    margin: 0 0 $space-4;
    color: $color-text-muted;
  }

  &__status {
    color: $color-text-muted;

    &--error {
      color: $color-danger;
    }
  }
}
</style>
