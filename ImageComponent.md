#### assets/images/index.js
```js
import { imageNavMenu } from "./imageNavMenu";
import { imageToolbar } from "./imageToolbar";

export {
    imageNavMenu,
    imageFooter
}
```

#### assets/images/imageToolbar.js ( same pattern from all image*.js )
```js
export const imageToolbar = {
    iconOpen: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.1875 14.1875C3.625 14.1875 3.03125 13.9375 2.625 13.5313C2.21875 13.125 2 12.5625 2 12C2 11.4375 2.25 10.875 2.625 10.4375C3.03125 10.0313 3.59375 9.8125 4.1875 9.8125C4.75 9.8125 5.3125 10.0625 5.71875 10.4375C6.125 10.8438 6.375 11.4062 6.375 12C6.375 12.5625 6.125 13.125 5.71875 13.5313C5.3125 13.9375 4.75 14.1875 4.1875 14.1875ZM13.5312 13.5313C13.9375 13.125 14.1875 12.5625 14.1875 12C14.1875 11.4375 13.9375 10.875 13.5312 10.4375C13.125 10.0313 12.5625 9.8125 12 9.8125C11.4375 9.8125 10.8438 10.0625 10.4375 10.4375C10.0312 10.8438 9.8125 11.4062 9.8125 12C9.8125 12.5625 10.0625 13.125 10.4375 13.5313C10.8438 13.9375 11.4062 14.1875 12 14.1875C12.5625 14.1875 13.125 13.9375 13.5312 13.5313ZM21.3438 13.5313C21.75 13.125 22 12.5625 22 12C22 11.4375 21.75 10.875 21.3438 10.4375C20.9375 10.0313 20.375 9.8125 19.8125 9.8125C19.25 9.8125 18.6562 10.0625 18.25 10.4375C17.8438 10.8438 17.625 11.4062 17.625 12C17.625 12.5625 17.875 13.125 18.25 13.5313C18.6562 13.9375 19.2188 14.1875 19.8125 14.1875C20.375 14.1875 20.9375 13.9375 21.3438 13.5313Z" fill="#5E606A"/></svg>`,
    iconClose:  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7144 8.95236H8.95254V13.7143C8.95254 14.2381 8.52397 14.6666 8.00016 14.6666C7.47635 14.6666 7.04778 14.2381 7.04778 13.7143V8.95236H2.28588C1.76207 8.95236 1.3335 8.52379 1.3335 7.99998C1.3335 7.47617 1.76207 7.0476 2.28588 7.0476H7.04778V2.28569C7.04778 1.76188 7.47635 1.33331 8.00016 1.33331C8.52397 1.33331 8.95254 1.76188 8.95254 2.28569V7.0476H13.7144C14.2383 7.0476 14.6668 7.47617 14.6668 7.99998C14.6668 8.52379 14.2383 8.95236 13.7144 8.95236Z" fill="#5B3F91"/></svg>`,
}
```



#### Components/Image.js
```js
import { defaultImage } from 'assets/images/anyFile.js';
import HTMLReactParser from "html-react-parser";

export const Image = ( props ) => {
    const { src='', className='', onClick=null, title='' } = props;
    const isBase64 = src?.includes("data:image/");
    const isFile = src?.includes("static/");

    return( <>
        { 
            ( isFile || isBase64 )
            ?
               <img src={src || globe } className={`imageFile ${className}`} alt={title}
                    onError={(e) => (e.target.src = defaultImage )} />
            :
               <span className={`svgIcon ${className}`} onClick={onClick} title={title}>
                    {HTMLReactParser( src )}
               </span>
        }
    </>)
}
```


## USAGE
```js
import { defaultImage } from 'assets/images/anyFile.js';

import { imageTool } from "assets/images";
import { Image } from "Components/Image";


export default function UsageInAnyComponent(props) {

    const DATA = [
        { name: "door", icon: 'close' },
        { name: "window", icon: 'open' }
    ]

    const ICONS = {
        "door": imageTool?.iconOpen,
        "window": imageTool?.iconClose,
    }

    return (
        <>
            {
                DATA?.map(( item, index) => (
                    <>
                        <Image  src={ SOCIAL_ICONS[item.name] || defaultImage }
                                key={index}
                                onClick={ (e)=>{ console.log('any function') } }
                                className={'AnyClassName'}
                                title={item.name}
                                />
                    </>
                ))
            }
        </>
    )
}
```

