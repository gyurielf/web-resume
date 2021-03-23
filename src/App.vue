<template>
    <div class="grid">
        <the-navigation></the-navigation>
        <router-view class="mt-3"></router-view>
    </div>
</template>
<script>
import TheNavigation from '@/components/nav/TheNavigation';

export default {
    name: 'App',
    components: { TheNavigation }
};
</script>

<style></style>
