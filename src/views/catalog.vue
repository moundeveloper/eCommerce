<template>
    <div class="flex flex-col mt-10 gap-5">
        <h1 class="self-center">Catalogo</h1>
        <div class="cards">

            <!-- Card template -->
            <div class="card glassmorphism custom-shadow " v-for="shirt in tShirts" :key="shirt.model">
                <span class="model">{{ shirt.model }}</span>
                <div class="img-wraper">
                    <img :src="shirt.imageModel" alt="" />
                </div>
                <div class="flex justify-between"><span>Prezzo : </span><span>{{ shirt.price }} €</span></div>

                <router-link :to="{ name: 'customize-shirt', query: shirt }">more</router-link>
            </div>
            <!-- End Card template -->
        </div>
    </div>
</template>
<script setup>

const tShirts = [
    { model: "Women T-Shirt", price: 19.99, model3dPath: "/assets/shirt_female.gltf", meshName: "T_shirt_women", imageModel: "/assets/shirt_female_image.png" },
    { model: "Men T-Shirt", price: 21.99, model3dPath: "/assets/shirt_male.gltf", meshName: "T_shirt_male", imageModel: "/assets/shirt_male_image.png" },
    { model: "Child T-Shirt", price: 24.99, model3dPath: "/assets/shirt_child.gltf", meshName: "T_shirt_child", imageModel: "/assets/shirt_child_image.png" },
];
</script>

<style scoped>
.model {
    align-self: center;
    font-size: 1.5rem;
}

.img-wraper {
    max-width: 15rem;
    display: flex;
    justify-content: center;
    align-self: center;
}

.img-wraper img {
    width: 30rem;
}


span {
    color: var(--primary-color);
    font-weight: 100;
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

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, 19rem);
    justify-content: center;
    grid-auto-flow: row;
    gap: 2.5rem 10rem;
    margin: 4rem 0;
}

.card {
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

}

a {
    padding: 0.7rem 0;
    width: 100%;
    text-align: center;
    border: transparent;
    text-decoration: none;
    background-color: var(--tertiary-color);
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 300;
    text-transform: capitalize;
}
</style>