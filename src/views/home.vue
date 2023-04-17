<template>
  <div class="h-full flex justify-center">
    <div class="custom-container">
      <div class="left-part">
        <h1>
          We are looking <br />
          to make you <br />
          Awesome
        </h1>
        <p>
          Eleva il tuo stile con la nostra collezione di magliette <br />
          personalizzate, create su misura per esprimere la tua unicità e il tuo
          <br />
          spirito creativo.
        </p>
      </div>
      <div class="right-part">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMKLi3j-EDHh86ytdhRM1rQh8S41CJ7RhSGTu5nyi11wlNZLMzl0G4JrUL5k8rFocFzI&usqp=CAU"
          alt=""
        />
        <div class="slider"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.custom-container {
  display: flex;
  justify-content: space-around;

  width: 70rem;
}
.left-part {
  gap: 30rem;
  margin-top: 12rem;
}
h1 {
  font-size: 45px;
  font-family: Volkhov;
  font-weight: 500;
}
p {
  line-height: 1rem;
  font-weight: 200;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
}
.right-part {
  margin-top: 12rem;
  flex-direction: column;
  align-items: center;
}
.slider {
}
</style>
