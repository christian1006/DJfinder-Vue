<template>
<div>
        <Card 
            v-for="artist in store.local_state" 
            :key="artist.key"
            :store="store"
        />
</div>        
</template>

<script>
import Card from './Card.vue'
import store from '../store.js'

export default {
    data: function() {
            return { store }
        },
    components: {
        Card
  },
}
</script>

