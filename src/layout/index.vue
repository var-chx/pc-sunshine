<template>
    <div>
        <sidebar class="sidebar-container" />
        <navbar />
        <app-main />
    </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
export default {
    name: 'Layout',

    components: { Navbar, Sidebar, AppMain },

    props: { },

    data () {
        return {

        }
    },

    watch: { },

    beforeCreate () {},

    create () {},

    beforeMount () {},

    mounted () {},

    beforeUpdate () {},

    updated () {},

    activated () {},

    deactivated () {},

    beforeDestroy () {},

    destroyed () {},

    methods: {},

}
</script>

<style lang='scss' scoped>

</style>
