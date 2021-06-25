import { of } from 'rxjs';
import { demo } from './bootstrapper';

demo('unsubscribe', unsubscribe);

function unsubscribe() {
    console.log('unsub');
    const obs$ = of(1);
    const sub = obs$.subscribe(console.log);
    sub.unsubscribe();
    sub.unsubscribe();
}
