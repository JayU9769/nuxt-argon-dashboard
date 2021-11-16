<template>
  <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner" @mouseenter="handleMouseIn" @mouseleave="handleMouseOut">
      <!-- Brand -->
      <div class="sidenav-header  d-flex  align-items-center">
        <a class="navbar-brand" href="#" v-if="showLabel">
          <img :src="require('@/static/img/brand/dark.svg')" height="40" class="navbar-brand-img" alt="..." />
        </a>
        <div class=" ml-auto ">
          <!-- Sidenav toggler -->
          <div class="sidenav-toggler d-none d-xl-block" data-action="sidenav-unpin" @click="$store.dispatch('toggleSidebar')" data-target="#sidenav-main">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-inner">
        <div  id="sidenav-collapse-main" class="accordion" role="tablist">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" v-b-toggle.dashboard-items data-toggle="collapse" role="button" aria-expanded="true" aria-controls="navbar-dashboards">
                <i class="ni ni-shop text-primary"></i>
                <span class="nav-link-text" v-if="showLabel">Dashboards</span>
              </a>
              <b-collapse id="dashboard-items" accordion="my-accordion">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link
                      to="/"
                      class="nav-link"
                    >
                      <span class="sidenav-mini-icon"> D </span>
                      <span class="sidenav-normal" v-if="showLabel"> Dashboard </span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/about"
                      class="nav-link"
                    >
                      <span class="sidenav-mini-icon"> A </span>
                      <span class="sidenav-normal" v-if="showLabel"> About </span>
                    </router-link>
                  </li>
                </ul>
              </b-collapse>
            </li>
            <li class="nav-item">
              <a class="nav-link"  v-b-toggle.examples-items data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-examples">
                <i class="ni ni-ungroup text-orange"></i>
                <span class="nav-link-text" v-if="showLabel" >Examples</span>
              </a>
              <b-collapse id="examples-items" accordion="my-accordion">
                <ul class="nav nav-sm flex-column">
                  <li class="nav-item">
                    <router-link
                      to="/login"
                      class="nav-link"
                    >
                      <span class="sidenav-mini-icon"> L </span>
                      <span class="sidenav-normal" v-if="showLabel"> Login </span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/register"
                      class="nav-link"
                    >
                      <span class="sidenav-mini-icon"> R </span>
                      <span class="sidenav-normal" v-if="showLabel"> Register </span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <a href="../../pages/examples/profile.html" class="nav-link">
                      <span class="sidenav-mini-icon"> P </span>
                      <span class="sidenav-normal" v-if="showLabel"> Profile </span>
                    </a>
                  </li>
                </ul>
              </b-collapse>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data : () => {
    return {
      showLabel: false
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function() {
      if (this.sidebarPinned) {
        this.showLabel = true;
      }
    },
    handleMouseIn: function () {
      if (!this.sidebarPinned) {
        this.showLabel = true;
      }
    },
    handleMouseOut: function () {
      if (!this.sidebarPinned) {
        this.showLabel = false
      }
    }
  },
  computed: {
    sidebarPinned() {
      return this.$store.state.sidebarPinned;
    }
  },
  watch: {
    sidebarPinned : function(value) {
      if (value) {
        this.showLabel = true;
      }
    }
  }
}
</script>
