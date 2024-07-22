const get_responses = (url) => {
    return new Promise((resolve, reject) => {
        const asyncDelay = Math.floor(Math.random() * 2000) + 100;
        console.log(`Hahhh!!! her's your response delay: ${asyncDelay}`)
        setTimeout(() => {
            if (asyncDelay > 1000) {
                reject(new Error("Not responded!!!"));
            } else {
                resolve({ data: "tu ru tu tu ru tu tu ru tu tu ru tu tu ru tu", 'Toh Nacho': "Abhi to party shuru hui hai", 'Kya dekh rha hai': 'yeh data server bhejega jab koi user request karega' })
            }
        }, asyncDelay)
    })
}
const respond = get_responses("chmpu chameli.com")
respond
    .then((responded) => {
        console.log("Yeah it's worked take your data:\n", responded)
        console.log(`key-value of the responded data:\n\n${responded['Kya dekh rha hai']}`)
    })
    .catch((error) => {
        console.error(`suck! ohoaaa ${error}`)
    });