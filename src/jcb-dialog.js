import { LitElement, css, html } from 'lit'

/**
   * A custom-element which displays a modal dialog
   * @attr {Boolean} visible - Indicates whether it is visible or not (default: false)
   * @attr {Boolean} closable - Indicates whether it has a 'close' button on the top right corner (default: true)
   * @cssprop --jcb-dialog-background-color - Color of the background (default: #fcfcfc)
   * @cssprop --jcb-dialog-border-width - Border width (default: 2px)
   * @cssprop --jcb-dialog-border-color - Border color (default: #aaa)
   * @cssprop --jcb-dialog-border-radius - Border corner radius (default: 20px)
   * @cssprop --jcb-dialog-padding - Content padding (default: 20px)
   * @event close - Fired on dialog closing
   */
export class Dialog extends LitElement {

   static get styles() {
      return css`
         * {box-sizing: border-box}
         
         /* Add padding and center-align text to the container */
         .container {
            padding: var(--jcb-dialog-padding, 20px);
            text-align: center;
         }
         
         /* The Modal (background) */
         .modal {
            position: fixed; /* Stay in place */
            z-index: 1000; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            padding-top: 50px;
         }
         
         /* Modal Content/Box */
         .modal-content {
            position: relative;
            background-color: var(--jcb-dialog-background-color, #fefefe);
            margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
            border-style: dashed;
            border-width: var(--jcb-dialog-border-width, 2px);
            border-color: var(--jcb-dialog-border-color, #aaa);
            border-radius: var(--jcb-dialog-border-radius, 20px);
            width: 80%; /* Could be more or less, depending on screen size */
            max-width: 600px;
         }
         
         /* Style the horizontal ruler */
         hr {
            border: 1px solid #f1f1f1;
            margin-bottom: 25px;
         }
         
         /* The Modal Close Button (x) */
         .close {
            position: absolute;
            right: 20px;
            top: 5px;
            font-size: 40px;
            font-weight: bold;
            color: #222222;
         }
         
         .close:hover, .close:focus {
            opacity: 0.5;
            cursor: pointer;
         }
      `
   }

   static get properties() {
      return {
         visible: { type: Boolean },
         closable: { type: Boolean },
      }
   }

   constructor() {
      super()
      this.visible = false
      this.closable = true
   }

   close() {
      const event = new CustomEvent('close', { 
         bubbles: true,
         composed: true,
      })
      this.dispatchEvent(event)
   }

   // called whenever a property changes
   render() {
      return html`
         <div class="modal" style="display: ${this.visible ? 'block' : 'none'};">
            <form class="modal-content">
               ${this.closable ? html`<span @click="${this.close}" class="close" title="Close">&times;</span>` : ''}
               <div class="container">
                  <slot></slot>
               </div>
            </form>
         </div>
      `
   }
}

customElements.define('jcb-dialog', Dialog)
