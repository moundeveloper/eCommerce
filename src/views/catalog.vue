<template>
    <div class="flex flex-col items-center mt-10 gap-10">
        <h1>Catalogo</h1>
        <div class="boxes">
            <div class="box" v-for="shirt in tShirts" :key="shirt.model">
                <div class="img-wraper">
                    <img src="/assets/shirt.png" alt="" />
                </div>
                <span class="model">{{ shirt.model }}</span>
                <div class="flex justify-between"><span>Prezzo : </span><span>{{ shirt.price }} €</span></div>

                <button>more</button>
            </div>
        </div>
    </div>
</template>
<script setup>

const tShirts = [
    { model: "Women T-Shirt", price: 19.99, model3dPath: "/assets/shirt_female.gltf", meshName: "T_shirt_women" },
    { model: "Men T-Shirt", price: 21.99, model3dPath: "/assets/shirt_male.gltf", meshName: "T_shirt_male" },
    { model: "Child T-Shirt", price: 24.99, model3dPath: "/assets/shirt_child.gltf", meshName: "T_shirt_child" },
];
</script>

<style scoped>
.model {
    color: var(--secondary-color);
    align-self: center;
    font-weight: 700;
}

.img-wraper {
    max-width: 15rem;
    display: flex;
    justify-content: center;
}

.img-wraper img {
    width: 30rem;
}


span {
    color: var(--secondary-color);
    font-weight: 400;
}

h1 {
    color: var(--primary-color);
}

.title h2 {
    display: inline;
}

p {
    display: flex;
    color: var(--secondary-color);
}

.boxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 2.5rem 10rem;
    margin: 4rem 0;
}

.box {
    background-color: var(--primary-color);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    -webkit-box-shadow: 5px 5px 28px -10px #000000;
    -moz-box-shadow: 5px 5px 28px -10px #000000;
    -o-box-shadow: 5px 5px 28px -10px #000000;
    box-shadow: 5px 5px 28px -10px #000000;
}

button {
    padding: 0.7rem 0;
    width: 100%;
    border: transparent;
    background-color: var(--tertiary-color);
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: capitalize;
}
</style>