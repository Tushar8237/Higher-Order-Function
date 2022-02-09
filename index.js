const student = (name) =>{
    if (name === "Tushar"){
      return function (topic){
        console.log(`Hii ${name} What is ${topic} Can you explain? `);
      }
    }
    if (name === "Gaurav"){
      return function (topic){
        console.log(`Hii ${name} What is ${topic}? You know about something? `);
      }
    }
    if (name === "Shivam"){
      return function (topic){
        console.log(`Hii ${name} What is ${topic}? Why we use it? `);
      }
    }else{
      return function() {
        console.log("Tell me about ypur self")
      }
    }
  }
  
   student ("Tushar")("Javascript");
   student ("Gaurav")("UI");
   student ("Shivam")("Python");
      