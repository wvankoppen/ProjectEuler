import { from, of, throwError } from 'rxjs';
import {
    catchError,
    concatMap,
    delay,
    map,
    switchMap,
    toArray,
} from 'rxjs/operators';
import { demo } from './bootstrapper';

demo('sequencer', sequencer);

function sequencer() {
    const arr = [10, 200, 3];
    const reqs = from(arr)
        .pipe(
            map((i) =>
                of(i).pipe(
                    delay(i),
                    switchMap((x) => (x < 100 ? of(x) : throwError('err'))),
                    catchError((x) => of(x))
                )
            ),
            concatMap((x) => x),
            toArray()
        )
        .toPromise();

    reqs.then(console.log);
    // .subscribe(console.log, console.error);
}
