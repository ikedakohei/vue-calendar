import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const state = {
  events: [],
  event: null,
  isEditMode: false,
};

const getters = {
  events: (state) =>
    state.events.map((event) => {
      return {
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      };
    }),
  event: (state) =>
    state.event
      ? {
          ...state.event,
          start: new Date(state.event.start),
          end: new Date(state.event.end),
        }
      : null,
  isEditMode: (state) => state.isEditMode,
};

const mutations = {
  setEvents: (state, events) => (state.events = events),
  setEvent: (state, event) => (state.event = event),
  setEditMode: (state, bool) => (state.isEditMode = bool),
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(`${apiUrl}/events`);
    commit('setEvents', response.data);
  },
  setEvent({ commit }, event) {
    commit('setEvent', event);
  },
  setEditMode({ commit }, bool) {
    commit('setEditMode', bool);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
