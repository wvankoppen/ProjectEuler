import { demo } from './bootstrapper';

demo('enumerable-iterable', enumIter);

function enumIter() {
    const arr = [3, 6, 1, 9];

    console.group('forof / iterable');
    for (const el of arr) {
        console.log(el);
    }
    console.groupEnd();

    console.group('forin / enumerable');
    for (const el in arr) {
        console.log(el);
    }
}
