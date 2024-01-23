<script>
import { ref } from 'vue';
import store from '../../../../store';

export default {
  name: 'RightCube',
  data() {
    return {
      store,
      showChoices: Array.from({ length: store.computerChoices.length }, () => ref(false)),
    
    };
  },
  methods: {
    startGame() {
      //resetto
      store.gameInProgress = true;
      store.gameWon = false;
      store.gameMessage = "";
      store.userChoices = [];
      
      // 5 Scelte Computer
      store.computerChoices = this.generateComputerChoices();

      // Visualizza le scelte del computer una alla volta
      this.showComputerChoices(0);

    },

    //Genero 5 scelte per il computer
    generateComputerChoices() {
      const choices = [];

      for (let i = 0; i < 5; i++) {
        const randomGroup = Math.floor(Math.random() * 3);
        
        let selectedGroup;

        if (randomGroup === 0) {
          selectedGroup = store.icon1;
        } else if (randomGroup === 1) {
          selectedGroup = store.icon2;
        } else {
          selectedGroup = store.icon3;
        }

        const randomIndex = Math.floor(Math.random() * selectedGroup.length);
      
        const selectedChoice = selectedGroup[randomIndex];
        
        choices.push(selectedChoice);
        
        console.log(`Scelta ${i + 1}: ${selectedChoice.name}`);
      }

      return choices;
    },

    async showComputerChoices(index) {
      if (index < store.computerChoices.length) {
        // Visualizza la scelta corrente
        this.showChoices[index] = true;

        // Attendi un breve ritardo
        await this.delay(2000);

        // Nascondi la scelta
        this.showChoices[index] = false;

        // Attendi un breve ritardo
        await this.delay(1000);

        // Mostra la prossima scelta
        this.showComputerChoices(index + 1);
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
  },


};
</script>

<template>
  <section class="col-8 d-flex justify-content-center align-items-center">

    <template v-if="store.gameInProgress">

      <!-- Mostra le scelte del computer -->
      <div v-for="(choice, index) in store.computerChoices" :key="choice.name" class="computer-choice">
        <i :class="choice.text" v-show="showChoices[index]"></i>
      </div>
      
      <div v-if="store.gameMessage">{{ store.gameMessage }}</div>


    </template>

    <template v-else>
      <!-- Mostra il messaggio quando il gioco non è in corso -->
      <h1>Premi Start per iniziare</h1>
      <button @click="startGame">Start</button>
    </template>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 150px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid black;
  border-radius: 10px;

  h1 {
    color: rgb(224, 101, 6);
  }
}
</style>