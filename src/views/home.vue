<template>
  <div class="h-full flex justify-center my-12">
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

</script>

<style scoped>
.h-full {
  justify-content: center;
  gap: 20rem;
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
}

p {
  font-weight: 200;
  font-size: 1.2rem;
  max-width: 30ch;
  font-family: "Poppins", sans-serif;
}

button {
  padding: 0.4rem 1.5rem;
  border-radius: 0.5rem;
  background-color: blueviolet;
  border: transparent;
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
