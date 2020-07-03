import { fromEvent, interval, timer, combineLatest } from "rxjs";
import { map, take, combineAll } from "rxjs/operators";


//#region Hook DOM events
let loaded$ = fromEvent(document, 'DOMContentLoaded');
loaded$.subscribe(() => {
    let click1$ = fromEvent(document.getElementById('button1'), 'click');
    click1$.subscribe(() => {
        document.getElementById('content1').innerHTML += "<span>hoi</span>"
    })
});
//#endregion

//#region Filter and load books

// loaded$.subscribe(s => { 
// let click2$ = fromEvent(document.getElementById('button2'), 'click');
// click2$.subscribe(s => 
//     ajax('api/books')
//     .pipe(
//         mergeMap(response => response.response),
//         // myCustomOperator(1950, true)
//         grabNewerThan(1950)
//         // filter(b => b.publicationYear < 1950),
//         // tap(b => console.log("book: ", b.title))
//         )
//     .subscribe(
//         book => console.log(book)
//     ));
//     });

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



const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

//when one timer emits, emit the latest values from each timer as an array
const combined$ = combineLatest(timerOne$, timerTwo$, timerThree$);

combined$.subscribe(
    // ([timerValOne, timerValTwo, timerValThree]) => console.log(`Timer One Latest: ${timerValOne}, Two Latest: ${timerValTwo}, Three Latest: ${timerValThree}`)
);


// const combined2$ = forkJoin(timerOne, timerTwo, timerThree);
// combined$.subscribe(
//     ([timerValOne, timerValTwo, timerValThree]) => console.log(`Timer One join: ${timerValOne}, Two join: ${timerValTwo}, Three join: ${timerValThree}`)
// );




//emit every 1s, take 2
const source = interval(1000).pipe(take(2));
//map each emitted value from source to interval observable that takes 5 values
const example = source.pipe(
    map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5)))
);

/*
  2 values from source will map to 2 (inner) interval observables that emit every 1s
  combineAll uses combineLatest strategy, emitting the last value from each
  whenever either observable emits a value
*/
const combined = example.pipe(combineAll());

