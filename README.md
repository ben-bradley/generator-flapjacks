# generator-flapjacks [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A generator for quickly spinning up Hapi-based, React-powered webapps

__Updated to work with Babel 6!__

## About

The `flapjacks` generator, sadly, will not generate flapjacks for you.  It will, however, create a framework for building really cool webapps built on top of Hapi and React.

I will freely admit my bias towards the back-end and beg forgiveness from those who are more geared towards the front-end with my attempt at creating a front-end template. If the front-end code in `src/public` makes you shudder, please feel free to drop a PR with the good stuff.  Knowing that `src/public` was ... not great, I tried to build it so that front-ends could be dropped in without much overhead so please feel free to `rm -rf src/public/*` and have a go at it.

So mea culpa's aside, the back-end code is built on Hapi and follows fairly basic CRUD REST API best-practices.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-flapjacks using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-flapjacks
```

Then generate your new project:

```bash
yo flapjacks
```

## Sub-Generators

The `flapjacks` generator makes it possible to template just the components of the app.

```bash
yo flapjacks:public # <- creates the src/public folder

yo flapjacks:module # <- creates a route, handler, and controller

yo flapjacks:route # <- creates a new file in the src/routes folder

yo flapjacks:handler # <- creates a new file in the src/handlers folder

yo flapjacks:controller # <- creates a new file in the src/controllers folder
```

## TODO

- Make the `src/public` base template better

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Ben Bradley](https://github.com/ben-bradley)


[npm-image]: https://badge.fury.io/js/generator-flapjacks.svg
[npm-url]: https://npmjs.org/package/generator-flapjacks
[travis-image]: https://travis-ci.org/ben-bradley/generator-flapjacks.svg?branch=master
[travis-url]: https://travis-ci.org/ben-bradley/generator-flapjacks
[daviddm-image]: https://david-dm.org/ben-bradley/generator-flapjacks.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ben-bradley/generator-flapjacks
