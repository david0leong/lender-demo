<template>
  <div>
    <b-nav pills>
      <b-nav-item :to="{ name: 'Teams' }" active-class="active">
        Teams
      </b-nav-item>
      <b-nav-item :to="{ name: 'Players' }" active-class="active">
        Players
      </b-nav-item>
    </b-nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
