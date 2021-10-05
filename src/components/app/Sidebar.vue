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
  export default {
    name: "Sidebar",
    props:['isOpen'],
    data: () => ({
      links: [
        {title: 'Счет', url: '/'},
        {title: 'История', url: '/history'},
        {title: 'Планирование', url: 'planning'},
        {title: 'Новая запись', url: 'record'},
        {title: 'Категории', url: 'categories'},
      ]
    })
  }
</script>

<style scoped>
</style>