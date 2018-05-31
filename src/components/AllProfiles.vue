<template>
    <div>
        <Profile
            v-for="artist in artists" 
            v-bind:artist="artist" 
            :key="artist.name"
      />
    </div>
</template>

<script>
import Profile from './Profile.vue'
export default {
    props: ["artists"],
    components: {
        Profile
    }
}
</script>
