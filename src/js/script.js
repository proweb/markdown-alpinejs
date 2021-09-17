/*
Info: UIkit в этом наборе для поиска багов и нарушения совместимости

@link:
@link: 

*/

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import Alpine from "alpinejs";


UIkit.use(Icons);
window.UIkit = UIkit


// Markdown editor
Alpine.data('editor', () => ({
    body: '## Markdown разметка',
    markdown: '',

    preview() {
        this.markdown = window.marked(this.body)
    },
    reset() {
        this.body = ''

    }
}));




window.Alpine = Alpine
Alpine.start()