const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

let topicsMayus = topics.map(function(cadena) {
    return cadena.toUpperCase();  
});
// reverse() se utiliza sobre arrays 
const reversed = topicsMayus.reverse();

console.log(reversed);


// const capitalizeTopics = topics.map(eachTopic => eachTopic.toUpperCase());