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

  <div class="container">
  <div class="big-one">1</div>
  <div class="three">3</div>
  <div class="two">2</div>
  <div class="four">4</div>
  <div class="five">5</div>
</div>
<div class="btn-show"><button>Show more</button></div>



<div class="description">
  <h1><span>what people say</span><span>about us.</span></h1>
<div class="both"><div class="box1"><span>“Non avevo mai ordinato una maglietta personalizzata prima</span><span>d'ora, ma devo dire che l'esperienza sul tuo sito è stata</span>
<span>fantastica! La maglietta è perfetta! La qualità del tessuto e della </span> <span>stampa è ottima, arrivata in meno di una settimana!</span>
<span class="end">Maria DiBi</span></div>
<div class="box2"></div></div>
</div>
</template>

<script setup>
import ShowcaseSlider from '../components/ShowcaseSlider.vue';
</script>

<style scoped>

.container {  display: grid;
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

.big-one { grid-area: big-one;
background-color: rgba(218, 191, 240, 0.563);
border-radius: 1rem;
}


.three { grid-area: three; 
  background-color: rgba(218, 191, 240, 0.563);
padding: 7rem 5rem;
border-radius: 1rem;
}

.two { grid-area: two; 
  background-color: rgba(218, 191, 240, 0.563);
border-radius: 1rem;}

.four { grid-area: four;
  background-color: rgba(218, 191, 240, 0.563);
border-radius: 1rem; }

.five { grid-area: five; 
  background-color: rgba(218, 191, 240, 0.563);
border-radius: 1rem;}

button{
  background-color: rgb(104, 24, 104);
  border: none;
  padding: 10px 50px;
  border-radius: 0.60rem;
margin: 10px;
}

.btn-show{
  display: flex;
align-items: center;
justify-content: center;
}
.description{
  display: flex;
}
h1{
  display: flex;
  flex-direction: column;
  text-align: left;
  text-transform: uppercase;
  
}
.box1{
  display: flex;
  flex-direction: column;
  text-align: end;
  background-color: rgb(255, 255, 255);
  margin: 3rem;
 padding: 4rem 1rem;
 border-radius: 1rem;
 text-transform: uppercase;
 position: absolute;
 transform: translate(-2rem , -2rem);
}
.box1 span{
  display: flex;
  color: black;
}
.box2{
  background-color: black;
}
.both{
  position: relative;


}
.end{
  margin: 15px;
}




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
  background-color: var(--tertiary-color);
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
