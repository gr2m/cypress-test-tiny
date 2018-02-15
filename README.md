# cypress-test-tiny

To reproduce

```
npm install
node server.js
```

the in 2nd terminal

```
cypress run
```

Test will fail with something like this

```
1) CORS + 301 redirect works:
   TypeError: Failed to fetch
    at TypeError (native)




(Tests Finished)

- Tests:           1
- Passes:          0
- Failures:        1
- Pending:         0
- Duration:        13 seconds
- Screenshots:     1
- Video Recorded:  false
- Cypress Version: 1.4.2
```

To see the error causing this, run

```
cypress run --headed
```

The moment you see the Cypress window, press Alt + Command + i to open web developer tools.
It will stop at the debugger statement in `spec.js` and show this error:

> Fetch API cannot load http://localhost:3000/. The request was redirected to 'http://localhost:3000/foo', which is disallowed for cross-origin requests that require preflight.

When running with `cypress open` the error does not occur
