# react-lineto

Draw a progress line between two elements in React.

[![Build Status](https://travis-ci.org/kdeloach/react-lineto.svg?branch=master)](https://travis-ci.org/kdeloach/react-lineto)

## Getting Started

```
yarn install
yarn run demo
```

Browse to [localhost:4567](http://localhost:4567).

#### Example

```
import { Line } from 'react-lineto';

function render() {
    return (
        <Line x0={0} y0={0} x1={10} y1={10} />
    );
}
```

#### Properties

| Name        | Type   | Description                                    | Example Values
| ----------- | ------ | ---------------------------------------------- | --------------
| borderColor | string | Border color                                   | `#f00`, `red`, etc.
| borderStyle | string | Border style                                   | `solid`, `dashed`, etc.
| borderWidth | number | Border width (px)                              |
| className   | string | Desired CSS className for the rendered element |
| within      | string | CSS class name of the desired container        |
| x0\*        | number | First X coordinate                             |
| x1\*        | number | Second X coordinate                            |
| y0\*        | number | First Y coordinate                             |
| y1\*        | number | Second Y coordinate                            |
| zIndex      | number | Z-index offset                                 |
| innerColor  | string | Progress Bar Color                             | `#00ff00`, etc.

\* Required

## Release Checklist

1. Bump version in `package.json`
1. Update `CHANGELOG.md`
1. Run `yarn build` or `./scripts/update`
1. Create version commit (ex. "2.0.0")
1. Create matching tag (ex. "2.0.0")
1. Push `master` branch and tags to origin
1. Verify Travis CI published NPM package
