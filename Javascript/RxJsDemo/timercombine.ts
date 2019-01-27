import { Subject } from "rxjs";

let subj$ = new Subject();
// timerOne$.subscribe(x => subj$.next());

subj$.subscribe(x => {
    let r = Math.random();
    if (r < 0.99) {
        subj$.next(r);
    }
});

subj$.subscribe(x => console.log(x));
