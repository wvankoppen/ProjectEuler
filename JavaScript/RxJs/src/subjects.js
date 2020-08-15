import {interval, of, Subject} from 'rxjs';
import { proxy } from './lib/proxy';
import {publish, share, take, tap} from 'rxjs/operators';

window.share = function () {
    const obs = interval(500)
        .pipe(
            proxy('A'),
            take(4),
            share(),
            proxy('B'),
            proxy('C'),
        );
        obs.subscribe(x => console.log('fst',x));
        obs.subscribe(x => console.log('snd',x));
};

window.test = function () {
    const obs = interval(500)
        .pipe(
            proxy('A'),
            take(4),
            proxy('B'),
            proxy('C'),
        );
    obs.subscribe(x => console.log('fst',x));
    obs.subscribe(x => console.log('snd',x));
};
