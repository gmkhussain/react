#### Components/FontsLoad.js
```js
export const FontsLoad = async ( fonts=['ThisFontNotFounded', 'Arial'] , callback=()=>{} ) => {
    await fonts;
    for (const font of fonts) {
        document.fonts.check(`80px ${font}`)
            ? document.fonts.load(`80px ${font}`).then( () => { /* Loaded */ } )
            : console.log( `Font: ${font} not founded` )
    }
    document.fonts.ready.then(() => { console.log("Ready"); callback() })
}
```


### Usage in Any File
```js
import { FontsLoad } from "Components/FontsLoad/FontsLoad";

//...
    FontsLoad(
      ['Arial','FONT_NOT_FOUNDED'], 
    )
//...
```
