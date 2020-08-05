<template>
    <div :class="classObj">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <navbar />
            <app-main />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar, Sidebar, AppMain } from './components'
export default {
    name: 'Layout',

    components: { Navbar, Sidebar, AppMain },

    props: { },

    data () {
        return {

        }
    },

    computed: {
        ...mapGetters(['sidebar']),
        classObj () {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                // mobile: this.device === 'mobile',
            }
        },
    },

}
</script>

<style lang='scss' scoped>
.hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }
</style>
