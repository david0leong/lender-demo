<template>
    <div>
        <p>
            <router-link :to="{ name: 'Teams' }">Teams</router-link> |
            <router-link :to="{ name: 'Players' }">Players</router-link>
        </p>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>
