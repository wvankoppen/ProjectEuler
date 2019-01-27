import { forkJoin, zip, combineLatest, Subject, of,concat } from 'rxjs';
import { withLatestFrom, take, first, combineAll, concatAll } from 'rxjs/operators';

// 1. Define shirt color and logo options
type Color = 'white' | 'green' | 'red' | 'blue';
type Logo = 'fish' | 'dog' | 'bird' | 'cow';

// 2. Create the two persons - color and logo observables, 
// They will communicate with us later (when we subscribe)
const color$ = new Subject<Color>();
const logo$ = new Subject<Logo>();

// 3. We are ready to start printing shirt. Need to subscribe to color and logo observables to produce shirts, we will write code here later

// zip(logo$, color$).subscribe(ts => {console.log('zip:', ts)});
// combineLatest(logo$, color$).subscribe(ts => { console.log('combineLatest:', ts) });
// logo$.pipe(withLatestFrom(color$)).subscribe(ts => { console.log('withLatestFrom color:', ts) });
// color$.pipe(withLatestFrom(logo$)).subscribe(ts => { console.log('withLatestFrom logo:', ts) });

forkJoin(color$, logo$).subscribe(ts => { console.log('forkJoin:', ts) });

// 4. The two persons(observables) are doing their job, picking color and logo
color$.next('white');
logo$.next('fish');

color$.next('green');
logo$.next('dog');

color$.next('red');
//logo$.next('bird');

color$.next('blue');

color$.complete();
logo$.complete();

