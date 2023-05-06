<template>
  <teleport to="body">
    <div class="popup-wraper">
      <div class="popup glassmorphism custom-shadow">
        <v-icon class="close-icon" name="md-close" scale="1.5" @click="closePopup" />
        <div class="popup-content flex flex-col gap-5">
          <h1 v-if="popUpId === 'add-product'">add product</h1>
          <h1 v-else>edit product</h1>
          <!-- Tutti i setting qui -->
          <div class="edit-wrapper flex grow flex-col px-10 py-5 justify-between gap-5">

            <div class="settings flex flex-col gap-14 grow px-5 p-5">

              <div class="selection">
                <span>Nome prodotto</span>
                <input v-model="itemModel" type="text" class="glassmorphism" placeholder="T shirt male">
              </div>

              <div class="selection">
                <span>Prezzo prodotto</span>
                <input class="input-number glassmorphism" v-model="itemPrice" type="number" name="" id="">
              </div>

              <div class="selection">
                <span>Modello 3d:</span>
                <label for="img" class="flex gap-1 items-center">
                  <span>upload</span>
                  <v-icon name="md-fileupload-round" fill="var(--primary-color)" />
                </label>
                <input @change="set3dModel" type="file" id="img" name="3dmodel">
              </div>

              <div class="selection">
                <span>Image:</span>
                <label for="img" class="flex gap-1 items-center">
                  <span>upload</span>
                  <v-icon name="md-fileupload-round" fill="var(--primary-color)" />
                </label>
                <input @change="setImage" type="file" id="img-product" name="img-product">
              </div>

              <div class="selection">
                <span>Categoria prodotto</span>
                <DropDownMenu v-if="isPopUpDataNotNull()" :defaultValue="popUpData.category" :options="defaultCategories"
                  :emits="emits" @option-selected="handleCategory" />

                <DropDownMenu v-else :options="defaultCategories" :emits="emits" @option-selected="handleCategory" />
              </div>

              <div class="selection">
                <span>Nome mesh modello 3d</span>
                <input v-model="itemMesh" type="text" class="glassmorphism" placeholder="Nome mesh">
              </div>

              <div class="selection">
                <span>colori disponibili:</span>
                <ul>
                  <li v-for="(color, index) in itemColors" :key="color.name">
                    <input v-model="itemColors[index]" type="color" name="" id="" class="radio-btn"
                      :style="{ backgroundColor: color.hexValue }">
                  </li>
                </ul>
              </div>

              <div class="selection">
                <span>Taglie disponibili:</span>
                <ul>
                  <li v-for="size in defaultSizes" :key="size" class="size-product"
                    :class="{ 'active-size': selectedSizes.includes(size) }" @click="toggleSelected(size)">{{
                      size }} </li>
                </ul>
              </div>
              <div class="selection">
                <span>quantità prodotto:</span>
                <input class="input-number glassmorphism" v-model="itemQuantity" type="number" name="" id="">
              </div>
            </div>

            <div class="button-container">
              <button v-if="popUpId === 'add-product'" class="btn-action" @click="addProduct">add</button>
              <button v-else class="btn-action bg-[var(--tertiary-color)]" @click="saveProduct">save</button>
              <button class="btn-action glassmorphism" @click="closePopup">discard</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
  
<script setup>
import { useProductStore } from '../store/product';
import DropDownMenu from "./DropDownMenu.vue"
import { ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";

const store = useProductStore()
const emits = defineEmits(['option-selected', 'input-value']);
const defaultSizes = ['XXS',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'XXXL',
  '4XL',
  '5XL']

const defaultCategories = [{ label: 'Men', value: 'men' }, { label: 'Women', value: 'women' }, { label: 'Children', value: 'children' }]

const props = defineProps({
  closePopup: Function,
  popUpId: String,
  popUpData: Object
})

const itemQuantity = ref(0)
const itemPrice = ref(0)
const itemModel = ref("")
const item3dModel = ref("")
const itemMesh = ref("")
const itemImage = ref("")
const itemColors = ref(["#E52121", "#BEE521", "#21E558", "#695C6F", "#00B2FF"])
const itemCategory = ref("men")
const selectedSizes = ref(['XS',
  'S',
  'M',
  'L',
  'XL']);


const isPopUpDataNotNull = () => props.popUpData ?? false;

onMounted(() => {
  const product = props.popUpData
  if (product) {
    itemModel.value = product.model
    itemMesh.value = product.modelMesh
    selectedSizes.value = product.sizes
    itemPrice.value = product.price
    itemQuantity.value = product.amount
    item3dModel.value = product.model3d
    itemImage.value = product.image
    itemColors.value = product.colors
    itemCategory.value = product.category
  }
})

function handleCategory(data) {
  itemCategory.value = data.value
}

function toggleSelected(size) {
  if (isSelected(size)) {
    selectedSizes.value = selectedSizes.value.filter(s => s !== size)
  } else {
    selectedSizes.value.push(size)
  }
}

function isSelected(size) {
  return selectedSizes.value.includes(size)
}


/* const previewImg = async (event) => {
  if (event.length > 1) {
    alert('You can only select up to 5 files');
  }

  const file = event.target.value

  if (!file) {
    return;
  }

} */

function readFileAsDataURL(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

const setImage = async (event) => {
  if (event.length > 1) {
    alert('You can only select up to 5 files');
  }
  if (!file) {
    return;
  }

  const file = event.target.files[0];
  console.log("ewhquieh " + file)

  itemImage.value = await readFileAsDataURL(file)
}
const set3dModel = async (event) => {
  if (event.length > 1) {
    alert('You can only select up to 5 files');
  }

  const file = event.target.value
  console.log(file)
  if (!file) {
    return;
  }

}


const addProduct = () => {

  /* if (!(itemModel.value && item3dModel.value && itemMesh.value && itemImage.value)) return */
  const newProduct = {
    id: uuidv4(),
    model: itemModel.value,
    model3d: item3dModel.value,
    modelMesh: itemMesh.value,
    amount: itemQuantity.value,
    category: itemCategory.value,
    colors: itemColors.value,
    image: itemImage.value,
    sizes: selectedSizes.value,
    price: itemPrice.value
  }
  store.addProduct(newProduct)
  props.closePopup()
}

const saveProduct = () => {
  const newProduct = {
    id: props.popUpData.id,
    model: itemModel.value,
    model3d: item3dModel.value,
    modelMesh: itemMesh.value,
    amount: itemQuantity.value,
    category: itemCategory.value,
    colors: itemColors.value,
    image: itemImage.value,
    sizes: selectedSizes.value,
    price: itemPrice.value
  }
  store.saveProduct(newProduct)
  props.closePopup()
}

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
  min-width: 75%;
  height: 100vh;
  padding: 1rem;
  padding-top: 4rem;
  background-image: url("/assets/darker_decoration.svg");
  background-position: center;
}

.input-number {
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 0.5rem;
  width: 10ch;
  text-align: center;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.size-product {
  padding: 0.5rem 0.5rem;
  outline: 1px solid var(--primary-color);
  border-radius: 0.5rem;
  cursor: pointer;
}

.active-size {
  color: var(--primary-color);
  background-color: var(--secondary-color);
}

.close-icon {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  cursor: pointer;

}

.settings {
  overflow-y: auto;
}

.popup-content {
  display: flex;
}

h1 {
  font-weight: 300;
  text-transform: capitalize;
  align-self: center;
}

input[type="text"] {
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  flex-grow: 1;
  margin-left: 20rem;
  border: none;
  outline: none;
  border-bottom: 1px solid transparent;
  font-weight: 300;
}

::placeholder {
  color: var(--accent-color);

}

input[type="text"]:focus-visible {
  border-bottom-color: var(--primary-color);
}

label {
  cursor: pointer;
}

input[type="file"] {
  display: none;
}

.radio-btn {
  width: 1.7rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: transparent;
  outline: 1px solid var(--accent-color);
  cursor: pointer;
  font-weight: 300;
}

input[type="color"] {
  -webkit-appearance: none;
  border: none;
  outline: 1px solid var(--secondary-color);
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
}

.popup-content {
  height: 100%;
}

.edit-wrapper {
  overflow-y: auto;
}

.button-container {
  display: flex;

}

.btn-action {
  padding: 1rem 0;
  border: transparent;
  color: var(--primary-color);
  text-transform: capitalize;
  cursor: pointer;
  flex-grow: 1;
  border: 1px solid var(--primary-color);
}

.btn-action:first-child {
  background-color: var(--tertiary-color);
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}


.btn-action:last-child {
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.btn-action:active {
  outline: 1px solid var(--primary-color);
}

.selection {
  display: flex;
  justify-content: space-between;
}

.selection ul {
  display: flex;
  gap: 0.5rem;
}

span:first-child {
  font-weight: 400;
}
</style>