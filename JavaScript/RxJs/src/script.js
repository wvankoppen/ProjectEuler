// window.onload = init;
//
// function init() {
//   let mousedown = Rx.Observable.fromEvent(document, 'mousedown');
//   let mousemove = Rx.Observable.fromEvent(document, 'mousemove');
//   let mouseup = Rx.Observable.fromEvent(document, 'mouseup');
//
//   console.log('init')
//   let zooAnimals = ['anteater', 'bear', 'cheetah', 'donkey'];
//
//   let animalStream = Rx.Observable.from(zooAnimals);
//   animalStream.zip(mousedown).subscribe(console.log);
//
//
//   let numberStream = Rx.Observable.timer(100, 100);
//   numberStream.take(15).forEach(console.log);
//
//   let btn = document.getElementById('btn');
//   btn.style.position = 'absolute';
//
//   btn.style.top = mousemove.map(x => x.screenX);
//   Rx.Observable.fromEvent(btn, 'mousedown').map(console.log);
//
//   let getDrags = elmt =>
//     Rx.Observable.fromEvent(elmt, 'mousedown').map(md =>
//       Rx.Observable.fromEvent(document, 'mousemove').map(mv => ({
//         x : mv.clientX -md.offsetX,
//         y : mv.clientY - md.offsetY})
//       )
//         .takeUntil(Rx.Observable.fromEvent(document, 'mouseup')))
//       .concatAll();
//
//   getDrags(btn).forEach(
//     pos => {
//       btn.style.left = pos.x + 'px';
//       btn.style.top = pos.y + 'px';
//     }
//   )
// }
