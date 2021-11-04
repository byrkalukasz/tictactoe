import Vue from 'vue'
import App from './App.vue'
import TicTacToe from './components/TicTactoe';
import Cell from './components/Cell';

Vue.component('tic-tac-toe', TicTacToe);
Vue.component('cell', Cell);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
