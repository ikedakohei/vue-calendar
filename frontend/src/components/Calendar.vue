<template>
  <div>
    <v-sheet height="6vh" class="d-flex align-center">
      <v-btn outliend small class="ma-4" @click="setToday">今日</v-btn>
      <v-btn icon @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-btn icon @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="94vh">
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        @change="fetchEvents"
        locale="ja-jp"
        :day-format="(timestamp) => new Date(timestamp.date).getDate()"
        :month-format="(timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'"
        @click:event="showEvent"
      ></v-calendar>
    </v-sheet>

    <v-dialog :value="event !== null">
      <div v-if="event !== null">
        <v-card>
          <h1>イベント詳細</h1>
          <p>name: {{ event.name }}</p>
          <p>start: {{ event.start }}</p>
          <p>end: {{ event.end }}</p>
          <p>timed: {{ event.timed }}</p>
          <p>description: {{ event.description }}</p>
          <p>color: {{ event.color }}</p>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { format } from 'date-fns';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Calendar',
  data: () => ({
    value: format(new Date(), 'yyyy/MM/dd'),
  }),
  computed: {
    ...mapGetters('events', ['events', 'event']),
    title() {
      return format(new Date(this.value), 'yyyy年 M月');
    },
  },
  methods: {
    ...mapActions('events', ['fetchEvents', 'setEvent']),
    setToday() {
      this.value = format(new Date(), 'yyyy/MM/dd');
    },
    showEvent({ event }) {
      this.setEvent(event);
    },
  },
};
</script>
