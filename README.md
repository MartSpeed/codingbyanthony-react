# coding<span style="color: green">**BY**</span>anthony-react projects
<p>
    I am only recording what I have done, how long it took and completion percentage if it is provided as a metric.
</p>

# June 18
## regex 
- i flag = case insensitve
```javascript
let twinkleStar = "Twinkle, twinkle, litte star"
let starRegex = /twinkle/i
result = twinkleStar.match(starRegex)
console.log(result)
```

- g flag = match all
```javascript
let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g
result = testStr.match(ourRegex)
console.log(result )
```

- several flag matches can be used at the same time when using regex

- . = wildcard matches anything
```javascript
let humStr = "I'll hum a song"
let hugStr = "Bear hug"
let huRegex = /hu./
result = humStr.match(huRegex) // returns hum
result = hugStr.match(huRegex) // returns hug

let exampleStr = "Let's have fun with regular expressions!"
let unRegex = /.un/;
result = unRegex.test(exampleStr) // return true, fun
```

- [] = match the specified character in the brackets
```javascript
let bgRegex = /b[aiu]g/

let quoteSample = "Beware of bugs in the above code; I have only proved it corr"
let vowelRegex = /[aeiouy]/ig
result = quoteSample.match(vowelRegex);

console.log(result) // returns all match vowels with case insensitivity with the included flags
```

- matching a range of letters using brackets
```javascript
quoteSample = "The quick brown fox jumps over the lazy dog"
let alphabetRegex = /[a-z]/ig
result = quoteSample.match(alphabetRegex);

console.log(result) // returns every letter in the string
```

- match characters that occure zero or more time
```javascript
let difficultSpelling = "Mississipspi"
myRegex = /s+/g;
result = difficultSpelling.match(myRegex)

console.log(result) // returns ['ss' 'ss' 's] the sequence with how many times each character occurs
```

- match characters that occur zero or more time
```javascript
let soccerWord = 'gooooooooooal!'
let gphrase = 'gut feeling'
let oPhrase = 'over the moon'
let goRegex = /go*/

result = soccerWord.match(goRegex)
console.log(result) // returns ['goooooooooo']

result = gphrase.match(goRegex)
console.log(result) // Returns ['g']

result = oPhrase.match(goRegex)
console.log(result) // returns null

let chewieQuote = 'Aaaaaaaaaaarrrgh!' // match 'a' zero or one time
let chewieRegex = /a*/i
result = chewieQuote.match(chewieRegex)

console.log(result) // returns all character a using the i - flag for case insensitivity
```

# Object Oriented Programming

## Encapsulation
<p>
    The process of storing functins (methods) with their associayed data (properties) - in one thing (object)*
</p>

```javascript
let seriousBusinessPerson = {
    hourlyRate: 250,
    hours: 160,
    taxRate: .35,
    calculateProfit: function () {
        return this.hourlyRate * this.hours * (1 - this.taxRate)
    },
    calculateTaxesHeld: function(){
        return this.hourlyRate * this.hours - this.calculateProfit()
    }
}
```

## Abstraction
<p>
    Hide details and show essentials. simple, predictable, manageable. Smaller more manageable pieces of code. Helps you split the complexity your software into manageable parts.
</p>
---

## **Personal Projects to refine specific areas of study**
1. [Jest](https://www.youtube.com/watch?v=ajiAl5UNzBU&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=2) | Learn to test your Javascript application
2. [WebSockets](https://www.youtube.com/watch?v=8ARodQ4Wlf4&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=13) | A beginner's guide
3. [AWS](https://www.youtube.com/watch?v=-FtcnssIpzQ&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=23) | Certified Cloud Practioner Complete Video Course
4. [API's](https://www.youtube.com/watch?v=GZvSYJDk-us&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=25) | API's for beginner's; how to use an API(Full Course/Tut)
5. [Microservices](https://www.youtube.com/watch?v=tuJqH3AV0e8&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=36&t=26s) | Microservices Full Course by Edureka
6. [mySQL stored procedures](https://www.youtube.com/watch?v=yLR1w4tZ36I&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=15&t=1s) | Personal Development
7. [Async Javascript](https://www.youtube.com/watch?v=PoRJizFvM7s&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=4) | Personal Development
8. [Advanced JS methods and operators](https://www.youtube.com/watch?v=rRgD1yVwIvE&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=6) | Personal Development
9. [Weekend Project](https://www.youtube.com/watch?v=fDffQYs2WB0&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=3) | Budget App
10. [Twilio](https://www.youtube.com/watch?v=4jUMqutYmyE&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=28) | Work
11. [Mailgun](https://www.youtube.com/watch?v=p4sGlrrWzj4&list=PLKBmYB72-EUh5w_qHFOJBiuVesSzRj_4R&index=29) | Work
12. [Docker](https://www.youtube.com/watch?v=fqMOX6JJhGo) | Personal Development
13. [GitLab](https://www.youtube.com/watch?v=PGyhBwLyK2U) | Personal Development
14. [Kubernetes](#) | Personal Development