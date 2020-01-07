import { pi, power, Foo } from './lib';

console.log(pi);
console.log(power(pi, pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());

/*
babel-polyfill
Babel을 사용하여 ES6+ 코드를 ES5 이하로 트랜스파일링하여도 브라우저가 지원하지 않는 코드가 남아 있을 수 있다.
예를 들어 Promise,Object.assign 등 ES5 언어로 트랜스파일링하여도 대체할 기능이 없기 때문이다.
*/

// polyfill 이 필요한 코드
console.log(new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 100);
}));

/*
Webpack이란
의존관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러이다.
다수의 자바스크립트 파일을 하나의 파일로 번들링하므로 html 파일에서 script 태그로 
다수의 자바스크립트 파일을 로드해야 하는 번거로움도 사라진다.
Webpack이 자바스크립트 파일을 번들링하기 전에 Babel을 로드하여 ES6+ 코드를 ES5 코드로 
트랜스파일링하는 작업을 실행다로고 설정할 것이다.
*/