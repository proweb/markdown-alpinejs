/*
Info: UIkit в этом наборе для поиска багов и нарушения совместимости

@link:
@link: 

*/

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import Alpine from "alpinejs";
import marked from "marked";

UIkit.use(Icons);
window.UIkit = UIkit


// Markdown editor
Alpine.data('editor', () => ({
    body: '## Markdown редактор',
    markdown: '',

    preview() {
        this.markdown = marked(this.body)
    },
    reset() {
        this.body = ''
    },
    init() {
        setInterval(() => {
            console.log(this.string)
            this.preview()
        }, 2000)        
    }
}));




window.Alpine = Alpine
Alpine.start()