import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  products: [
    {name: 'iPhones', stock: 0},
    {name: 'MacBooks', stock: 0},
    {name: 'Apple Watchs', stock: 0}
   ]
  },
  mutations: {
   increase(state, index) {
    state.products[index].stock ++
   },
   restart(state) {
    state.products.forEach(elm => {
     elm.stock = 0
    });
   }
  },
  actions: {
  },
  modules: {
  }
})
