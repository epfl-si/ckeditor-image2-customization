/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2020.
 */

// Enable captioned image by default
CKEDITOR.on('dialogDefinition', function (evt) {
  var dialogName = evt.data.name;
  var dialogDefinition = evt.data.definition;
  if (dialogName === 'image2') {
    var infoTab = dialogDefinition.getContents('info');
    var captionBox = infoTab.get('hasCaption');
    captionBox.setup = function (widget) {
      if (widget.data.src) {
        this.setValue(widget.data.hasCaption);
      } else {
        this.setValue(true);
      }
    };
  }
});
