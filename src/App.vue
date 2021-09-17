<template>
  <div id="app" class="container">
    <Headboard></Headboard>
    <List></List>
  </div>
</template>

<script>
import Headboard from './components/Headboard.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    Headboard,
    List
  }
}
</script>
