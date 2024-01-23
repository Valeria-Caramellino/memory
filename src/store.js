import { reactive } from "vue";
const store = reactive({
  icon1: [
    {
      name: "goccia",
      text: "fa-solid fa-droplet",
    },
    {
      name: "chiave inglese",
      text: "fa-solid fa-wrench",
    },
    {
      name: "fulmine",
      text: "fa-solid fa-bolt-lightning",
    },
    {
      name: "orologio",
      text: "fa-solid fa-clock",
    },
  ],
  icon2: [
    {
      name: "scatola",
      text: "fa-solid fa-box-archive",
    },
    {
      name: "fantasma",
      text: "fa-solid fa-ghost",
    },
    {
      name: "ok",
      text: "fa-solid fa-thumbs-up",
    },
  ],
  icon3: [
    {
      name: "casa",
      text: "fa-solid fa-house",
    },
    {
      name: "nota",
      text: "fa-solid fa-music",
    },
    {
      name: "pizza",
      text: "fa-solid fa-pizza-slice",
    },
    {
      name: "telefono",
      text: "fa-solid fa-phone",
    },
  ],
  computerChoices: [],
  userChoices: [],
  gameInProgress: false,
  gameWon: false,
  gameMessage: "",
});

export default store;
