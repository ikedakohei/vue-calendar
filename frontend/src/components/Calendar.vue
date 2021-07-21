<template>
  <div>
    <h1 class="text-h1">Calendar</h1>
    <v-list>
      <v-list-item v-for="event in events" :key="event.id">
        {{ event.name }}
      </v-list-item>
    </v-list>
    <v-btn type="submit" @click="fetchEvents()">fetchEvent</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Calendar',
  computed: {
    ...mapGetters('events', ['events']),
  },
  methods: {
    ...mapActions('events', ['fetchEvents']),
  },
};
</script>
