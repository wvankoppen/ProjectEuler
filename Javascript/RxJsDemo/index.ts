// RxJS v6+
import { Observable } from 'rxjs';

/*
  Increment value every 1s, emit even numbers.
*/
const evenNumbers = Observable.create(
    function (observer) {
        console.log('subscribe detected!', observer);
        let value = 0;
        const interval = setInterval(() => {
            if (value % 2 === 0) {
                observer.next(value);
            }
            value++;
        }, 1000);

        return () => {
            console.log('unsubscribe detected!');
            clearInterval(interval);
        }
    });
//output: 0...2...4...6...8
const subscribe = evenNumbers.subscribe(val => console.log(val));
//unsubscribe after 10 seconds
setTimeout(() => {
    subscribe.unsubscribe();
}, 10000);