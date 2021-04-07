import _ from 'lodash'

export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
      pageCount: 0,
      allItems: [],
      tickets: []
    }
  },
  methods: {
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.tickets = this.allItems[this.page - 1] || this.allItems[0]
    },
    pageChangeHandler(page) {
      this.tickets = this.allItems[page - 1] || this.allItems[0]
    }
  }
}