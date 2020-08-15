import {Observable} from "rxjs";

export function proxy(name = '') {
    console.log(name, 'PROXY: Creating proxy');
    return (sourceObservable) => {
        return new Observable((subscriber) => {
            const subscription = sourceObservable.subscribe({
                next: (x) => {
                    console.log(name, 'PROXY: next!', x);
                    subscriber.next(x);
                },
                error: (x) => {
                    console.log(name, 'PROXY: error!');
                    subscriber.error(x);
                },
                complete: () => {
                    console.log(name, 'PROXY: complete!');
                    subscriber.complete();
                },
            });

            return () => {
                console.log(name, 'PROXY: Unsubscribed!');
                subscription.unsubscribe();
            };
        });
    }
}
