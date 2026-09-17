<template>
  <section class="stats-view">
    <h1 class="stats-view__title">Statistiques</h1>
    <p class="stats-view__note">
      Cette page est chargée en lazy loading (import dynamique dans le routeur) :
      son code n'est téléchargé que si l'utilisateur clique sur "Statistiques",
      ce qui réduit la taille du bundle initial.
    </p>
    <router-link class="stats-view__back" to="/">← Retour aux tâches</router-link>
  </section>
</template>

<style lang="scss" scoped>
.stats-view {
  &__title {
    margin: 0 0 $space-2;
  }

  &__note {
    color: $color-text-muted;
    margin-bottom: $space-4;
  }

  &__back {
    color: $color-primary;
  }
}
</style>
