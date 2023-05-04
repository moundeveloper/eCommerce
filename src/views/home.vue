<template>
  <div class="h-full flex flex-col my-12 gap-10 px-5">
    <section class="hero-section">
      <h1 ref="titleRef" class="hero-title">
        We are looking
        to make you
        Awesome.
      </h1>
      <div class="hero-content flex flex-col gap-5">
        <p>
          Eleva il tuo stile con la nostra collezione di magliette <br />
          personalizzate, create su misura per esprimere la tua unicità e il tuo
          <br />
          spirito creativo.
        </p>
        <router-link to="/customize-shirt">Esplora</router-link>
      </div>

      <ShowcaseSlider class="showcaseslider" />
      <div class="slider"></div>
    </section>

    <section class="flex flex-col gap-5">
      <div class="products-showcase">
        <div class="big-one">1</div>
        <div class="three">3</div>
        <div class="two">2</div>
        <div class="four">4</div>
        <div class="five">5</div>
      </div>
      <router-link to="/catalog" class="self-center cursor-pointer">Show more</router-link>
    </section>

    <section class="testimonial flex text-[2rem] justify-center gap-30">
      <h2 class="capitalize">
        <span class="font-light">what people say</span>
        <br>
        <span class="font-light">about us.</span>
      </h2>
      <div class="testimonial-card glassmorphism custom-shadow">
        <p>“Non avevo mai ordinato una maglietta personalizzata prima</p>
        <p>d'ora, ma devo dire che
          l'esperienza
          sul tuo sito è stata</p>
        <p>fantastica! La maglietta è perfetta! La qualità del tessuto e della
        </p>
        <p>stampa è ottima, arrivata in meno di una settimana!</p>
        <p class="end">Maria DiBi</p>
      </div>
    </section>

    <section>
      <div class="sconto glassmorphism custom-shadow">
        <div class="circle-icon">
          <v-icon name="md-send" class="send-icon" fill="black" scale="1.5" />
        </div>
        <span class="promozione">Promozione</span>
        <h2 class="sconto-text">15% di sconto sul tuo primo ordine.</h2>
        <p class="paragraph">
          Dont waste your time but hurry now to get stylish with our clothes
          brand.<br />Our products are made of high italian quality in diffrent
          color,sizes,models.<br />
          So what are you waiting for ? Hurry up and you will get a 15% discount for
          the first product you buy
        </p>
        <button class="cursor-pointer">Iscriviti</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import ShowcaseSlider from "../components/ShowcaseSlider.vue";
</script>

<style scoped>
.hero-section {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr 0.3fr;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.hero-title {
  grid-row: 1/2;
  grid-column: 2/3;
}

.hero-content {
  grid-row: 2/3;
  grid-column: 2/3;
  align-items: flex-start;
}


.showcaseslider {
  grid-row: 1/4;
  grid-column: 3/4;
}

.circle-icon {
  background-color: var(--primary-color);
  border-radius: 50%;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.circle-icon svg {
  transform: translate(0.25rem, 0);
}

.products-showcase {
  display: grid;
  grid-template-columns: 1.1fr 0.8fr 1.1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "big-one two three"
    "big-one four five";
  gap: 1.4rem;
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





.end {
  margin: 15px;
}

.sconto {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2.8rem;
  border-radius: 120px 20px 20px 20px;
  position: relative;
  padding: 1.5rem;
  gap: 2rem;
}


.sconto h1 {
  font-size: 2.5rem;
  font-weight: 1rem;
  font-family: sans-serif;
}

.promozione {
  color: rgba(255, 255, 255, 0.555);
}

.testimonial-card {
  display: grid;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1rem;
  aspect-ratio: 16/9;
  height: 17.5rem;
  position: relative;
}



.testimonial-card p {
  font-size: 1rem;
}

.testimonial-card p:last-child {
  font-weight: 600;
  align-self: flex-end;
}

h1 {
  font-size: clamp(3rem, 4vw, 3.5rem);
  font-weight: 400;
}

p {
  font-weight: 100;
  font-size: 1.2rem;
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


@media screen and (max-width: 900px) {
  .h-full {
    flex-direction: column;
    gap: 10rem;
    gap: 5rem;
    text-align: center;
  }

  .hero-section {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 0.5fr 0.1fr;
  }

  .showcaseslider {
    grid-row: 2/3;
    grid-column: 1/2;
    place-self: center;
  }

  .hero-title {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  .hero-content {
    grid-row: 3/4;
    grid-column: 1/2;
    align-items: center;
  }


  .products-showcase {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "big-one big-one"
      "two three"
      "four four"
      "five five"
    ;
  }

  .testimonial {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .testimonial-card {
    width: 80%;
  }
}
</style>
