# Package Template


## Checklist to edit
* ./demo/src/
* ./jsdoc/exportJsDoc.js
* ./src/
* ./package.json
* ./README.md



## Documentation: https://antonbobrov.github.io/template-node-package/



## How to start with NPM
```sh
npm install template-node
```

## How to start with CDN
```html
<script src="https://cdn.jsdelivr.net/npm/package-name/dist/cdn/index.min.js"></script>
```



## Example
```html
<div class="template-node">This is a template node element.</div>
```
```js
import templateNode from 'template-node';
```
```js
templateNode({
    selector: '.template-node'
});
```



## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
selector | string\|HTMLElement | .template-node | The selector of the element.