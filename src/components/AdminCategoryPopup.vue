<template>
    <teleport to="body">
      <div class="popup" v-if="showPopup" @click="closePopup">
        <div class="popup-content">
          <h1>BugPopUp</h1>
          <slot></slot>
        </div>
      </div>
    </teleport>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const showPopup = ref(false);
  
  function openPopup() {
    console.log("Funziona");
    showPopup.value = true;
  }

  function closePopup() {
    showPopup.value = false;
  }
  defineExpose({openPopup})
</script>

<style scoped>

</style>