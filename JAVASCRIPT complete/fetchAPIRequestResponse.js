const data = fetch('https://swapi.dev/api/people/1');
try {
    data
        .then((fetchedData) => {
            console.log('walla!!! your hero is arrived')
            console.log(fetchedData, `Status of the response is: ${fetchedData.status}`)
        });
}
catch {
    (error) => {
        console.log('uh ho!!')
        console.log(error)
    };
}