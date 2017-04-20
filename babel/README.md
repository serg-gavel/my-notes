###### [`Вернуться назад к выбору директорий`](https://github.com/serg-gavel/my-notes)
![alt-текст](https://github.com/serg-gavel/my-notes/blob/master/babel/babel.jpg "babel.jpg")
>`Babel` - это инструмент который позволяет транспилировать код.  
Транспиляция это процесс перевода кода с одного языка в другой.
##### Содержание:    
[Установка](#install)  
[Плагины и наборы](#plugins)  
[Настройка](#settings)  
[Использование](#use)  

<a name="install"><h4>Установка</h4></a>

Самым простым способом начать использовать `Babel` является использование `Babel CLI` или интерфейса командной строки из терминала.

#### Babel CLI
Для установки `Babel CLI` откроем терминал в директории проекта и напишем команду:  
`npm install babel-cli --save-dev`  
Данная команда установит `Babel CLI` и добавит запись в файл `package.json`

<a name="plugins"><h4>Плагины и наборы</h4></a>

Сам по себе `Babel` ничего не умеет, для транспиляции ему необходимы плагины. Плагины позволяют транспилировать какую-то 
одну часть нового стандарта. Например имеется плагин для классов, отдельный плагин для стрелочных функций и т.д.  
Что бы не устанавливать все плагины по отдельности мы можем установить набор. Для всех нововведений `ES2015` имеется набор который
так и называется `ES2015`  
`npm install babel-preset-es2015 --save-dev`

<a name="settings"><h4>Настройка</h4></a>
`.babelrc`

```js
{
    "presets": ["es2015"],
    "plugins": ["transform-es2015-arrow-functions"]
    // другие опции
}
```

`package.json`
```js
{
    "name": "babel-intro",
    "version": "1.0.0",
    "scripts": {
        "build": "babel src -d dist"
    },
    "babel": {
        "presets": ["es2015"],
        "plugins": ["transform-es2015-arrow-functions"]
        // другие опции
    }
}
```
___
<a name="use"><h4>Использование</h4></a> 
###### Транспиляция файлов
###### *Транспилировать файл* es6.js и поместить в файл es5.js
`babel es6.js --out-file es5.js`  
`babel es6.js -o es5.js`
###### Наблюдение за файлами
`babel es6.js --watch --out-file es5.js`  
`babel es6.js -w -o es5.js`
###### Минификация
`babel es6.js --out-file es5.js --minified`  
`babel es6.js -o es5.js -m`
###### Траспилирование директорий
`babel src --out-dir dist`  
`babel src -d dist`
###### Транспилировать все файлы в директории и поместить их в один файл
`babel src --out-file es5.js`  
###### Игнорирование файлов
###### *Игнорировать файлы* `test.js` и `spec.js`  
`babel src --out-dir lib --ignore test.js, spec.js`
