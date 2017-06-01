var card = new Vue({
  el: '#card',

  data: {
    title: 'Daily Plan',

    newItem: '',

    items: [

    ]
  },
  methods: {
    addItem(){

      const newEntry = {
        text: this.newItem,
      }

      if(this.newItem.length) {
        this.items.push(newEntry)
        this.newItem = ''
      }
    },
    deleteItem(index){
      this.items.splice(index,1)
    }
  }
})
