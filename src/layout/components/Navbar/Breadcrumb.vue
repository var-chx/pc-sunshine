<template>

    <el-breadcrumb class="nav-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item
                v-for="item in itemList"
                :key="item.path"
            >{{item.meta.title}}</el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from 'element-ui'
export default {
    name: 'breadcrumb',

    components: {
        ElBreadcrumb: Breadcrumb,
        ElBreadcrumbItem: BreadcrumbItem,
    },

    data () {
        return {
            itemList: null,
        }
    },

    watch: {
        $route () {
            this.getBreadcrumb()
        },
    },

    created () {
        this.getBreadcrumb()
    },

    methods: {
        getBreadcrumb () {
            const matched = this.$route.matched
            this.itemList = matched
        },
    },

}
</script>

<style lang='scss' scoped>
.nav-breadcrumb {
    height: 50px;
    line-height: 50px;
    margin-left: 8px;
}
</style>
