app.component('FriendsList',{
    template:`<div>
    <div>{{friend.name}}</div>
    <div>{{friend.age}}</div>
    <div>{{friend.gender}}</div>
    <div style="cursor:pointer" @click="toggleFavorite">{{isFavorite? 'favorite':'unfavorite'}}</div>   
     <div>============</div>
    </div> ` ,
    props:['friend'],
    data(){
      return{
        isFavorite:false
      }
    },
    methods:{
      toggleFavorite(){
        this.isFavorite =!this.isFavorite   
        //co 2 cach them hanh dong them truc tiep or them qua methods isFavorite=!isFavorite
      }
    },
  }
  )