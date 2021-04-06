import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: JSON.parse(localStorage.getItem('tickets') || '[]')
  },
  mutations: {
    createTicket(state, ticket) {
      state.tickets.push(ticket)
      localStorage.setItem('tickets', JSON.stringify(state.tickets))
    },
    closeTicket(state, id){
      const idx = state.tickets.findIndex(t => t.id === id);
      state.tickets[idx].status = 'Закрыто';
      localStorage.setItem('tickets', JSON.stringify(state.tickets))
    },
    openTicket(state, id){
      const idx = state.tickets.findIndex(t => t.id === id);
      state.tickets[idx].status = 'В обработке';
      localStorage.setItem('tickets', JSON.stringify(state.tickets))
    }
  },
  actions: {
    createTicket({commit}, ticket) {
      commit('createTicket', ticket)
    },
    closeTicket({commit}, id){
      commit('closeTicket', id)
    },
    openTicket({commit}, id){
      commit('openTicket', id)
    },
  },
  getters: {
    tickets: s => s.tickets,
    ticketById: s => id => s.tickets.find(t => t.id === id)
  }
})
