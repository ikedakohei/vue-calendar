<template>
  <v-card class="pb-12">
    <v-card-actions class="d-flex justify-end pa-2">
      <v-btn icon @click="closeDialog">
        <v-icon size="20px">mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <DialogSection icon="mdi-square" :color="event.color || 'blue'">
        <v-text-field v-model="name" label="タイトル"></v-text-field>
      </DialogSection>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DialogSection from './DialogSection';

export default {
  name: 'EventFormDialog',
  components: {
    DialogSection,
  },
  data: () => ({
    name: '',
  }),
  computed: {
    ...mapGetters('events', ['event']),
  },
  methods: {
    ...mapActions('events', ['setEvent', 'setEditMode']),
    closeDialog() {
      this.setEditMode(false);
      this.setEvent(null);
    },
  },
};
</script>
