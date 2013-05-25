# {%= title || name %}

[![Build Status](https://secure.travis-ci.org/{%= author_name %}/{%= name %}.png)](http://travis-ci.org/{%= author_name %}/{%= name %})

{%= description %}

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/{%= git_user %}/{%= git_repo %}/master/dist/{%= name %}.min.js
[max]: https://raw.github.com/{%= git_user %}/{%= git_repo %}/master/dist/{%= name %}.js

## Development
`sudo npm install && bower install`

##Bower
>Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

To register {%= name%} in the [bower](http://bower.io/) [registry](http://sindresorhus.com/bower-components/):
`bower register {%= name%} git://github.com/{%= author_name %}/{%= name%}.git`


## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
