---
layout: post
title: Maven basic
category: techflakes
comments: true
description: Basic structure of Maven projects...
tags:
    - basics
---
Build Tool: Maven.

These are some old entries form my notes where I documented about maven basics in a pictorial way while trying out a maven project from scratch.

Aim: Build a small java project with maven. Expected result is the ability to ship the project as executable maven project.

Process: I am building a hello world swing app in java. I will create a maven project with this command (Scroll to see rest!)
<br>
```console

 mvn archetype:generate -DgroupId=com.sarah -DartifactId=HelloSwing -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

``` 

<br>
I drew this little summary kind of figure with the command. So if I need to revise without going through docs I can quikly look over it:

<figure>
<img alt="image test" src="{{ site.baseurl }}/resources/images/maven.jpg"/>
<figcaption>
<strong>Figure 1: </strong> Maven
</figcaption>
</figure>
<br>
This will create a brand new maven project with all the structure laying out for me.

Now time for the actual implementation of the code logic. Added hello world version in swing form in my src/main/java/com/sarah/App.java You can check the whole code here in [github](https://github.com/tabassumsarah/basic-maven-setup-java-swing)

Next step is to build the code and get my output in an executable form.<br>
```console
    mvn clean install
```
<br>
This will build the code install it local repository. And also target will hold all the output classes and the application itself. In my case 
SwingHelloApp-1.0-SNAPSHOT.jar


<figure>
<img alt="image test" src="{{ site.baseurl }}/resources/images/pom2.jpg"/>
<figcaption>
<strong>Figure 2: </strong> Maven
</figcaption>
</figure>
<br/>

To actually run the execuatable jar, I did:
<br>

```console
   java -cp target/SwingHelloApp-1.0-SNAPSHOT.jar com.sarah.App
``` 

<br>
I am specifying my jar in the classpath and also saying where the main class is. I did ran this from my root folder of the project.

<figure>
<img alt="image test" src="{{ site.baseurl }}/resources/images/hello-swing.jpg"/>
<figcaption>
<strong>Figure 2: </strong> Maven
</figcaption>
</figure>
<br/>










