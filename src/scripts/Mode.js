export default class Mode {
    constructor( dark, light, {body, note}) {
        this.dark_mode = dark
        this.light_mode = light
        this.current = light

        this.body_element = body
        this.note_element = note

        this.light_background_colors = {
            body: 'rgb(190, 190, 190)', 
            items_color: 'rgb(168, 175, 140)'
        }

        this.dark_background_colors = {
            body: 'rgb(78, 76, 76)', 
            items_color: 'rgb(67, 94, 112)'
        }
        console.log(this);
    }

    _setHandler() {
        document.querySelector('.mode').addEventListener('click', () => this.changeMode())
        document.querySelector('.mode').addEventListener('click', () => this.renderMode())
    }

    changeMode() {
        if (this.current === this.light_mode) { 
            this.current = this.dark_mode
        } else {
            this.current = this.light_mode
        }
    }

    renderMode() {
        if (this.current === this.dark_mode) {
            this.body_element.style.backgroundColor = this.dark_background_colors.body
        } else {
            this.body_element.style.backgroundColor = this.light_background_colors.body
        }
    }
    
}