import { of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

const immediately = of(
    of('delayed value').pipe(
        tap((x) => console.log(1, x)),
        delay(500)
    )
);

immediately
    .pipe(
        switchMap((x) => x),
        tap((x) => console.log(2, x))
    )
    .subscribe(() => {});
