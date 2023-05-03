<template>
  <div class="h-full flex flex-col my-12">
    <section class="h-full hero-section">
      <h1 ref="titleRef" class="hero-title">
        We are looking <br />
        to make you <br />
        Awesome.
      </h1>
      <p class="hero-title2">
        Eleva il tuo stile con la nostra collezione di magliette <br />
        personalizzate, create su misura per esprimere la tua unicità e il tuo
        <br />
        spirito creativo.
      </p>
      <router-link class="justify-self-start hero-title3" to="/customize-shirt"
        >Esplora</router-link
      >
      <ShowcaseSlider class="showcaseslider" />
      <div class="slider"></div>
    </section>

    <section class="h-full flex"></section>
  </div>

  <div class="container">
    <div class="big-one">1</div>
    <div class="three">3</div>
    <div class="two">2</div>
    <div class="four">4</div>
    <div class="five">5</div>
  </div>
  <div class="btn-show"><button>Show more</button></div>

  <div class="description">
    <h1 class="thoughts"><span>what people say</span><span>about us.</span></h1>
    <div class="both">
      <div class="box1">
        <span>“Non avevo mai ordinato una maglietta personalizzata prima</span
        ><span>d'ora, ma devo dire che l'esperienza sul tuo sito è stata</span>
        <span
          >fantastica! La maglietta è perfetta! La qualità del tessuto e della
        </span>
        <span>stampa è ottima, arrivata in meno di una settimana!</span>
        <span class="end">Maria DiBi</span>
      </div>
      <div class="box2"></div>
    </div>
  </div>

  <div class="scondo">
    <div class="circle-icon">
      <v-icon name="md-send" class="send-icon" fill="black" scale="1.5" />
    </div>
    <span class="promozione">Promozione</span>
    <h1 class="scondo-text">15% di sconto sul tuo primo ordine.</h1>
    <p class="paragraph">
      Dont waste your time but hurry now to get stylish with our clothes
      brand.<br />Our products are made of high italian quality in diffrent
      color,sizes,models.<br />
      So what are you waiting for ? Hurry up and you will get a 15% discount for
      the first product you buy
    </p>
    <div class="btn-show2"><button>Iscriviti</button></div>
  </div>
</template>

<script setup>
import ShowcaseSlider from "../components/ShowcaseSlider.vue";
</script>

<style scoped>
.h-full {
}
.hero-section {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr 0.3fr;
  justify-content: center;
  align-items: center;
}
.hero-title {
  grid-row: 1/2;
  grid-column: 2/3;
}
.hero-title2 {
  grid-row: 2/3;
  grid-column: 2/3;
}
.hero-title3 {
  grid-row: 3/4;
  grid-column: 2/3;
}
.showcaseslider {
  grid-row: 1/4;
  grid-column: 3/4;
}
.circle-icon {
  background-color: rgba(255, 255, 255, 0.61);
  border-radius: 50%;
  padding: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.container {
  display: grid;
  grid-template-columns: 1.1fr 0.8fr 1.1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 1px;
  grid-auto-flow: row;
  grid-template-areas:
    "big-one two three"
    "big-one four five";
  gap: 1.4rem;
  margin: 3.5rem;
}

.big-one {
  grid-area: big-one;
  background-color: rgba(218, 191, 240, 0.563);
  border-radius: 1rem;
}

.three {
  grid-area: three;
  background-color: rgba(218, 191, 240, 0.563);
  padding: 7rem 5rem;
  border-radius: 1rem;
}

.two {
  grid-area: two;
  background-color: rgba(218, 191, 240, 0.563);
  border-radius: 1rem;
}

.four {
  grid-area: four;
  background-color: rgba(218, 191, 240, 0.563);
  border-radius: 1rem;
}

.five {
  grid-area: five;
  background-color: rgba(218, 191, 240, 0.563);
  border-radius: 1rem;
}

button {
  background-color: rgb(104, 24, 104);
  border: none;
  padding: 10px 70px;
  border-radius: 0.6rem;
  margin: 10px;
}

.btn-show {
  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  display: flex;
}

.thoughts {
  display: flex;
  flex-direction: column;
  text-align: left;
  text-transform: uppercase;
  margin: 20px;
}
.box1 {
  display: flex;
  flex-direction: column;
  text-align: end;
  background-color: rgb(255, 255, 255);
  margin: 3rem;
  padding: 4rem 1rem;
  border-radius: 1rem;
  text-transform: uppercase;
  position: absolute;
  transform: translate(-2rem, -2rem);
}
.box1 span {
  display: flex;
  color: black;
}
.box2 {
  padding: 8rem 20rem;
  border: 4px solid rgb(0, 0, 0);
  border-radius: 1rem;
  margin: 6rem 3rem;
}
.end {
  margin: 15px;
}

.scondo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(218, 191, 240, 0.563);
  margin: 2.8rem;
  border-radius: 120px 20px 20px 20px;
  position: relative;
}
.btn-show2 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 3rem;
}
.scondo h1 {
  font-size: 2.5rem;
  font-weight: 1rem;
  font-family: sans-serif;
}

.promozione {
  color: rgba(255, 255, 255, 0.555);
}
.scondo-text {
  margin: 20px;
}

.paragraph {
  display: flex;
  flex-direction: column;
  max-width: 100ch;
  letter-spacing: 2px;
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
  background-color: var(--tertiary-color);
  border: transparent;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
}
.slider {
}

@media screen and (max-width: 900px) {
  .h-full {
    flex-direction: column;
    gap: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 5rem;
  }

  .hero-section {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 0.5fr 0.3fr;
  }
  .showcaseslider {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  .hero-title {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  .hero-title2 {
    grid-row: 3/4;
    grid-column: 1/2;
  }
  .hero-title3 {
    grid-row: 4/5;
    grid-column: 1/2;
  }
}
</style>
