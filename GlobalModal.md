## Reusable Bootstrap Modal Component

#### GlobalModal.js
```js
import { Button, Modal } from "react-bootstrap";

export default function GlobalModal({children, ...props}) {

    const { header, footer,
            show, handleClose, keyboard=true, backdrop="static",
            size="lg", centered=true, fullscreen=false, contentClassName } = props;

    return (
      <Modal show={show} onHide={handleClose} onClose={handleClose}
             backdrop={backdrop} size={size} keyboard={keyboard}
             centered={centered}
             fullscreen={fullscreen}
             contentClassName={contentClassName}
             >

        { header && <Modal.Header closeButton>
                        <Modal.Title>{header.title}</Modal.Title>
                    </Modal.Header> }

        <Modal.Body>
          { children || "Not Data" }
        </Modal.Body>

        { footer && <Modal.Footer>
                        { footer?.btns?.map( 
                            btn => <Button variant={btn?.variant} className={btn?.className}>{btn?.title}</Button> ) 
                        }
                    </Modal.Footer> }
      </Modal>
    )
}
```





#### App.js
```js
import GlobalModal from "./GlobalModal";
//...
    <GlobalModal
            header={{title:"Modal Title"}} 
            show={showBykeaInfo}
            handleClose={() => setShowBykeaInfo(false)}
            handleShow={() => setShowBykeaInfo(true)}
            >
                SOME CONTENT OR < > COMPONENT  
            </GlobalModal>
//...
```
