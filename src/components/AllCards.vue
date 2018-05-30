<template>
<div>
        <Card 
            v-for="artist in artists" 
            v-bind:artist="artist" 
            :key="artist.key"
        />
</div>        
</template>

<script>
import Card from './Card.vue'
export default {
    components: {
        Card
  },
}
</script>

