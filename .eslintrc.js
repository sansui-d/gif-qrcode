module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "no-undef": 0,
    indent: [
      "error",
      4,
      {
        SwitchCase: 1,
      },
    ], // 强制4格风格
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ], // 使用@typescript-eslint/no-unused-vars配置
    "import/no-unresolved": "off",
    "react/jsx-uses-react": "off", // 屏蔽'React' is defined but never used错误
    "import/order": "off", // 不需要引入顺序验证
    "comma-dangle": ["error", "never"], // 不允许最后多余的逗号
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // 优先使用 interface 而不是 type
    "react-hooks/rules-of-hooks": "error", // 检查Hook的规则
    "react-hooks/exhaustive-deps": "off", // 检查effect的依赖
    "max-params": ["warn", 8], // 方法最多8个参数
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        variables: false,
      },
    ], // 注意：方法和变量可以在使用之后定义！为了解决hooks中经常会出现的循环依赖的问题，不过要注意危险
    "react/jsx-no-bind": [
      "warn",
      {
        allowArrowFunctions: true, // 暂且允许箭头函数，来提升代码可读性
      },
    ],
    "max-nested-callbacks": ["warn", 4], // 循环最多4层，超过4层警告
    "react/require-default-props": "off", // 组件的非必填属性不要求一定有默认值
    "react/no-find-dom-node": "off", // 暂且允许使用react-dom的findDOMNode方法
    dotNotation: 0,
    "object-curly-spacing": [
      0,
      "always",
      {
        objectsInObjects: false,
      },
    ],
    "no-console": "off",
    "block-spacing": [2, "always"],
    "brace-style": [
      2,
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    "space-unary-ops": [1, { words: true, nonwords: false }],
  },
};
