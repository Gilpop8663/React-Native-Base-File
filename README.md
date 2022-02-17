# React-Native-Base-File

### 리액트 네이티브 + expo + Typescript  + prettier + eslint + Navigation 등을 기본 세팅한 파일입니다. 세팅하는 시간을 줄이기 위해 만들었습니다.

## 사용 방법

```
npm install
npm start
```

## 바꿔야 할 것들

### git 폴더 삭제

<img src="https://user-images.githubusercontent.com/80146176/154389796-0c58fa65-8494-4869-bf2b-dc4df6e4cb7b.png"/>

### package.json 의 name 바꾸기 

<img src="https://user-images.githubusercontent.com/80146176/154389879-0ac981c4-ffb9-4c30-8200-eec085d50a39.png"/>

## 폴더에 적용시킨 부분들

### prettier 파일

- 홀따옴표를 사용하게 하였습니다.

```
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "jsxBracketSameLine": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### eslint 파일

- 여러 규칙들이 적용되어 있습니다.

```
{
  "extends": ["react-app", "plugin:prettier/recommended", "prettier"],
  "rules": {
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn", // jsx 내 불필요한 중괄호 금지
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}
```

### tsconfig.ts 파일

- expo + RN 개발환경에 맞게 설정하였습니다.

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": [
    "expo/tsconfig.base",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ],
  "extends": "expo/tsconfig.base"
}
```
