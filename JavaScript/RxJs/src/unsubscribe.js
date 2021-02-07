import { interval, Observable, of } from 'rxjs';
import { proxy } from './lib/proxy';
import { share, take, tap } from 'rxjs/operators';

window.unsubscribe = () => {
    console.log('unsub');
    const obs$ = of(1);
    const sub = obs$.subscribe(console.log);
    sub.unsubscribe();
    sub.unsubscribe();
};
