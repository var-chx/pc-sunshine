<template>
    <div class="navbar">
        <hamburger-btn
            class="hambrger-btn-container"
        ></hamburger-btn>
        <breadcrumb class="breadcrumb-container"></breadcrumb>
    </div>
</template>

<script>
import HamburgerBtn from './HamburgerBtn'
import Breadcrumb from './Breadcrumb'
export default {
    name: 'Navbar',
    components: { HamburgerBtn, Breadcrumb },
}
</script>

<style lang='scss' scoped>
.navbar {
    height: 50px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .hambrger-btn-container {
        height: 100%;
        line-height: 50px;
        float: left;
        background-color: #fff;
        cursor: pointer;
        &:hover {
            background: rgba(0,0,0,.025);
        }
    }
    .breadcrumb-container {
        float: left;
    }
}
</style>
