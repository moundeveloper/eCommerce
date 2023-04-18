<template>
  <div class="h-full flex justify-center">
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
      <button>Esplora</button>
    </div>
    <div class="right-part">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMKLi3j-EDHh86ytdhRM1rQh8S41CJ7RhSGTu5nyi11wlNZLMzl0G4JrUL5k8rFocFzI&usqp=CAU"
        alt="" />
      <div class="slider">aaaaaaaaaaaa</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';


const titleRef = ref(null);

onMounted(() => {
  const words = titleRef.value.split('');
  const spans = words.map(word => `<span>${word}</span>`);
  title.value = spans.join(' ');
  const letters = Array.from(titleRef.value.children);
  console.log(letters)

  gsap.set(letters, { y: '100%' });

  letters.forEach((letter, index) => {
    gsap.to(letter, { y: '0%', duration: 0.5, delay: index * 0.1 });
  });
});
</script>

<style scoped>
.h-full {
  justify-content: center;
  gap: 15rem;
  align-items: center;
}

.left-part {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: flex-start;
}

p {
  line-height: 1rem;
  font-weight: 200;
  font-size: 0.85rem;
  font-family: "Poppins", sans-serif;
}

button {
  padding: 0.3rem 1.5rem;
  border-radius: 10%;
  background-color: blueviolet;
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
