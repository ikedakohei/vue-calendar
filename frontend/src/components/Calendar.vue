<template>
  <div>
    <v-sheet height="100vh">
      <v-calendar v-model="value" :events="events" @change="fetchEvents"></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Calendar',
  data: () => ({
    value: new Date('2021/07/01'),
  }),
  computed: {
    ...mapGetters('events', ['events']),
  },
  methods: {
    ...mapActions('events', ['fetchEvents']),
  },
};
</script>
