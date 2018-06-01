<template>
<div>
        <Card 
            v-for="artist of artists" 
            :artist="artist"
            :key="artist.key"
            :route="`/profile/${artist.key}`"
        />
</div>        
</template>

<script>
import Card from './Card.vue'

export default {
    computed: {
        artists () {
            return this.$store.state.artists
        },
        
    },
    components: {
        Card
    },
}
</script>

