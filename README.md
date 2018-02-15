# cypress-test-tiny

To reproduce

```
npm install
node server.js
```

the in 2nd terminal

```
cypress open
```

The test will fail due to caching of the 301 redirect.
The tests work when disabling cache in the web developer tools (network tab)
