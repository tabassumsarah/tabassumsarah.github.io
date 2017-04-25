---
layout: post
category: techflakes
title: My First Code Camp
comments: true
description: My experience of going to a 3 day code camp. 
tags:
    - event
    - coding
---


This year I attended my [first ever code camp](http://elixir.camp/)  at Mittagong, NSW. Before I share some of my experience and about the camp itself, I would like to thank women who code Sydney.
One morning I got this notification in our slack channel that there will be a code camp for elixir. Lucy Bain from WWC shared that organisers are offering 5 diversity tickets for the camp. I did know that elixir is a functional programming language and popular for its high speed and fault tolerance capability. Thats about it. Last year couple of my friends actually started playing with functional language and I was keen to get into in at some point of time. But as usual got busy with stuff. So I thought I should not miss this opportunity to know more about functional programming and the language itself. And hey, what will be more perfect place other than a bunch of expert elexir programmers in the country camping together! Event was a 4 day camp starting from 21st may finishing on 24th may 2017.  

#### Got a company:

Couple of days before I found another girl who is also going to this camp and member of WWC. We decided to go together from Sydney. We met at the station and soon became quite comfortable and started setting up or dev environment for elixir event. By the time we reached , we had our set up completed and we could compile elixir code.

#### About the event:

This event was organised by three amazing people. Jo, Garret and Martin. They were so welcoming. Despite of being heaps experienced, never hesitated to answer any questions I asked.

The whole event was very well structured. All talks were scheduled beforehand and emailed to everyone. There were windows in between to give lighting talks also. Quite a few people with experience in elixir gave some insights of the language.

Whole camp took place in Camp Wombaroo near Mittagong. Upon arrival Garret, one of the organisers showed us our room at the camp. Camp was nice and clean. There was also a big camp fire place behind the main area. We settled in nicely, had some tea, talked to people. Most of the people had a decent amount of elixir experience beforehand. 
<figure>
<img alt="image test" src="{{ site.baseurl }}/resources/images/room.jpg"/>
<figcaption>
<strong>Figure 1: </strong>Nerd Room: People are all set up for nect 3 day code camp.
</figcaption>
</figure>
In the evening organisers gave us intro about themselves and told us about the schedule of the event. I settled with my computer and started playing with elixir. Lots of people had their own projects to work on. They were collaborating well. Being a noob I did not have the clue of the concepts they were talking about though.

<figure>
<img alt="image test" src="{{ site.baseurl }}/resources/images/talks.jpg"/>
<figcaption>
<strong>Figure 1: </strong> Talks and presenation at Elixir camp
</figcaption>
</figure>

#### Talks:

Jo Cranford started the event by giving a talk "Drinking the Elixir" - a story about breaking up a Rails Monolith. She gave an overall intro to elixir and shared her experience on the transition of going from rails to elixir. I could understand most of her talk as by this time I went through most of the basic stuff from the elixir doc pages. 

After that Josh Price gave a talk on "Intro to Phoenix 1.3 and Plug". Phoenix is the web framework which is written in elixir. Josh showed us the overall layout of the framework and concepts behind “Plug” and how you can use them.

There was another talk scheduled after lunch. In the mean time I was decided that I will try to build a module where client can search info about a person by doing a name search. And server will response with more detail. I had all figured out on paper! I though I will load a file with entries. And parse the file and will use pattern matching. It sounded all easy! We had lunch. Food was good, in-fact they have deserts too. We had cake with lots of cream at first day after dinner and ice-cream at second day.


<figure>
<img alt="image test" src="{{ site.baseurl }}/resources/images/breakfast_all.jpg"/>
<figcaption>
<strong>Figure 1: </strong>It was not all about learning, we had good food too!
</figcaption>
</figure>

#### Met new people:

I met Avinash there. A tech enthusiast. He showed me couple of his pet projects.I was amazed to see his passion for coding and building cool projects on his spare time. Also had discussion how it is quite tough for a junior java dev to get opportunity in the industry. Most people I met came from rails background. I met Raymond who was quite interesting. He gave a nice analogy stating the difference between OOP and FP. It goes like that:

>Suppose you want to borrow money from me. In OOP I will give you my wallet and you will take your money and return it to me. But in FP I would give you the exact amount from my wallet! 
> 
{: .blockquote}

He also mentioned that how its mind bending to get the concept of message passing rather than objects in FP when you come from an OO background. But almost all of them assured once you get it its quite easy!

#### My struggle was real!

At the beginning I thought I will try to finish exercism exercises during the event, and did the first one! After that I decided to try to build a small module which was a wrong move from my part! 

In the evening I had a quick chat with Garret about my little module. He explained it so well. He draw me the overall POC. How I can design a map like data structure after I parse the data file. Then he explained a little bit about GenServer and how I could use that to establish my client/server model.
<figure>
<img alt="image test" src="{{ site.baseurl }}/resources/images/POC.jpg"/>
<figcaption>
<strong>Figure 1: </strong>Garret helped me to chalk out the structure of my module.
</figcaption>
</figure>

I was all happy and feeling cofident that I might build something out of this event. But I forgot that I came from imperative programming background. My mind is too slow for picking things up in functionaly way! Anyway, I could finish just parsing my data file. But I am hopefull that I will finish the rest of the module soon.

#### More Talks:
In between couple of lighting talks happened. We got to know how anyone can compile 3 languages under same erlang vm. Which was very cool. Also got to know about Flynn, a PaaS for deploying your app to production simply.

Alexander Tsire gave a presentation on Production Maintenance for elixir. That was an interesting talk. He mentioned how his team struggle to debug and maintain code in the production. HIs talk was insightful. I am sure that will help others in terms of not to repeat same mistakes.

Martin Stannard, gave us a introductory talk on GenServer. And slo gave us a live demo how to create one. I really enjoyed the presentation as I read about this earlier. So I easily could connect.


#### Thats about it:

This was my first code camp. I was feeling little bit anxious before I went there. Not being comfortable with the language and also did not know anyone prior to the event. Once I went there, I talked to many, made couple of friends. Had good food, campfire and most importantly I learnt something!

<figure>
<img alt="image test" src="{{ site.baseurl }}/resources/images/firepit.jpg"/>
</figure>