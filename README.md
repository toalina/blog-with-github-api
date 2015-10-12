# Week Seven - MEAN Stack II

Last week we focussed on CRUD with Mongo, Node, and Angular. This week we're going to focus on using Angular to build a strictly client-side app, leveraging third-party APIs. You'll be expected to build on knowledge you've already learned and refactor last week's blog app to use Github Gists instead of your Node server and Mongo.

We want this assignment to feel like a 'week on the job.' We'll be adding requirements throughout the week, on top of those listed here.

## The spec

The business has decided to outsource hosting of the company blog to a third party, and has decided to use Github Gists. Hosting of the app will be handled by a static web site host.

You need to refactor the blog, removing any dependency on Node.js for the server and Mongo for the database. Replace your current Angular blog service with the [Gist API](https://developer.github.com/v3/gists/).

### Requirements 

1. You will need to create a personal access token in your Github account
  1. [github.com/settings/tokens/new](https://github.com/settings/tokens/new)
  1. The only scopes you'll need are `gists` and `user`
1. Semantically correct HTML is required as this will be the model for prod app integration
1. Think in terms of '*components*'; if all parts of the UI were lego blocks, who would you code that?
1. All CSS measurements should use elastic units unless a pixel specific unit is required for both mobile and desktop
1. JavaScript code is expected to be written cleanly and maintainably using the best practices covered during lectures
1. Write up a description for every plugin used (no limit, but you must justify them)
  1. jQuery is not allowed. Angular's built-in DOM manipulation can manage most of what you'd need jQuery for.

### Helpful resources

These resources are useful, but you do _not_ need to use them.

1. [Diff of the refactor from Monday's lecture](https://github.com/jedfoster/mean-stack-1/pull/1/files)
1. [Github.js](https://github.com/jedfoster/github) (my fork), a library that wraps the Github API
  * The [original](https://github.com/michael/github) is just as good.
1. My factory to adapt Github.js for Angular [https://gist.github.com/jedfoster/f7b49fc6866fd3b4c7b5](https://gist.github.com/jedfoster/f7b49fc6866fd3b4c7b5)

### Constraints 

1. Must work in all major browsers of latest versions;
	* Desktop (IE Edge, Safari, Chrome, and Firefox)
1. All interactions must be clearly functional
1. All code must pass HTML Tidy, CSS Lint, and JSHint.

__DO NOT__ fence yourself in with invisible constraints. Unless it is specifically listed and/or we discussed it in lecture, there is not an expectation to meet an objective that has not been set. 

## The expectation 

In this assignment, you should be able to demonstrate mastery of Angular as a platform for building client-side applications, including interacting with APIs. We're looking for you to build on best practices that you've already learned (proper HTML and CSS) as well as incorporate the new practices discussed during the course of the week.
