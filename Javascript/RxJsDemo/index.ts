import { Observable, of, fromEvent, Subject, observable, interval, queueScheduler, asyncScheduler, asapScheduler, merge, from, timer, combineLatest, forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, mergeMap, filter, tap, catchError, take, share, publish, multicast, refCount, publishLast, publishBehavior, publishReplay, observeOn, mapTo, combineAll} from "rxjs/operators";
import { TestScheduler } from 'rxjs/testing';

//#region Operator custom
function myCustomOperator(year, log) {
    return source$ => {
        return new Observable(subscriber => {
            return source$.subscribe(
                book => {
                    if (book.publicationYear < year) {
                        subscriber.next(book);
                    }
                    if (log) {
                        console.log('Book by custom operator:' + book.title )
                    }
                }
            );
        })
    }
}

function grabNewerThan(year) {
    return filter(b => b.publicationYear > 1950)
}
//#endregion

//#region simple iteration of sequence of numbers
// let sequence$ = of ([1,2,3,4,5]);
// sequence$.subscribe(console.log);
//#endregion

//#region Hook DOM events
let loaded$ = fromEvent(document, 'DOMContentLoaded');
loaded$.subscribe(s => {
    let click1$ = fromEvent(document.getElementById('button1'), 'click');
    click1$.subscribe(s => { 
        document.getElementById('content1').innerHTML += "<span>hoi</span>" })    
});
//#endregion

//#region Filter and load books
loaded$.subscribe(s => { 
let click2$ = fromEvent(document.getElementById('button2'), 'click');
click2$.subscribe(s => 
    ajax('api/books')
    .pipe(
        mergeMap(response => response.response),
        // myCustomOperator(1950, true)
        grabNewerThan(1950)
        // filter(b => b.publicationYear < 1950),
        // tap(b => console.log("book: ", b.title))
        )
    .subscribe(
        book => console.log(book)
    ));
    });
//#endregion

//#region Subjects
// let subject$ = new Subject();
// subject$.subscribe(v => console.log("Obs 1: " + v));
// subject$.subscribe(v => console.log("Obs 2: " + v));

// subject$.next('Hi there!');

// let source$ = new Observable(subscriber => {
//     subscriber.next('Greeting!');
// });
// source$.subscribe(subject$);
//#endregion

//#region Hot/cold observables
// let source$ = interval(1000)
//     .pipe(
//         take(5),
//         tap((x) => console.log(1, x)),
//         //share()
//         //multicast(new Subject()),
//        // publishBehavior(42),
//         tap((x) => console.log(2, x)),
//         //refCount(),
//         share(),
//         tap((x) => console.log(3, x)),
//         );
    

// // subject$ = new Subject();
// // source$.subscribe(subject$);   

// source$.subscribe(
//     v => console.log("Obs A: " + v),
//     null,
//     () => console.log("Obs A: completed!"),
// );

// setTimeout(() => {
//     source$.subscribe(v => console.log("Obs B: " + v));
// }, 1000);

// // setTimeout(() => {
// //     source$.subscribe(v => console.log("Obs C: " + v));
// // }, 2000);

// // setTimeout(() => {
// //     source$.subscribe(
// //         v => console.log("Obs D: " + v),
// //         null,
// //         () => console.log("Obs D: completed!"),
// //         );
// // }, 4500);

// //source$.connect();

//#endregion

//#region Schedulers
// console.log('Start script');

// let queue$ = of('queueScheduler (sync)', queueScheduler);

// let asap$ = of('asapScheduler (async micro task)', asapScheduler);

// let async$ = of('asyncScheduler (async task)', asyncScheduler);


// merge(asap$, async$, queue$).subscribe(x=>console.log(x));

// console.log('End script');
//#endregion

//#region Schedulers 2
// console.log('Start script');

// from([1,2,3,4], queueScheduler).pipe(
//     tap(v => console.log("Value=", v)),
//     observeOn(asapScheduler),
//     tap(v => console.log("Double Value=", v * 2))
//     ).subscribe();

// console.log('End script');
//#endregion


//#region Share operator
// //emit value in 1s
// const source = timer(500);
// //log side effect, emit result
// const example = source.pipe(
//     tap(() => console.log('***SIDE EFFECT***')),
//     mapTo('***RESULT***')
// );

// /*
//   ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
//   output:
//   "***SIDE EFFECT***"
//   "***RESULT***"
//   "***SIDE EFFECT***"
//   "***RESULT***"
// */
// const subscribe = example.subscribe(val => console.log(val));
// const subscribeTwo = example.subscribe(val => console.log(val));




// //share observable among subscribers
// const sharedExample = example.pipe(share());
// /*
//   ***SHARED, SIDE EFFECT EXECUTED ONCE***
//   output:
//   "***SIDE EFFECT***"
//   "***RESULT***"
//   "***RESULT***"
// */
// const subscribeThree = sharedExample.subscribe(val => console.log(val));
// const subscribeFour = sharedExample.subscribe(val => console.log(val));
//#endregion 



const timerOne = timer(1000, 2500);
const timerTwo = timer(1500, 2500);
const timerThree = timer(2000, 2500);

//when one timer emits, emit the latest values from each timer as an array
const combined$ = combineLatest(timerOne, timerTwo, timerThree);

// combined$.subscribe(
//     ([timerValOne, timerValTwo, timerValThree]) => console.log(`Timer One Latest: ${timerValOne}, Two Latest: ${timerValTwo}, Three Latest: ${timerValThree}`)
// );


const combined2$ = forkJoin(timerOne, timerTwo, timerThree);
combined$.subscribe(
    ([timerValOne, timerValTwo, timerValThree]) => console.log(`Timer One join: ${timerValOne}, Two join: ${timerValTwo}, Three join: ${timerValThree}`)
);