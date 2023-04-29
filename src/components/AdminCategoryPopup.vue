<template>
  <teleport to="body">
    <div class="popup-wraper">
      <div class="popup glassmorphism custom-shadow">
        <v-icon class="close-icon" name="md-close" scale="1.5" @click="closePopup" />
        <div class="popup-content">
          <h1>edit product</h1>
          <!-- Tutti i setting qui -->
        </div>
      </div>
    </div>
  </teleport>
</template>
  
<script setup>

defineProps({
  closePopup: Function
})
</script>

<style scoped>
.popup-wraper {
  background-color: rgb(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 4;
}

.popup {
  min-width: 60%;
  aspect-ratio: 2/1.3;
  border-radius: 1rem;
  padding: 1rem;
  padding-top: 4rem;

}

.close-icon {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  cursor: pointer;

}

.popup-content {
  display: flex;
  flex-direction: column;
}

h1 {
  font-weight: 300;
  text-transform: capitalize;
  align-self: center;
}
</style>