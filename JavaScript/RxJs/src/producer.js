import {interval, Observable, of} from 'rxjs';
import { proxy } from './lib/proxy';
import { share, take, tap } from 'rxjs/operators';


window.producer = () => {
    const producer = (subscriber) => {
        console.log('Producer: Lets produce some stuff');
        const handle = setInterval(() => {
            const v = Math.round(Math.random() * 1000);
            console.log('Producer: produce value', v);
            subscriber.next(v);
        }, 500);

        return () => {
            console.log('Producer: I hear you, I will stop producing!');
            clearInterval(handle);
        };
    };
    let observable$ = new Observable(producer);

    let logObserver = {
        next: (x) => console.log('Consumer: Got next: ', x),
        error: (x) => console.error('Consumer: Got error: ', x),
        complete: () => console.log('Consumer: Got complete'),
    };

    let subscription = observable$.pipe(tap(logObserver), proxy()).subscribe();

    setTimeout(() => {
        console.log('Consumer: unsubscribe!');
        subscription.unsubscribe();
    }, 1000);
};
