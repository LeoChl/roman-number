<template>
  <div>
    <div class="hello">
      <input type="number" v-model="input" @keyup.enter="getNumberRoman(input)"/>
      <button type="button" v-on:click="getNumberRoman(input)">Send</button>
    </div>
    <div v-if="numberRoman">
      <h4>Result</h4>
      {{ numberRoman }}
    </div>
    <div v-if="errorMsg">
      <h4>Error</h4>
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
import { numberService } from "@/services/number.service";

export default {
  data: function() {
    return {
      input: 0,
      numberRoman: '',
      errorMsg: ''
    };
  },
  methods: {
    getNumberRoman(number) {
      const numberConverted = parseInt(number);
      numberService.getNumberInRoman(numberConverted).then((res) => {
        this.numberRoman = res.data.number;
        this.errorMsg = '';
      }).catch(error => {
        this.errorMsg = error.response.data.message;
        this.numberRoman = '';
      });
    }
  }
}
</script>

<style scoped>
</style>
