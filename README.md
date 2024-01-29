## Bug in the package **jest-environment-jsdom**

### Description

When tests import something from the "**entities**" folder, the error message **Cannot find module 'entities/SomeModule' from 'src/someTest.test.ts'** appears. This happens after installing the "**jest-environment-jsdom**" package. Without installing this package, imports work fine.

Versions
* yarn 4.0.2 or yarn or npm (reproduce in all versions)
* jest 29.7.0
* jest-environment-jsdom 29.7.0
* ts-node 10.9.2
* typescript 5.3.3
* babel 7.23.9

#### Not work
Reproduce this bug
* yarn
* yarn test

#### Work
* yarn
* yarn remove jest-environment-jsdom
* yarn test
