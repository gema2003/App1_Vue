<template>
 <div>
 <ul class="list-group">
      <li v-for="(item, index) of arrayOrde" :key="item.id" @click="increase(index)" class="list-group-item d-flex justify-content-between align-items-center">
        {{index}} - {{item.name}}
        <span class="badge bg-primary rounded-pill">{{item.stock}}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block" @click="restart">Restart</button>
</div>
</template>

<script>

 import {mapState, mapMutations} from 'vuex';

export default {
  name: 'List',
  computed: {
   ...mapState(['products']),
   arrayOrde(state){
      return state.products.sort( (a , b) => b.stock - a.stock)
    }
  },
  methods: {
   ...mapMutations(['increase', 'restart'])
  }
}
</script>