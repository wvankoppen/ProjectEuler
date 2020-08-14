import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const producer = (subscriber) => {
    console.log("Producer: Lets produce some stuff");
    const handle = setInterval(() => {
        const v = Math.round(Math.random() * 1000);
        console.log('Producer: produce value', v);
        subscriber.next(v);
    }, 500);

    return () => {
        console.log('Producer: I hear you, lets stop producing!');
        clearInterval(handle);
    };
}
let observable$ = new Observable(producer);

let logObserver = {
    next: (x) => console.log('Consumer: next: ', x),
    error: (x) => console.error('Consumer: error: ', x),
    complete: () => console.log('Consumer: complete'),
};

let s = observable$.pipe(tap(logObserver)).subscribe();
setTimeout(() => {
    s.unsubscribe();
}, 500);

