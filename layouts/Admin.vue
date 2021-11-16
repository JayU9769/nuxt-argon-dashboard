<template>
  <div>
    <SidebarNav/>
    <MainBodyContent/>
  </div>
</template>
<script>
import SidebarNav from "~/components/partials/SidebarNav";
import MainBodyContent from "~/components/partials/MainBodyContent";

export default {
  components: {SidebarNav, MainBodyContent},
  mounted() {
    this.init()
  },
  methods: {
    init: function () {
      let sideBarStatus = Boolean(localStorage.getItem('sideBar'));
      console.log(sideBarStatus)
      if (sideBarStatus !== this.sidebarPinned) {
        this.$store.dispatch('toggleSidebar');
      }
    },
    toggleBodyClass: function (addRemoveClass, className) {
      const el = document.body;
      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    toggleSideBar: function (value) {
      if (value) {
        this.toggleBodyClass('addClass', 'g-sidenav-show');
        this.toggleBodyClass('addClass', 'g-sidenav-pinned');
      } else {
        this.toggleBodyClass('removeClass', 'g-sidenav-show');
        this.toggleBodyClass('removeClass', 'g-sidenav-pinned');
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
      this.toggleSideBar(value)
    }
  }
}
</script>
