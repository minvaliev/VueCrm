<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link
            v-for="link in links"
            :to="link.url"
            :key="link.url"
            custom
            v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li :class="{'active': isActive, 'exact-active': isExactActive}">
        <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">
          {{link.title}}
        </a>
      </li>
    </router-link>

  </ul>
</template>

<script>
  import localizeFilter from "../../filters/localize.filter";

  export default {
    name: "Sidebar",
    props:['isOpen'],
    data: () => ({
      links: [
        {title: localizeFilter('Menu_Bill'), url: '/'},
        {title: localizeFilter('Menu_History'), url: '/history'},
        {title: localizeFilter('Menu_Planning'), url: 'planning'},
        {title: localizeFilter('Menu_NewRecord'), url: 'record'},
        {title: localizeFilter('Menu_Categories'), url: 'categories'},
      ]
    })
  }
</script>

<style scoped>
</style>