import { interval, Observable, of, throwError } from 'rxjs';
import { obs, proxy } from './lib/proxy';
import { catchError, map, share, switchMap, take, tap } from 'rxjs/operators';
window.error = () => {
    console.log('Reactive throw:');
    of(1)
        .pipe(switchMap((x) => throwError('oops!!')))
        .subscribe({
            next: console.log, // not called
            error: console.error,
            complete: () => console.log('complete!'),
        }); // logs error 'oops!!'

    console.log('Imperative throw:');
    of(1)
        .pipe(
            switchMap((x) => {
                throw 'oops!!';
            })
        )
        .subscribe({
            next: console.log, // not called
            error: console.error,
            complete: () => console.log('complete!'),
        }); // logs error 'oops!!'
};
