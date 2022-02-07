const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

const last = topics
.map(function (tema) {
    return tema.toUpperCase()
})
.reverse();

console.log('last', last);

// const capitalizeTopics = topics.map(eachTopic => eachTopic.toUpperCase());