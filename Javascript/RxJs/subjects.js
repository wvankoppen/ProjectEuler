window.onload = init;

function init() {
  var immediately = rxjs.of(
    rxjs
      .of("delayed value")
      .pipe(rxjs.operators.tap(x=> console.log(1,x)), rxjs.operators.delay(500))
  );

  immediately
    .pipe(
      rxjs.operators.switchMap(x => x),
      rxjs.operators.tap(x=>console.log(2,x))
    )
    .subscribe(() => {});
}
