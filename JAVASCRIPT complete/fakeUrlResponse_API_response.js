const fakeCall = (requestedData, response, reject) => {
    const rand = Math.floor(Math.random() * 2000) + 100;
    setTimeout(
        () => {
            console.log(`Maximum response delay: ${rand}`);
            if (rand > 1000) {
                reject("server didn't respond")
            } else {
                response(`YAYYY!!!! here's your requested data ${requestedData}`)
            }
        }, rand
    )
}

fakeCall('https://wwww.tu-vitaBorn-bita.com',
    (dataRequestByUser) => {
        console.log("Great!!! so you got it");
        console.log(dataRequestByUser);
    },
    (errorWhileRequesting) => {
        console.log("uh ho I'm so so sorry");
        console.log(errorWhileRequesting)
    }
)
