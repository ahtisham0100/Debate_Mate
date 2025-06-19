
async function FetchName() {
    console.log("Fetching Name")
    const response = await fetch('topics.json');
    const data = await response.json();
    let topic =  data.topics;
    topic = topic[Math.floor(Math.random()*topic.length)]; 
    console.log("topic " +topic)
    return topic;
}

export {FetchName}