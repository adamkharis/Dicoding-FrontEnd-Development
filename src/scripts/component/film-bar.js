class FilmBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.shadowDOM.innerHTML = `
        <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .container {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }

        @media (min-width:576px) {

            .container,
            .container-sm {
                max-width: 540px
            }
        }

        @media (min-width:768px) {

            .container,
            .container-lg{
                max-width: 720px
            }


        }

        @media (min-width:992px) {

            .container,
            .container-lg{
                max-width: 960px
            }
        }

        @media (min-width:1200px) {

            .container,
            .container-lg{
                max-width: 1140px
            }
        }
        </style>

        `    
    ;
   
    }
}

customElements.define("film-bar", FilmBar);