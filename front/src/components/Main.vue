<template>
  <div>
    <div class="hello">
      <input type="number" v-model="input" @keyup.enter="getNumberRoman(input)"/>
      <button type="button" v-on:click="getNumberRoman(input)">Send</button>
    </div>
    <div v-if="response.number">
      <h4>Result</h4>
      {{ response.number }}
    </div>
    <div v-if="response.error">
      <h4>Error</h4>
      {{ response.error }}
    </div>
  </div>
</template>

<script>

import { numberService } from "@/services/number.service";

export default {
  created() {
    this.setUpSse();
  },
  data: function() {
    return {
      input: 0,
      response: {
        number: '',
        error: ''
      },
    };
  },
  methods: {
    setUpSse() {
      let eventSource = new EventSource('/roman-numerals/sse');
      eventSource.onmessage = (event) => {
        this.response = JSON.parse(event.data);
      }
      eventSource.onerror = (event) => {
        this.response = JSON.parse(event.data);
      }
    },
    getNumberRoman(number) {
      const numberConverted = parseInt(number);
      numberService.getNumberInRoman(numberConverted);
    }
  }
}
</script>

<style scoped>
</style>
