<template>
  <ul class="task-list">
    <TaskCard
      v-for="task in tasks"
      :key="task.id"
      v-memo="[task.done, task.title]"
      :task="task"
      @toggle="$emit('toggle', $event)"
    />

    <li v-if="tasks.length === 0" class="task-list__empty">
      Aucune tâche ne correspond à ta recherche.
    </li>
  </ul>
</template>

<script setup>
import TaskCard from './TaskCard.vue'

defineProps({
  tasks: {
    type: Array,
    required: true
  }
})

defineEmits(['toggle'])
</script>

<style lang="scss" scoped>
.task-list {
  margin: 0;
  padding: 0;

  &__empty {
    list-style: none;
    text-align: center;
    color: $color-text-muted;
    padding: $space-5 0;
  }
}
</style>
