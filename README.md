- react 18
- typescript
- rollup
- tailwindcss
- postcss
- storybook
- sass (scss)

---

## Introduction

이 튜토리얼은 React ui component library를 생성 및 게시하고 Github에서 호스팅하는 과정을 안내합니다.

이 튜토리얼이 끝나면 미래의 모든 React 프로젝트에서 다음을 수행할 수 있습니다.

```sh
npm install @hansanghyeon/react-component-library
```

```jsx
import MyCustomComponents from '@hansanghyeon/react-component-library

const MyApp = () => {
  return (
    <div>
      <MyCustomComponents />
    </div>
  )
}
```

## 전제조건 그리고 설정

이 프로젝트는 사용자다 다음 사항에 익숙하고 설치했다고 가정합니다.

- code editor/IDE
- npm, yarn
- package install (JavaScript 프로젝트에 패키지를 추가하는 방법을 알고있다고 가정)
- Bash, terminal 명령을 실행
- Git
- React
- Typescript

```sh
npm init
```

모든 값에 대해 기본값을 사용할 수 있습니다.

다음으로 components를 만드는데 필요한 도구를 추가합니다.

```sh
npm install react typescript @types/react --save-dev
```

## 컴포넌트 만들기

우리는 이제 컴포넌트를 만들 수 있습니다. 라이브러리를 생성하기 때문에 각 계층에 대한 인덱스 파일을 생성하고 라이브러리를 사용하는 사람들이 최대한 쉽게 가져올 수 있도록 각 계층에서 구성 요소를 내보낼 것입니다.

프로젝트의 루트 내에서 다음 파일 구조를 만듭니다.

```sh
.
├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   └── index.ts
├── package.json
└── package-lock.json
```

구조를 다시 확인하십시오. `index.ts`는 세 개가 있어야합니다. 프로젝트 내에서 React의 컴포넌트를 구조화를 하는 선호하는 방법이 있다면 물론 원하는대로 수행 할 수 있습니다.

`src/components/Button/Button.tsx`

```tsx
import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
```

`label`을 받는 예제를 만들었습니다.

`src/components/Button/index.ts`

```ts
export { default } from "./Button";
```

그런 다음 컴포넌트 디렉토리에서 해당 버튼을 보냅니다.

`src/components/index.ts`

```ts
export { default as Button } from "./Button";
```

마지막으로 기본 src 디렉토리에서 모든 컴포넌트를 내보냅니다.

`src/index.ts`

```ts
export * from './components';
```

## TypeScript 추가

지금까지 우리는 프로젝트에서 Typescript를 아직 초기화하지 않았습니다. Typescript를 사용하기 위해 기술적으로 구성 파일이 필요하지는 않지만 라이브러리 구축의 복잡성 때문에 분명히 필요합니다.

다음 명령을 실행하여 기본 구성을 초기화할 수 있습니다.

```sh
npx tsc --init
```

그러면 `tsconfig.json`에 Typescript의 대한 모든 기본 구성 옵션이 포함된 파일이 프로젝트 루트에 생성됩니다.

`tsconfig.json` 최신 버전의 TS에서 각 값에 대한 설명을 자동으로 생성합니다. [TypeScript: Documentation - What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)에서 config에 대한 전체 문서를 찾을 수 있습니다.

IDE에 따라 초기화 직후에 프로젝트에서 오류가 발생하기 시작합니다. 그 이유는 두 가지 입니다.
- Typescript가 기본적으로 React를 이해하기 위한 구성이 아니다.
- 아직 모듈을 처리하는 방법을 정의하지 않았다.

이 문제를 해결하기 위해서 다음 값으로 변경해줍니다. `tsconfig.json`

```json
{
  "compilerOptions": {
    // Default
    "target": "es5", 
    "esModuleInterop": true, 
    "forceConsistentCasingInFileNames": true,
    "strict": true, 
    "skipLibCheck": true,

    // Added
    "jsx": "react", 
    "module": "ESNext",  
    "declaration": true,
    "declarationDir": "types",
    "sourceMap": true,
    "outDir": "dist",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "emitDeclarationOnly": true,
  }
}
```

TS(4.4) Typescript를 사용하여 생성 된 기본값을 기반으로 이 값을 몇 개의 다른 섹션으로 분리했습니다.

- `"jsx": "react"` JSX를 React 코드로 변환
- `"module": "ESNext"` 라이브러리용 최신 JS 모듈 생성
- `"declaration": true` `.d.ts` 라이브러리 유형에 대한 파일 출력
- `"declarationDir": "types"` `.d.ts` 파일을 저장할 위치
- `"sourceMap": true` 디버깅을 위해 JS 코드를 TS 파일 원보으로 다시 매핑
- `"outDir": "dist"` 프로젝트가 생성될 디렉토리
- `"moduleResolution": "node"` 모듈을 찾기 위해 node.js 규칙을 따릅니다.
- `"allowSyntheticDefaultImports": true` 수동으로 생성된 것이 없으면 기본 내보내기를 가정합니다.
- `"emitDeclarationOnly": true` JS를 생성하지 않음(rollup에서 수행) 내보내기 유형 선언만 생성

## Rollup 추가

다음은 프로젝트에 Rollup을 추가합니다.

롤업은 브라우저가 더 잘 이해할 수 있는 단일 소스로 개별 Javascript 모듈을 번들로 묶는 도구라는 점에서 webpack과 유사합니다.

webpack, rollup 두 도구 모두 구성에 따라 동일한 목표를 달성할 수 있지만 일반적으로 webpackㅇ은 애플리케이션 번들링에 사용되는 반면 rollup은 라이브러리 번들링에 특히 적합합니다. 이것이 rollup을 선택한 이유입니다.

또한 webpack과 유사하게 rollup은 플러그인 생태게를 사용합니다. 설계상 rollup은 모든 작업을 수행하는 방법을 알지 못하며 개별적으로 설치된 플러그인에 의존하여 필요한 기능을 추가합니다.

우리는 라이브러리의 초기 구성을 위해 4개의 플러그인에 의존할 것입니다.

- `@rollup/plugin-node-resolve` 모듈에 대한 노드 확인 알고리즘 사용
- `@rollup/plugin-typescript` rollup에 typescript 파일 처리
- `@rollup/plugin-commonjs` commonjs 모듈을 ES6 모듈로 변환
- `rollup-plugin-dts` `.d.ts` 파일 rollup

rollup plugin 설치

```sh
npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev
```

라이브러리를 번들링하는대 필요한 rollup 구성을 작성합니다. `rollup.config.js`

```js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
```

설치한 4개의 플러그인을 가져옵니다. `package.json` 파일을 commonJS 모듈로 변수에 가져옵니다 `packageJson` 이 변수를 사용하여 다음 섹션에서 정의할 기본 및 모듈 값을 참조합니다.

라이브러리의 진입점은 모든 구성 요소를 내보내는 폴더의 `src/index.ts` 파일입니다.

두 번째 구성은 라이브러리 type이 배포되는 방식을 정의하고 이를 위해 `dts` 플러그인을 사용합니다.

rollup을 실행하기 전에 `package.json`에 `main` `module` `type` 값을 정의하는 것입니다.

```json
{
  "name": "template-react-component-library",
  "version": "0.0.1",
  "description": "A simple template for a custom React component library",
  "scripts": {
    "rollup": "rollup -c"
  },
  "author": "Hansanghyeon",
  "license": "ISC",
  "devDependencies": {
    "@rollup/plugin-commonjs": "^21.0.1",
    "@rollup/plugin-node-resolve": "^13.0.6",
    "@rollup/plugin-typescript": "^8.3.0",
    "@types/react": "^17.0.34",
    "react": "^17.0.2",
    "rollup": "^2.60.0",
    "rollup-plugin-dts": "^4.0.1",
    "typescript": "^4.4.4"
  },
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "files": [
    "dist"
  ],
  "types": "dist/index.d.ts"
}
```

여기서 가장 중요한 변경사항은 다음과 같습니다.

- `main` commonJS 모듈의 출력 경로를 정의
- `module` ES6 모듈의 출력 경로를 정의
- `files` 전체 라이브러리에 대한 출력 디렉토리 정의
- `types` 라이브러리의 타입 위치 정의
- `scripts` rollup의 스크립트 정의

## CSS 추가

CSS를 사용하기 위해서 예제로 `src/components/Button/Button.css`를 추가합니다.

```css
button {
  font-size: 60px;
}
```

`src/components/Button/Button.tsx`

```tsx
import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
```

이제 rollup에 해당 구문을 처리하는 방법을 알려야합니다. 이를 위해 우리는 `rollup-plugin-postcss` 플러그인을 사용합니다.

```sh
npm install rollup-plugin-postcss --save-dev
```

`rollup.config.js`

```js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// NEW
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),

      // NEW
      postcss(), 
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],

    // NEW
    external: [/\.css$/],
  },
];
```

주석으로 표시된 세 개의 행에 유의하십시오. components에서 모듈이 외부에있고 type 정의의 일부로 처리되면 안되기 때문에 `dts`에서 제외합니다.

## 최적화

이 설정으로 할 수 있는 몇 가지 쉬운 최적화가 있습니다. 첫 번째는 번들을 축소하고 전체 파일 크기를 줄이는 `terser`라는 플러그인을 추가하는 것입니다.

다른 하나는 종속성 중 일부를 `peeerDependencies` rollup의 피어 종속성 플러그인을 사용하면 라이브러리를 사용하는 프로젝트에서 어떤 종속성이 필요한지(ex: React) 알릴 수 있지만 실제로 라이브러리 자체와 React 사본을 번들로 묶지 않을 것입니디. 사용자가 프로젝트에 이미 React가 있을 경우 이를 사용하고, 그렇지 않으면 실행할 때 설치됩니다.

두 플러그인을 설치

```sh
npm install rollup-plugin-peer-deps-external rollup-plugin-terser --save-dev
```

`rollup.config.js`

```js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

//NEW
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // NEW
      peerDepsExternal(),

      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),

      // NEW
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
```

그런 다음 파일에서 React를 `devDependencies`에서 `peerDependencies`로 이동합니다.

```
{
  "devDependencies": {
    "@rollup/plugin-commonjs": "^21.0.1",
    "@rollup/plugin-node-resolve": "^13.0.6",
    "@rollup/plugin-typescript": "^8.3.0",
    "@types/react": "^17.0.34",
    "rollup": "^2.60.0",
    "rollup-plugin-dts": "^4.0.1",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.1",
    "rollup-plugin-terser": "^7.0.2",
    "typescript": "^4.4.4"
  },
  "peerDependencies": {
    "react": "^17.0.2"
  },
  ...
```

## Test 추가

component에 테스트를 추가하기 위해 [React Testing Library | Testing Library](https://testing-library.com/docs/react-testing-library/intro/)를 설치하고 해당 테스트를 실행하기 위해 jest를 설치합니다.

```sh
npm install @testing-library/react jest @types/jest --save-dev
```

Button 디렉토리에 다음 파일을 생성합니다. `Button.test.tsx`

`src/components/Button/Button.test.tsx`

```tsx
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
});
```

이것은 브라우저가 아닌 DOM 구현에서 버튼을 렌더링하고 올바르게 마운트되는지 확인합니다. 이것은 매우 간단한 테스트입니다. 더 깊이 들어가려면 React Testing Library [문서](https://testing-library.com/docs/)를 더 읽어보세요

테스트를 실행하기 전에 jest를 구성합니다. 프로젝트 루트에 `jest.config.js` 파일을 만듭니다.

```js
module.exports = {
  testEnvironment: "jsdom",
};
```

이것은 jest가 jsdom을 DOM 구현으로 사용하도록 지시합니다.

`package.json`

```
{
  "scripts": {
    "rollup": "rollup -c",
    "test": "jest"
  },
  ...
}
```

다음 명령을 통해 테스트를 실행할 수 있습니다.

```sh
npm run test
```

오류가 발생합니다! 오류는 JSX 코드가 발생한 경우입니다. rollup 구성으로 JSX를 처리하기 위해 Typescript를 사용했고 rollup에서 수행하는 방법을 플러그인으로 구성했습니다. 하지만 jest에는 그런 설정이 없습니다.

JSX 변환을 처리 하려면 Babel을 설치해야 합니다.

```sh
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev
```

이제 우리는 프로젝트 루트에 Babel 구성 파일을 생성합니다.

`babel.config.js`

```js
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
```

하지만 아직 css를 이해할 수 없다는 오류가 나옵니다. `postcss`에서 rollup 플러그인으로 이를 처리했지만 Jest에서는 없습니다.

[keyz/identity-obj-proxy: An identity object using ES6 proxies. Useful for mocking webpack imports like CSS Modules.](https://github.com/keyz/identity-obj-proxy)라는 패키지를 설치합니다. 이렇게 하면 모든 유형의 import를 일반 객체로 취급하도록 Jest를 구성할 수 있습니다.

```sh
npm install identity-obj-proxy --save-dev 
```

`moduleNameMapper` 속성을 포함하는 Jest.config를 업데이트합니다.

`jest.config.js`

```js
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
```

이제 성공적인 테스트를 할 수 있습니다.

## Storybook 추가

Storybook은 웹/애플리케이션 외부 UI를 시각화하기 위한 도구입니다. 다양한 상태를 프로토타이핑하고 테스트하여 화면에 관련 없는 다른 구성 요소를 배치하는 추가 오버헤드 없이 설계 방식대로 작동하는지 확인하는 것은 환상적입니다.

**React 18를 사용하기 때문에 Storybook의 prerelease를 다운 받습니다**

```sh
npx sb init --builder webpack5
npx sb upgrade --prerelease
```

이제 버튼에 대한 간단한 스토리를 만들어 보겠습니다. `Button` 디렉토리에 다음 파일을 생성합니다.

`src/components/Button/Button.stories.tsx`

```tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};
```

편집: 누락된 종속성으로 인해 오류가 발생할 수 있습니다. 이 문제가 발생하면 몇 가지 해결책이 있습니다.

첫 번째는 이러한 종속성을 수동으로 설치하는 것입니다. 예를 들어 react-dom. 프로젝트 자체가 이러한 라이브러리에 의존해서는 안 되므로 이상적이지 않습니다. 따라서 여기 예제와 같이 Storybook의 피어 종속성에 포함되어 있으므로 포함할 필요가 없습니다 .

단순히 새로운 npm install명령을 실행하면 사용 중인 모든 peerDependencies라이브러리가 설치됩니다. 이것을 실행하기 전에 package-lock.json및 node_modules디렉토리를 삭제해야 할 수도 있습니다. 새로 설치하면 자동으로 재생성됩니다.

라이브러리 간의 중복 및 누락된 종속성과 관련된 문제를 해결하는 것은 까다로울 수 있습니다. 인내심을 갖고 오류 메시지를 읽으십시오!)

---

[How to Create and Publish a React Component Library - DEV Community](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)