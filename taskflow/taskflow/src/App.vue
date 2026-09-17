<template>
  <div class="app-shell">
    <nav class="app-nav">
      <router-link class="app-nav__link" to="/">Tâches</router-link>
      <router-link class="app-nav__link" to="/stats">Statistiques</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.app-nav {
  display: flex;
  gap: $space-4;
  margin-bottom: $space-5;

  &__link {
    color: $color-text-muted;
    text-decoration: none;
    font-weight: 600;

    &.router-link-active {
      color: $color-primary;
    }
  }
}
</style>
