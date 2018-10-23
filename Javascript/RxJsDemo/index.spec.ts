import { TestScheduler } from 'rxjs/testing';
import { expect } from 'chai';
import { of } from 'rxjs';

describe('Tests', () => {
    let scheduler;

    beforeEach(() => {
        scheduler = new TestScheduler((actual, expected) => {
            expect(actual).deep.equal(expected);
        })
    });

    it ('test 1', () => {
        scheduler.run(helpers => {
            const source$ = of(['a']);
            const expected = 'a|';

            //helpers.expectObservable(source$).toBe(expected);
        })
    });

    it('test 2', () => {
        scheduler.run(helpers => {
            const a = helpers.cold("--1--2--|");
            const asub = "^-------!";
            const expected = "--2--3--|";
            const result = a.map(s => `${Number(s) + 1}`);
            helpers.expectObservable(result).toBe(expected);
            helpers.expectSubscriptions(a.subscriptions).toBe(asub);
        });
    });
});
