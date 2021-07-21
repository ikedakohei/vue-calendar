<template>
  <div>
    <h1>CalendarDetails</h1>
    <div v-for="event in events" :key="event.id">
      <h2>{{ event.name }}</h2>
      <p>start: {{ event.start }}</p>
      <p>end: {{ event.end }}</p>
      <p>description: {{ event.description }}</p>
    </div>

    <button type="submit" @click="fetchEvents()">fetchEvent</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CalendarDetails',
  computed: {
    ...mapGetters('events', ['events'])
  },
  methods: {
    ...mapActions('events', ['fetchEvents'])
  },
};
</script>
