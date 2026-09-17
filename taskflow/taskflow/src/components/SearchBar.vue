<template>
  <div class="search-bar">
    <input
      class="search-bar__input"
      type="text"
      :placeholder="placeholder"
      @input="onInput"
      aria-label="Rechercher une tâche"
    />
  </div>
</template>

<script setup>
import { debounce } from '@/utils/debounce'

defineProps({
  placeholder: {
    type: String,
    default: 'Rechercher une tâche…'
  }
})

const emit = defineEmits(['search'])

// Le debounce est appliqué ici : on ne notifie le parent qu'une fois que
// l'utilisateur a arrêté de taper pendant 250ms, plutôt qu'à chaque touche.
const onInput = debounce((event) => {
  emit('search', event.target.value.trim().toLowerCase())
}, 250)
</script>

<style lang="scss" scoped>
.search-bar {
  margin-bottom: $space-4;

  &__input {
    width: 100%;
    padding: $space-2 $space-3;
    font-size: $font-size-base;
    border: 1px solid $color-border;
    border-radius: $radius-sm;

    @include focus-ring;
  }
}
</style>
