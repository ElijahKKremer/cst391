# Activity 0

## Introduction

- This is **Activity 0** With this activity we have begun our progress for this course. set up the necessary software for development, and created `hello`, `helloex`, and started `MusicAPI`. 



## Links / Images
these are the tutorial files that were demonstrated for me.

Also included are the Activity 0 Images.

- [fred](https://gitlab.com/bobby.estey/wikibob/-/blob/master/README.md)
- [Grand Canyon University](https://www.gcu.edu/)

![America's Flagship Seal](https://gitlab.com/bobby.estey/wikibob/-/raw/master/docs/icons/cv64AmericasFlagShip100x100.png)
![America's Flagship Seal](https://gitlab.com/bobby.estey/wikibob/-/raw/master/docs/icons/cv64AmericasFlagShip100x100.png "America's Flag Ship")

![hello](images/HelloWorld.png)

![hello](images/nodem.png)
![hello](images/Typescripts.png)
![hello](images/a01.png)
![hello](images/a02.png)
![hello](images/a03.png)
_________________



## Tables
|First Name|Last Name|
|--|--|
|Elijah|Kremer|
|John|Doe|

```java
// Java Example
public class CodeBlock {
    public static void main(String[] args) {
        System.out.println("Code Block Example");
    }
}
```

```mermaid
---
title: MermaidJS - Class Diagram - Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```