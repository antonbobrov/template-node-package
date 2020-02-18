# Package Template


## Checklist to edit
* ./demo/src/
* ./jsdoc/exportJsDoc.js
* ./src/
* ./package.json
* ./README.md



## How to start
```sh
npm install template-node
```



## Example
```html
<div class="template-node">This is a template node element.</div>
```
```js
import templateNode from 'template-node';
templateNode({
    selector: '.template-node'
});
```



## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
selector | string\|HTMLElement | .template-node | The selector of the element.