<template>
  <div class="main-content" id="panel">
    <!--  Main header  -->
    <MainHeader />
    <!-- Main content -->
    <div class="container-fluid mt--11">
      <nuxt></nuxt>
      <!--  Main Footer  -->
      <MainFooter />
    </div>
  </div>
</template>

<script>
import MainHeader from "~/components/partials/MainHeader";
import MainFooter from "~/components/partials/MainFooter";

export default {
  components: {MainHeader, MainFooter},
  data: () => {
    return {}
  },
  mounted() {
    this.init();
  },
  methods: {
    init: () => {
    }
  },
}
</script>
