```js
function Class() {}
Class.prototype = mixin({
  // M3
  m3: function() {}
})

function mixin(obj) {
  obj.m1 = m1
  obj.m2 = m2
  return obj
}

// M1
function m1() {}
// M2
function m2() {}

function OtherClass() {}
OtherClass.prototype = mixin({
  // M4
  m4: function() {}
})

let c = new Class

c.m1 //doc: M1
c.m2 //doc: M2
c.m3 //doc: M3
c.m4 //: ?

let oc = new OtherClass

oc.m1 //doc: M1
oc.m3 //: ?
oc.m4 //doc: M4

mixin(new Date) //: Date
mixin("foo") //: string
```
```json
[
  {
    "id": "0a6a7460-7aef-11e6-853a-a34102e927ea",
    "name": "Class",
    "addr": "/Class/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-14[0:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6b10a0-7aef-11e6-853a-a34102e927ea",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 2,
    "namespace": "Class",
    "parent": "0a6a7460-7aef-11e6-853a-a34102e927ea",
    "origin": {
      "!span": "26[1:6]-35[1:15]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6b37b0-7aef-11e6-853a-a34102e927ea",
    "name": "m3",
    "addr": "/m3/",
    "kind": "f",
    "type": "void function()",
    "lineno": 4,
    "namespace": "Class.prototype",
    "parent": "0a6b10a0-7aef-11e6-853a-a34102e927ea",
    "origin": {
      "!span": "56[3:2]-58[3:4]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f0840-7aef-11e6-853a-a34102e927ea",
    "name": "mixin",
    "addr": "/mixin/",
    "kind": "f",
    "type": "!0 function(Class.prototype|string)",
    "lineno": 7,
    "origin": {
      "!span": "87[6:9]-92[6:14]",
      "!type": "fn(obj: Class.prototype|string) -> !0",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6e44f0-7aef-11e6-853a-a34102e927ea",
    "name": "m1",
    "addr": "/m1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "namespace": "Class.prototype",
    "parent": "0a6b10a0-7aef-11e6-853a-a34102e927ea",
    "origin": {
      "!span": "159[13:9]-161[13:11]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f0841-7aef-11e6-853a-a34102e927ea",
    "name": "m1",
    "addr": "/m1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "origin": {
      "!span": "159[13:9]-161[13:11]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f2f50-7aef-11e6-853a-a34102e927ea",
    "name": "m1",
    "addr": "/m1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "namespace": "OtherClass.prototype",
    "parent": "0a6f0844-7aef-11e6-853a-a34102e927ea",
    "origin": {
      "!span": "159[13:9]-161[13:11]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f0842-7aef-11e6-853a-a34102e927ea",
    "name": "m2",
    "addr": "/m2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 16,
    "origin": {
      "!span": "182[15:9]-184[15:11]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f5660-7aef-11e6-853a-a34102e927ea",
    "name": "m2",
    "addr": "/m2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 16,
    "namespace": "OtherClass.prototype",
    "parent": "0a6f0844-7aef-11e6-853a-a34102e927ea",
    "origin": {
      "!span": "182[15:9]-184[15:11]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6ee130-7aef-11e6-853a-a34102e927ea",
    "name": "m2",
    "addr": "/m2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 16,
    "namespace": "Class.prototype",
    "parent": "0a6b10a0-7aef-11e6-853a-a34102e927ea",
    "origin": {
      "!span": "182[15:9]-184[15:11]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f0843-7aef-11e6-853a-a34102e927ea",
    "name": "OtherClass",
    "addr": "/OtherClass/",
    "kind": "f",
    "type": "void function()",
    "lineno": 18,
    "origin": {
      "!span": "200[17:9]-210[17:19]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f0844-7aef-11e6-853a-a34102e927ea",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 19,
    "namespace": "OtherClass",
    "parent": "0a6f0843-7aef-11e6-853a-a34102e927ea",
    "origin": {
      "!span": "227[18:11]-236[18:20]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f0845-7aef-11e6-853a-a34102e927ea",
    "name": "m4",
    "addr": "/m4/",
    "kind": "f",
    "type": "void function()",
    "lineno": 21,
    "namespace": "OtherClass.prototype",
    "parent": "0a6f0844-7aef-11e6-853a-a34102e927ea",
    "origin": {
      "!span": "257[20:2]-259[20:4]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f7d70-7aef-11e6-853a-a34102e927ea",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "Class",
    "lineno": 24,
    "origin": {
      "!span": "283[23:4]-284[23:5]",
      "!type": "+Class",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "0a6f7d71-7aef-11e6-853a-a34102e927ea",
    "name": "oc",
    "addr": "/oc/",
    "kind": "v",
    "type": "OtherClass",
    "lineno": 31,
    "origin": {
      "!span": "359[30:4]-361[30:6]",
      "!type": "+OtherClass",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/mixin.js"
  }
]
```
```ctags
Class	__DIR__/mixin.js	/Class/;"	f	lineno:1	type:void function()
prototype	__DIR__/mixin.js	/prototype/;"	v	lineno:2	namespace:Class
m3	__DIR__/mixin.js	/m3/;"	f	lineno:4	namespace:Class.prototype	type:void function()
mixin	__DIR__/mixin.js	/mixin/;"	f	lineno:7	type:!0 function(Class.prototype|string)
m1	__DIR__/mixin.js	/m1/;"	f	lineno:14	namespace:Class.prototype	type:void function()
m1	__DIR__/mixin.js	/m1/;"	f	lineno:14	type:void function()
m1	__DIR__/mixin.js	/m1/;"	f	lineno:14	namespace:OtherClass.prototype	type:void function()
m2	__DIR__/mixin.js	/m2/;"	f	lineno:16	type:void function()
m2	__DIR__/mixin.js	/m2/;"	f	lineno:16	namespace:OtherClass.prototype	type:void function()
m2	__DIR__/mixin.js	/m2/;"	f	lineno:16	namespace:Class.prototype	type:void function()
OtherClass	__DIR__/mixin.js	/OtherClass/;"	f	lineno:18	type:void function()
prototype	__DIR__/mixin.js	/prototype/;"	v	lineno:19	namespace:OtherClass
m4	__DIR__/mixin.js	/m4/;"	f	lineno:21	namespace:OtherClass.prototype	type:void function()
c	__DIR__/mixin.js	/c/;"	v	lineno:24	type:Class
oc	__DIR__/mixin.js	/oc/;"	v	lineno:31	type:OtherClass
```
