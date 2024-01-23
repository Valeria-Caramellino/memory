<script>
import store from '../../../../../store';

export default {
  name: 'Simbols',
  data() {
    return {
      store,
    };
  },
  methods: {
    selectSymbol(name) {
      store.userChoices.push(name);
      const lastIndex = store.userChoices.length - 1;

      if (store.userChoices[lastIndex] !== store.computerChoices[lastIndex].name) {
        this.handleGameOver(`Gioco finito! Hai sbagliato la scelta ${lastIndex + 1}`);
      } else {
        this.handleCorrectChoice(`Scelta ${lastIndex + 1} corretta!`);

        if (store.userChoices.length === store.computerChoices.length) {
          if (this.checkUserChoices()) {
            this.handleGameOutcome("Hai vinto!");
          } else {
            this.handleGameOutcome("Hai Perso!");
          }

          store.userChoices = [];
        }
      }
    },
    checkUserChoices() {
      for (let i = 0; i < store.userChoices.length; i++) {
        if (store.userChoices[i] !== store.computerChoices[i].name) {
          this.handleGameOver(`Gioco finito! Hai sbagliato la scelta ${i + 1}.`);
          return false;
        }
        this.handleCorrectChoice(`Scelta ${i + 1} corretta!`);
      }

      this.handleGameOutcome("Complimenti! Hai indovinato tutte le scelte.");
      return true;
    },
    handleGameOver(message) {
      this.showGameMessage(message);
      this.resetGameAfterDelay();
    },
    handleCorrectChoice(message) {
      this.showGameMessage(message);
    },
    handleGameOutcome(message) {
      this.showGameMessage(message);
      this.resetGameAfterDelay();
    },
    showGameMessage(message) {
      this.store.gameMessage = message;
      setTimeout(() => {
        this.store.gameMessage = "";
      }, 2000);
    },
    resetGameAfterDelay() {
      setTimeout(() => {
        this.store.gameInProgress = false;
      }, 2000);
    },
  },
};
</script>

<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-5">
        <div v-for="group in [store.icon1, store.icon2, store.icon3]" :key="group[0].name" class="row justify-content-center">
          <div v-for="item in group" :key="item.name" class="esagono d-flex align-items-center justify-content-center" @click="selectSymbol(item.name)">
            <i :class="item.text"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.col-5 {
    background-color: darkgray;
    border: 2px solid black;
    border-radius: 10px;
}

.esagono {
    width: 70px;
    height: 40px;
    margin: 1.5rem 0.2rem;

    background: lightgray;
    position: relative;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    border: 1px solid lightgray;

    i {
        font-size: 30px;
    }

    &:hover {
        cursor: pointer;

        i {
            color: darkorange;

        }

    }

    i {
        transform: rotate(180deg);
    }
}

.esagono.centrale {
    margin: 0rem 0.2rem;
}

.esagono:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -20px;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 20px solid lightgray;

}

.esagono:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -20px;
    border-top: 20px solid lightgray;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;

}
</style>