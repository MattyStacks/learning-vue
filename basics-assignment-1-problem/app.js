const app = Vue.createApp({
  data(){
    return{
      fullName: 'Matt',
      age: 95,
      imgUrl: "https://www.collinsdictionary.com/images/full/bush_132902558.jpg",
    }
  },
  methods: {
    randomNum(){
      return Math.random();
    }
  }
});

app.mount("#assignment");

