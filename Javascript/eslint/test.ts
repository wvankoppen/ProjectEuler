const { Subject, Observable, timer,interval, from } = require('rxjs');
const { tap, share} = require('rxjs/operators');

let source = interval(1000);
source = source.pipe(tap(console.log));

let trigger = from(source).pipe(share());

trigger.subscribe(x => console.log('o1', x));
trigger.subscribe(x => console.log('o2', x));
