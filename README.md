# Gridsome + GuessJS Demo

> This demo gives GuessJS a route provider with some fake data.

Running this site in development (`gridsome develop`) should work fine, with the browser console telling you which routes it will prefetch: `Prefetching /markdown-test-file`, `Prefetching /a-post-with-a-cover-image` etc.

However, running `gridsome build` gives the below error:

```bash
95% emitting GuessPlugin /path-to-site/guessjs/node_modules/guess-webpack/dist/guess-webpack/main.js:660
            compilation.assets[mainName] = new ConcatSource(stats.compilation.assets['./output.js'], '\n', old.source());
                                                                                                               ^

TypeError: Cannot read property 'source' of undefined
```
