const app = Vue.createApp({
  data() {
    return {
      messageCourseGoalA: "Finish the course",
      messageCourseGoalB: '<h3>build a website</h3>',
      MessageCourseGoalHTML: '<h2>build a website</h2>',
      vuelink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal (){
      const randomNumber = Math.random();
      if (randomNumber < 0.5){
        return this.messageCourseGoalA;
      } else {
        return this.messageCourseGoalB;
      }
    }
  }
});

app.mount("#user-goal");
