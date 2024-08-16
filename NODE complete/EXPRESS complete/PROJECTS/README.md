## API REEQUEST/RESPONSE using `express`
<hr>
We can respond with only a single response using this EXPRESS framework

### Let's see an example:
```js
// TO RESPONSE THE USER WHEN HE MAKES EACH REQUEST
app.use((request, response) => {
    console.log("WE GOT A NEW REQUEST!!");
    // console.dir(request)
    response.send('<h1>RESPONDING some HTML !!!</h1>');

    // ROUTING TO THE DIFFERENT PATHS FOR THE DIFFERENT RESPONSES
    // GET - method
    app.get('/submit', (req, res) => {
    res.send('<h1>You have submitted your request!!!</h1>');
    });
});
```

<pre><i>In this example,
i. app.use()
ii. app.get()
</i>
In these two methods only one method will work use() or get() only to handle API reequest/response.

One more crucial/important thing is that we can only receive/response one and only one request/respond at a time, respectively. such as:
</pre>
```js
    app.use((request, response) => {
    response.send('<h1>RESPONDING some HTML !!!</h1>');
    // response.send({ "Name": "Raushan", "Response": "User data" });
    });
```
In these two responses we can send only one respond to the end-user, `HTML` or the `object` only using the send() method.

### So, we can only use single time send() method while using the `express` framework