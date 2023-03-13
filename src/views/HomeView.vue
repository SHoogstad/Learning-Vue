<script setup lang="ts">
import {ref, watch} from "vue";
import { useStorage } from "@/composables/useStorage";

let food = useStorage('food')



</script>

<template>
  <main>
    <p>
      what is your favorite food? <input type="text" v-model="food">
    </p>
    <p> {{ food }} </p>
  </main>
</template>
