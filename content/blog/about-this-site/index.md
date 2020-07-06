---
title: About this site
date: "2020-07-06T22:40:32.169Z"
description: Everything about this site, and a bit of an introduction.
---

This post is going to serve as the page detailing the decisions I made while constructing this site, as well as a bit about me.

## The goal

This is a personal site. A blog, a place to put things I've worked on, a place I hope people might find interesting to visit once in a while.

I've had a personal site for probably the better part of a decade now, but it's almost always been something thrown together quickly from a theme, and left to die as a floating bit of internet with one or two pages of lacklustre content. I've always wanted to do something of my own - something that would be my work, rather than something primarily influenced by a random theme or author out there (Not that there's anything wrong with using one!)

This type of goal is also reflected in my approach to the styling of the page. I've gotta admit - I'm not a natural at design. My approach towards design has always been from the develoer's perspective of *just get it done*, and that shows with my heavy use of CSS frameworks, themes, and boilerplates. This page is constructed entirely with hand-written CSS3, using flexbox. (Well, excluding typography, icons, and animations - I lied a bit.)

## The tech

I feel like every site should have some sort of monument to the technologies and decisions made in constructing it. Tech as a field, especially, stands on the shoulders of giants in a way that's visible in every single interaction with it - A million layers of abstraction, and billions of hours of work have gone into this site - and basically all of it wasn't mine.

- Gatsby - Gatsby is really neat. Not only does it let you write static sites using react and javascript, it also supports a huge range of features and a vibrant community. Some some of my favourite are: ...

- Github Pages - Free hosting with the same service that I put all my code in? Yes please.

- Github Actions - Unfortunately, github pages doesn't support gatsby out of the box. Github actions auotmatically builds and deploys this site to github pages every time I update it. Meaning I could write a blog post with nothing but a web-browser, and have it deployed basically instantly. 

- Font Awesome - Super duper handy and neat icon library

- Typography JS - Elegant, beautiful, clean typography, with as much customisation and themeing as you want.

This is, of course, not giving credit to the hundreds of javascript packages involved with anything that vaguely touches javascript. This (fairly minimal) project alone has over 30 direct dependencies, and if you ever want a good graph traversal dataset, you can delve into the monstrosity that underlies them. (At time of writing, gatsby alone had a few hundred total dependencies, and had a graph that looked like this:)
