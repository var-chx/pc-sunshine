<template>
    <div>
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'AppMain',

}
</script>

<style lang='scss' scoped>

</style>
