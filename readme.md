ChimpJS is a bunch of things, playing nicely together that help you manage BDD.

http://chimpjs.com/
https://chimp.readme.io/docs/tutorial

Hopefully we'll soon see a promise-equiped form of this, (probably chai-as-promised or similar), but for now you can write Gherkin tests and modify the output from Selenium to remove callbacks. Utilize the (WebDriverIO API)[http://webdriver.io/api.html].

To try out this test, just run:

```
npm install chimp
./node_modules/.bin/chimp --watch
```

more Cucumber examples on (Letterpress)[https://github.com/xolvio/Letterpress/tree/master/app/tests/cucumber/features]
