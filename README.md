ckeditor-image2-customization
=============================

[![Build Status][github-actions-image]][github-actions-url]
[![Dependencies Status][daviddm-image]][daviddm-url]
[![GitHub Tag][tag-image]][tag-url]

Customization for CKEditor image2 plugin.

Usage
-----

Add this repository as a git submodule in the CKEditor plugins folder:

```bash
git submodule add git@github.com:epfl-si/ckeditor-image2-customization.git src/static/ckeditor/ckeditor/plugins/image2
```

and load the script `override.js` after `ckeditor.js` and `ckeditor-init.js`:

```html
<script src="{% static 'ckeditor/ckeditor/plugins/image2/override.js' %}"></script>
```

Contributing
------------

See [Contributing](CONTRIBUTING.md).

Developer
---------

* [William Belle](https://github.com/williambelle)

License
-------

The MIT License

Copyright (c) 2020 ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI.

[github-actions-image]: https://github.com/epfl-si/ckeditor-image2-customization/workflows/Build/badge.svg
[github-actions-url]: https://github.com/epfl-si/ckeditor-image2-customization/actions
[daviddm-image]: https://david-dm.org/epfl-si/ckeditor-image2-customization/status.svg
[daviddm-url]: https://david-dm.org/epfl-si/ckeditor-image2-customization
[tag-image]: https://img.shields.io/github/tag/epfl-si/ckeditor-image2-customization.svg
[tag-url]: https://github.com/epfl-si/ckeditor-image2-customization/tags
