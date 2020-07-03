Contributing
============

Setup
-----

```bash
git clone git@github.com:epfl-si/ckeditor-image2-customization.git
cd ckeditor-image2-customization
npm i
```

Test
----

```bash
npm t
```

Release
-------

1. Bump the correct version (`npm version [<newversion> | major | minor | patch]`)
1. Update the file [CHANGELOG.md](CHANGELOG.md)
1. Create the tag (`git tag -a v<version> -m "Tagging the v<version> release"`)

License
-------

MIT License

Copyright (c) 2020 ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI.

See the [LICENSE](LICENSE) file for more details.
