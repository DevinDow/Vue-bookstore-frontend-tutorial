<template>
  <div class="col book text-center">
    <img :src="image" />
    <p>{{ book.title }} - {{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: ['author', 'book'],
  data () {
    return {
      image: `http://via.placeholder.com/220x320?text=${encodeURIComponent(this.book.title)}`
    }
  },
  created () {
    this.pullImage()
  },
  methods: {
    async pullImage () {
      const response = await fetch(`http://api.duckduckgo.com/?q=${encodeURIComponent(this.book.title)}&format=json&pretty=1`)
      const json = await response.json()
      if (json.Image) {
        this.image = json.Image
      }
    }
  },
  computed: {
    price () {
      return `${this.book.price_cents / 100} ${this.book.price_currency}`
    }
  }
}
</script>

<style lang="scss" scoped>
.book {
  min-width: 220px;
  img {
    object-fit: cover;
    width: 100%;
    height: 320px;
  }
  cursor: pointer;
}
</style>
