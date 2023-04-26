<template>
  <div class="h-full flex flex-col my-12">
    <section class="h-full flex">
      <div class="left-part">
        <h1 ref="titleRef">
          We are looking <br />
          to make you <br />
          Awesome.
        </h1>
        <p>
          Eleva il tuo stile con la nostra collezione di magliette <br />
          personalizzate, create su misura per esprimere la tua unicità e il tuo
          <br />
          spirito creativo.
        </p>
        <router-link to="/customize-shirt">Esplora</router-link>
      </div>
      <div class="right-part">
        <ShowcaseSlider />
        <div class="slider"></div>
      </div>
    </section>

    <section class="h-full flex">
      <h1>hey</h1>
    </section>

  </div>
</template>

<script setup>
import ShowcaseSlider from '../components/ShowcaseSlider.vue';
</script>

<style scoped>
.h-full {
  justify-content: center;
  align-items: center;
}

.left-part {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: flex-start;
}

h1 {
  font-size: clamp(3rem, 4vw, 3.5rem);
  font-weight: 400;
}

p {
  font-weight: 100;
  font-size: 1.2rem;
  max-width: 30ch;
  font-family: "Poppins", sans-serif;
}

section a {
  padding: 0.4rem 1.5rem;
  border-radius: 0.5rem;
  background-color: blueviolet;
  border: transparent;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
}

.right-part {
  flex-direction: column;
  align-items: center;
}

.slider {}

@media screen and (max-width: 900px) {
  .h-full {
    flex-direction: column;
    gap: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 5rem;
  }

  .left-part {
    padding-top: 2rem;
  }

  .right-part {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
}
</style>
