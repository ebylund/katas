# Tableau Web Data Connector with Typescript

Typescript Tableau Web Data Connector implementation using ParcelJS for bundling and serving web assets


## Run it locally
----------------------------
`yarn install` : Installs dependencies

`yarn start` : serves WDC html on [localhost:1234](http://localhost:1234) bundled and served using [Parcel](https://parceljs.org/)

## Build for Production
---------------------------
`yarn build`

## Technical Details
---------------------------



```html
<head>
    <!-- <title>WDC Title</title> -->
    <meta http-equiv="Cache-Control" content="no-store" />  <!-- Disable caching in the WDC browser -->
    ...
    <script src="https://connectors.tableau.com/libs/tableauwdc-2.3.latest.js" type="text/javascript"></script>
    <script src="./index.ts" type="text/javascript"></script>
    ...
</head>
```

## Additional Resources
---------------------------

[Regenerator Runtime Fix](https://flaviocopes.com/parcel-regeneratorruntime-not-defined/)

[WDC API docs](https://tableau.github.io/webdataconnector/docs/api_ref.html)

[WDC Tutorial](https://tableau.github.io/webdataconnector/docs/wdc_tutorial)

[Borrowed Types](https://github.com/jdunkerley/TableauWDC/blob/master/src/tableau.d.ts)

[SWC: An Alternative to ParcelJS](https://swc.rs/)