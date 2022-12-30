Vue.createApp({
  data(){
    return {
      goals: [],
      importance: [],
      goalValue: '',
      importanceValue: ''
    }
  },
  methods: {
    addGoalsandImportance(){
      this.goals.push(this.goalValue);
            this.importance.push(this.importanceValue);
      [this.goalValue,this.importanceValue] = ['','']; //Clearing out the goal and importance
    }
  }
}).mount('#app');

// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const listElement = document.querySelector('ul');

// function addGoal(){
//   const enteredValue = inputElement.value;
//   const listItemElement = document.createElement('li');
//   listItemElement.textContent = enteredValue;

//   listElement.appendChild(listItemElement);
//   inputElement.value = '';
//   }

// buttonElement.addEventListener('click', addGoal);


