# jcb-dialog :Custom Element Modal Dialog

A web component that displays a modal dialog.

---

## Attributes

### `visible`
- **Type**: `Boolean`
- **Description**: Indicates whether the modal is visible or not.
- **Default**: `false`

### `closable`
- **Type**: `Boolean`
- **Description**: Indicates whether the modal has a 'close' button on the top right corner.
- **Default**: `true`

---

## CSS Custom Properties

### `--jcb-dialog-background-color`
- **Description**: Color of the dialog background.
- **Default**: `#fcfcfc`

### `--jcb-dialog-border-width`
- **Description**: Width of the border.
- **Default**: `2px`

### `--jcb-dialog-border-color`
- **Description**: Color of the border.
- **Default**: `#aaa`

### `--jcb-dialog-border-radius`
- **Description**: Corner radius of the border.
- **Default**: `20px`

### `--jcb-dialog-padding`
- **Description**: Padding inside the dialog.
- **Default**: `20px`

---

## Events

### `close`
- **Description**: Fired when the dialog is closed.

---

## Usage Example

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>jcb-dialog</title>
      <script type="module" src="/src/jcb-dialog.js"></script>
   </head>
   <body>
         <jcb-dialog id="dialog">
            <p>Hello world!</p>
         </jcb-upload>
   </body>
</html>

<script>
   const dialog = document.getElementById('dialog')
   dialog.visible = true

   dialog.addEventListener('close', (e) => {
      dialog.visible = false
   })
</script>

<style>
:root {
   --jcb-dialog-background-color: #FFAAAA;
}

.panel {
   width: 800px;
   height: 400px;
}
</style>
```
