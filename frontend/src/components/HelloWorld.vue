<template>
  <div>
    <div v-if="visibility">
      <p>visibility: true</p>
      <p>{{ message }}</p>
      <input v-model="message">
    </div>
    <div v-else>
      <p>visibility: false</p>
    </div>

    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.text }}
        </li>
      </ul>
    </div>

    <button @click="clickedEvent()">ボタン</button>
    <p>{{ greeting }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['greeting'],
  data: () => ({
    message: 'Hello World!',
    visibility: true,
    items: [
      { id: 1, text: 'アイテム1' },
      { id: 2, text: 'アイテム2' },
      { id: 3, text: 'アイテム3' },
    ],
  }),
  methods: {
    clickedEvent() {
      console.log('clicked!');
    },
  }
};
</script>
