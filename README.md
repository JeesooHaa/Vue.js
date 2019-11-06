# Vue.js Study 

## 00_vue_intro

## 02_vue_webpack_cli

```bash
# 1. node project 시작 
$ npm init 

# 2. vue 설치 
$ npm install vue
# i === install 
$ npm i vue 

# 3. webpack 설치
# -D 는 개발환경에서만 사용하겠다. 
# webpack 은 개발자의 편의성을 위한 툴
# webpack-cli 를 설치해야 webpack 에게 명령을 내릴 수 있다. 
$ npm i -D webpack webpack-cli

# 4. webpack 설정파일 생성 
$ touch webpack.config.js

# 5. webpack 은 js 파일만 변환 가능, 
# 때문에 vue 파일 및 template 를 webpack 이 변환할 수 있도록 도와주는 라이브러리 
$ npm install -D vue-loader vue-template-compiler

# 6. css 파일을 변환하기 위한 라이브러리 
$ npm install vue-style-loader css-loader -D
```

