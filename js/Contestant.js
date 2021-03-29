class Contestant {

  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){

    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestCount = data.val();

    })

  }

  updataeCount(){

    database.ref('/').update({
      contestantCount: count 
    });

  }

  update(){

    var contestantIndex = "contestant/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    })

  }

  static getPlayerInfo(){

   var contestantInfoRef = database.ref('contestant');
   contestantInfoRef.on("value",(data)=>{

     allContetants = data.val();

   })
   
  }

} 