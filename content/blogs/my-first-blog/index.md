---
title: My first blog
description: Hello World, once again...
category: first-post
date: 2022-01-09
---

## My first time using Gatsby

I have been doing web for a good several months and today I decided to make my own blog.

## What is Gatsby?

If you don't know, the traditional way of blogging is to create an `HTML` file for each of the posts. I'm a person who dislike repetition so I searched for an automated method of tackling this, since I have wanting to express myself on the Internet for quite a while.

Eventually, I found that static site generation is a good one since it ease up the process of blogging and I feel like choosing Gatsby is a good decision of mine.

## How does it works tho?

>Up till now, I have not talk about how more **"easy"** it is using this over the conventional means. So, here comes the meat!

You first set up a so-called `template` that represents the layout of each of your blog. Now it should not be so detailed, since you are essentially making the skeletal structure of the whole site. Take this for example:

```jsx
const MyBlog = ({info, content}) => (
  <>
    <SEO/>
    <Header info={info}/>
    <Content source={content}/>
    <Footer/>
  </>
);
```
><span classname="reader">Gotcha! So you have the main frame, now what?</span>

><span classname="author">Okok, ever heard about Markdown?</span>

I made it so that you could write your blog in Markdown -- a markup language, you can think of it as MS Word -- and drop the file to a specific folder. Just like that, a new page in your site will be created. *Sounds like fun?*

## This is intended for fun, ofc 🥱

This project is created out of sheer curiosity, and my long for a personal representation of myself online. Because of that, there maybe times I don't post often or not even post at all, so bear with me. I will try to provide insights into my daily life as much as possible! Thank you for checking out this post :^), it means a lot to me!
