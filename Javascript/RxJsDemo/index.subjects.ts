import { BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";

console.log('== BehaviorSubject ==');

const behaviorSubject$ = new BehaviorSubject(123);

// subscriber 1
behaviorSubject$.subscribe((data) => {
    console.log('Subscriber A:', data);
});

behaviorSubject$.next(Math.random());
behaviorSubject$.next(Math.random());

// subscriber 2
behaviorSubject$.subscribe((data) => {
    console.log('Subscriber B:', data);
});

behaviorSubject$.next(Math.random());

console.log(behaviorSubject$.value)








console.log('== Replaysubject ==');

const bufferSize = 2;
const windowTimeMs = 100;
const replaySubject$ = new ReplaySubject(bufferSize, windowTimeMs);

// subscriber 1
replaySubject$.subscribe((data) => {
    console.log('Subscriber A:', data);
});

replaySubject$.next(Math.random())
replaySubject$.next(Math.random())
replaySubject$.next(Math.random())

// subscriber 2
replaySubject$.subscribe((data) => {
    console.log('Subscriber B:', data);
});

replaySubject$.next(Math.random());






console.log('== Asyncsubject ==');

const subject = new AsyncSubject();

// subscriber 1
subject.subscribe((data) => {
    console.log('Subscriber A:', data);
});

subject.next(Math.random())
subject.next(Math.random())
subject.next(Math.random())

// subscriber 2
subject.subscribe((data) => {
    console.log('Subscriber B:', data);
});

subject.next(Math.random());
subject.complete();
