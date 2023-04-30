<template>
    <div class="my-10 flex flex-col gap-5">
        <div class="flex justify-between">
            <div class="flex gap-10 glassmorphism w-[fit-content] px-4 py-2 rounded-lg">
                <span>ordina per</span>
                <button>data</button>
                <button>costo</button>
                <button>quantità</button>
            </div>

            <div class="flex gap-10 glassmorphism w-[fit-content] px-4 py-2 rounded-lg">
                <span>
                    carrelli: {{ store.getCartHistory.length }}
                </span>
            </div>
        </div>

        <div class="history-cart-item glassmorphism flex gap-10" v-for="cartHistoryItem in store.getCartHistory"
            :key="cartHistoryItem.id">
            <!-- Left section -->
            <div class="flex flex-col gap-5 grow">
                <div class="cart-item" v-for="cartItem in cartHistoryItem.cart" :key="cartItem.id">
                    <img :src="cartItem.image" alt="">
                    <div class="grow flex flex-col gap-2">
                        <div class="flex justify-between">
                            <span>model:</span>
                            <span>{{ cartItem.model }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>color:</span>
                            <div :style="{ backgroundColor: decimalToHexColor(cartItem.color) }"
                                class="w-[3rem] h-[1.5rem] rounded-lg" :id="cartItem.color"
                                @click="copyColor(cartItem.color)"></div>
                        </div>
                        <div class="flex justify-between">
                            <span>taglia:</span>
                            <span>{{ cartItem.size }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>quantità:</span>
                            <span>{{ cartItem.amount }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>prezzo singolo:</span>
                            <span>{{ cartItem.singlePrice }}€</span>
                        </div>
                        <div class="flex justify-between">
                            <span>costo totale:</span>
                            <span>{{ cartItem.totalPrice }}€</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right section -->
            <div class="flex flex-col w-[30rem] p-4 gap-4">
                <div class="flex justify-between">
                    <span>items</span>
                    <span>{{ cartHistoryItem.cartItemLength }}</span>
                </div>
                <div class="flex justify-between">
                    <span>data di pagamento</span>
                    <span>{{ cartHistoryItem.date }}</span>
                </div>
                <div class="flex justify-between">
                    <span>costo totale</span>
                    <span>{{ cartHistoryItem.totalPrice }}€</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '../store/cart';
const store = useCartStore()
store.loadCartHistory()

function decimalToHexColor(decimalColor) {
    // Convert the decimal color value to hexadecimal
    const hexColor = decimalColor.toString(16);

    // Pad the hexadecimal color value with zeros if necessary
    const paddedHexColor = hexColor.padStart(6, '0');

    // Return the hexadecimal color value with the "#" prefix
    return `#${paddedHexColor}`;
}

const copyColor = (colorId) => {
    const colorValue = document.getElementById(colorId).style.backgroundColor;

    // Create a temporary input element to hold the color value
    const tempInput = document.createElement('input');
    tempInput.setAttribute('value', colorValue);

    // Add the temporary input element to the DOM
    document.body.appendChild(tempInput);

    // Select the value of the temporary input element
    tempInput.select();

    // Copy the selected value to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element from the DOM
    document.body.removeChild(tempInput);
};
</script>

<style scoped>
.history-cart-item {
    border-radius: 1rem;
    padding: 2rem;
}

span {
    font-weight: 300;
    text-transform: capitalize;
}

.cart-item {
    display: flex;
    flex-grow: 1;
    gap: 2rem;
    border-bottom: 1px solid var(--accent-color);
    align-items: center;
    padding: 1rem;
}

img {
    width: 14rem;
}
</style>