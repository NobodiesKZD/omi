webpackJsonp([38],{50:function(n,t){n.exports="# Omim\n\nCross-Frameworks components, powered by Material Design and [Omi](https://github.com/Tencent/omi).\n\n## Features\n\n* Simple wrapper of [material-components-web](https://github.com/material-components/material-components-web)\n* Render by Custom Elements of Web Components\n* Any framework can use the components, such as Omi, React, Vue and Angular \n* Support both JSX and native HTML elements \n* Each element can be used independently\n\n## Usage\n\n### Via script\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script src=\"https://unpkg.com/@omim/core@0.0.1/button/index.js\"><\/script>\n\n<m-button>I am button</m-button>\n```\n\n### Via npm\n\n``` bash\nnpm install @omim/core\n```\n\nThen:\n\n```js\nimport '@omim/core/button'\n```\n\nThen use the element in Omi, React, Vue or Angular:\n\n``` html\n<m-button>I am button</m-button>\n```\n\nIt can also be used in pure js:\n\n```js\nvar button = document.createElement('m-button')\nbutton.innerHTML = 'I am button'\ndocument.body.append(button)\nbutton.addEventListener('click', function () {\n  console.log('Clicked!')\n})\n\n//or\n//document.body.innerHTML = '<m-button>I am button</m-button>'\n```\n\n## Change Theme Color\n\n```js\nwindow.OmimThemePrimary =  'red'\nwindow.OmimThemeSecondary =  'blue'\nwindow.OmimThemeError =  'yellow'\n\nimport '@omim/core/button'\n```\n\nor\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script>\n  window.OmimThemePrimary =  'red'\n  window.OmimThemeSecondary =  'blue'\n  window.OmimThemeError =  'yellow'\n<\/script>\n<script src=\"https://unpkg.com/@omim/core@0.0.1/button/index.js\"><\/script>\n\n<m-button>I am button</m-button>\n```\n\n## Contribution\n\n### CMD\n\nBuild component:\n\n```bash\nnpm run build -- component-name\n```\n\nBuild demo:\n\n```bash\nnpm start demo-name\n```\n\nPublish:\n\n```bash\nnpm publish --access public\n```\n\n## Links\n\n* [material.io docs](https://material.io/develop/web/components/buttons/) \n* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) \n"}});
//# sourceMappingURL=38.d15b89ea.chunk.js.map