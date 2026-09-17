<template>
  <!--
    Nomenclature BEM :
    .task-card               -> bloc
    .task-card__title        -> élément
    .task-card__badge        -> élément
    .task-card__badge--done  -> modificateur (état "terminé")
    .task-card--urgent       -> modificateur sur le bloc lui-même
  -->
  <li
    class="task-card"
    :class="{ 'task-card--urgent': task.priority === 'urgente' }"
  >
    <img
      v-if="task.icon"
      class="task-card__icon"
      :src="task.icon"
      :alt="task.title"
      loading="lazy"
      width="32"
      height="32"
    />

    <div class="task-card__body">
      <p class="task-card__title">{{ task.title }}</p>
      <p class="task-card__meta">{{ task.priority }}</p>
    </div>

    <span
      class="task-card__badge"
      :class="{ 'task-card__badge--done': task.done }"
    >
      {{ task.done ? 'Terminée' : 'À faire' }}
    </span>

    <button
      class="task-card__toggle"
      type="button"
      @click="$emit('toggle', task.id)"
    >
      {{ task.done ? 'Réouvrir' : 'Marquer fait' }}
    </button>
  </li>
</template>

<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
})

defineEmits(['toggle'])
</script>

<style lang="scss" scoped>
.task-card {
  display: flex;
  align-items: center;
  gap: $space-3;
  padding: $space-3;
  margin-bottom: $space-2;
  list-style: none;

  @include card-surface;

  &--urgent {
    border-left: 4px solid $color-danger;
  }

  &__icon {
    border-radius: $radius-sm;
    flex-shrink: 0;
  }

  &__body {
    flex: 1;
    min-width: 0; // nécessaire pour que la troncature fonctionne dans un flex item
  }

  &__title {
    margin: 0;
    font-weight: 600;

    @include truncate;
  }

  &__meta {
    margin: 2px 0 0;
    font-size: $font-size-sm;
    color: $color-text-muted;
  }

  &__badge {
    font-size: $font-size-sm;
    padding: 2px $space-2;
    border-radius: 999px;
    background: $color-border;
    color: $color-text-muted;
    white-space: nowrap;

    &--done {
      background: rgba($color-primary, 0.15);
      color: $color-primary-dark;
    }
  }

  &__toggle {
    border: 1px solid $color-border;
    background: $color-surface;
    border-radius: $radius-sm;
    padding: $space-1 $space-2;
    font-size: $font-size-sm;
    cursor: pointer;

    @include focus-ring;

    &:hover {
      background: $color-bg;
    }
  }
}
</style>
