// 告诉 TS：只要是引入以 .module.scss 结尾的文件，就把它当成一个对象，里面所有的 key 和 value 都是字符串。
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// 顺便把普通的 css、scss 也声明一下，以防以后用到
declare module '*.scss';
declare module '*.css';
