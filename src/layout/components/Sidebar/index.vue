<template>
    <div>
        <logo v-if="showLogo" :collapse="isCollapse" />
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :default-active="activeMenu"
                :collapse="isCollapse"
                :background-color="variables.menuBg"
                :text-color="variables.menuText"
                :unique-opened="false"
                :active-text-color="variables.menuActiveText"
                :collapse-transition="false"
                mode="vertical"
            >
                <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Scrollbar, Menu } from 'element-ui'
import logo from './logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
export default {
    name: 'index',

    components: {
        logo,
        SidebarItem,
        ElScrollbar: Scrollbar,
        ElMenu: Menu,
    },

    props: { },

    computed: {
        ...mapGetters(['sidebar']),
        routes () {
            return this.$router.options.routes
        },
        showLogo () {
            return this.$store.state.settings.sidebarLogo
        },
        variables () {
            return variables
        },
        isCollapse () {
            return !this.sidebar.opened
        },
    },

}
</script>

<style lang='scss' scoped>

</style>
