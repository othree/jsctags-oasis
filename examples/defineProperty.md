```js
var o = {};

// Docstring for prop1
Object.defineProperty(o, "prop1", {
  get: function() { return "hi"; }
});

Object.defineProperty(o, "prop2", {
  value: 100
});

o.prop1; //: string
o.prop2; //: number

o.prop1; //doc: Docstring for prop1

var o2 = {};

Object.defineProperties(o2, {
  prop1: {get: function() { return 2; }},
  prop2: {value: true}
});

o2.prop1; //: number
o2.prop2; //: bool
```
```json
[
  {
    "id": "ec54bbc0-7aee-11e6-93b8-f1b9e76342de",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/defineProperty.js"
  },
  {
    "id": "ec5509e0-7aee-11e6-93b8-f1b9e76342de",
    "name": "prop1",
    "addr": "/\"prop1\"/",
    "kind": "v",
    "type": "string",
    "lineno": 4,
    "namespace": "o",
    "parent": "ec54bbc0-7aee-11e6-93b8-f1b9e76342de",
    "origin": {
      "!span": "61[3:25]-68[3:32]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/defineProperty.js"
  },
  {
    "id": "ec5530f0-7aee-11e6-93b8-f1b9e76342de",
    "name": "prop2",
    "addr": "/\"prop2\"/",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "o",
    "parent": "ec54bbc0-7aee-11e6-93b8-f1b9e76342de",
    "origin": {
      "!span": "137[7:25]-144[7:32]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/defineProperty.js"
  },
  {
    "id": "ec5530f1-7aee-11e6-93b8-f1b9e76342de",
    "name": "o2",
    "addr": "/o2/",
    "kind": "v",
    "lineno": 17,
    "origin": {
      "!span": "248[16:4]-250[16:6]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/defineProperty.js"
  },
  {
    "id": "ec555800-7aee-11e6-93b8-f1b9e76342de",
    "name": "prop1",
    "addr": "/\{/",
    "kind": "v",
    "type": "number",
    "lineno": 19,
    "namespace": "o2",
    "parent": "ec5530f1-7aee-11e6-93b8-f1b9e76342de",
    "origin": {
      "!span": "286[18:28]-354[21:1]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/defineProperty.js"
  },
  {
    "id": "ec555801-7aee-11e6-93b8-f1b9e76342de",
    "name": "prop2",
    "addr": "/\{/",
    "kind": "v",
    "type": "boolean",
    "lineno": 19,
    "namespace": "o2",
    "parent": "ec5530f1-7aee-11e6-93b8-f1b9e76342de",
    "origin": {
      "!span": "286[18:28]-354[21:1]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/defineProperty.js"
  }
]
```
```ctags
o	__DIR__/defineProperty.js	/o/;"	v	lineno:1
prop1	__DIR__/defineProperty.js	/"prop1"/;"	v	lineno:4	namespace:o	type:string
prop2	__DIR__/defineProperty.js	/"prop2"/;"	v	lineno:8	namespace:o	type:number
o2	__DIR__/defineProperty.js	/o2/;"	v	lineno:17
prop1	__DIR__/defineProperty.js	/\{/;"	v	lineno:19	namespace:o2	type:number
prop2	__DIR__/defineProperty.js	/\{/;"	v	lineno:19	namespace:o2	type:boolean
```
