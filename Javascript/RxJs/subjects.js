window.onload = init;

function init() {
  var timer1 = Rx.Observable.timer(0,1000);
  var timer2 = Rx.Observable.timer(0,300);

  timer1.concat(timer2).forEach(console.log);

debugger;
  //emit every 2 seconds, take 5
const source = Rx.Observable.interval(2000).pipe(Rx.Operators.take(5));

const example = source.pipe(
  //since we are multicasting below, side effects will be executed once
  Rx.Operators.tap(() => console.log('Side Effect #1')),
  Rx.Operators.mapTo('Result!')
);

//subscribe subject to source upon connect()
const multi = example.pipe(multicast(() => new Subject()));
/*
  subscribers will share source
  output:
  "Side Effect #1"
  "Result!"
  "Result!"
  ...
*/
const subscriberOne = multi.subscribe(val => console.log(val));
const subscriberTwo = multi.subscribe(val => console.log(val));
//subscribe subject to source
multi.connect();

}