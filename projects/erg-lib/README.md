# ErgLib

This library has default components in it to serve your request

## Table of Contents

* [Dependencies](#dependencies)
* [Components and Alieses](#components-and-alieses)
* [How it Works](#how-it-works)

## Dependencies
| erg-lib | Angular | ng-bootstrap | Bootstrap CSS | Popper |
| :-----: | :-----: | :----------: | :-----------: | :----: |
|  0.0.X  | 13.0.0  |    12.1.2    |     5.1.3     | 2.11.5 |

## Installation
We strongly recommend using [Angular CLI](https://angular.io/cli) for setting up a new project. If you have an Angular ≥ 13 CLI project, you could simply use our schematics to add erg-lib library to it.

```batch
ng add erg-lib
```

## Components and 'Alieses'
Here is all editable custom components

|   Schematic   |  Alias   |
| :-----------: | :------: |
|  Login Page   |  login   |
| Register Page | register |
|  Header Page  |  header  |
|  Footer Page  |  footer  |


## How it works
To create custom component write line below to Terminal

`ng g erg-lib:<component name>`

Or you can use aliases

`ng g <aliases name>`

Also you can use parameters like --name --path(default path is src/app)

`ng g erg-lib:<component name> --name <name> --path <path>`
