<template>
  <teleport to="body">
    <div class="popup-wraper">
      <div class="popup glassmorphism custom-shadow">
        <v-icon class="close-icon" name="md-close" scale="1.5" @click="closePopup" />
        <div class="popup-content flex flex-col">
          <h1>edit product</h1>
          <!-- Tutti i setting qui -->
          <div class="edit-wrapper flex grow flex-col">
            <div class="selection">
                <span >colors:</span>
                <ul>
                    <li v-for="color in defaultColors" :key="color.name" class="radio-btn"
                        :style="{ backgroundColor: color.hexValue }" ></li>
                </ul>
            </div>

            <div class="selection">
                <span>size:</span>
                <ul>
                    <li v-for="size in defaultSizes" :key="size" :class="{ 'active-size': size === activeSize }"
                        class="radio-btn  grid place-items-center" >{{
                            size }}</li>
                </ul>
            </div>

            <div class="selection">
                <span>quantità:</span>
                <CustomInputNumber :emits="emits" @input-value="handleInputNumber" />
            </div>

            <button class="selection">add:</button>
             
        </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
  
<script setup>

defineProps({
  closePopup: Function
})
import CustomInputNumber from "../components/CustomInputNumber.vue"
const defaultColors = [{
    hexValue: "#E52121",
    value: 0xE52121
},
{
    hexValue: "#BEE521",
    value: 0xBEE521
},
{
    hexValue: "#21E558",
    value: 0x21E558
},
{
    hexValue: "#695C6F",
    value: 0x695C6F
},
{
    hexValue: "#00B2FF",
    value: 0x00B2FF
},
]
const defaultSizes = ["XS", "S", "M", "L", "XL"]

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
;
}

h1 {
  font-weight: 300;
  text-transform: capitalize;
  align-self: center;
}
.radio-btn {
    width: 1.7rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: transparent;
    outline: 1px solid var(--secondary-color);
    cursor: pointer;
    font-weight: 300;
    color: var(--secondary-color);
}
.popup-content{
  height: 100%;
}
.edit-wrapper{

  gap: 3.5rem;
  

}
.selection{
  display: flex;
  justify-content: space-between;
  
  
}
ul{
  display: flex;
  align-items: center;
}

button{
  
  justify-self: flex-end;
  width: 4rem;
  color: var(--secondary-color);
}

</style>