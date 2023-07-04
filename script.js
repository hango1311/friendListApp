const appFriends = document.getElementById('friendsApp');
const app = Vue.createApp({
  template: `
  <div>
<div>List of friends</div>
  <div>Friend-name:
<input ref="Fname" type="text" placeholder="add friend name"/>
  </div>
  <div>Friend-age:
  <input ref="Fage" type="number" placeholder="add friend age"/>
  </div>
  <div>Gender:</div>
    <input type="radio" value="Female" v-model="select"/>
    <label>Female</label>
    <input type="radio" value="Male" v-model="select"/>  
    <label>Male</label>
  <div><button @click="confirm">add new friend</button></div>
</div>
<div>===================</div>
 <FriendsList v-for="friend in friends" :friend="friend"/>
  </div>
  `,
  data() {
    return {
        friendsName:``,
        tuoi:``,
        sex:``,
        gender:["female","male","other"],

      friends: [
        {
          id: 1,
          name: "Lynn",
          age: 20,
          
        },
        {
          id: 2,
          name: "Leight",
          age: 21,
        
        },
      ],
    };
  },
  method:{
    confirm(){
        const a ={};
        a.name= this.$refs.Fname.value;
        a.age= this.$refs.Fage.value;
        this.friends.push(a);
        console.log(friends)

        
    }
  
 


  },

});
  



