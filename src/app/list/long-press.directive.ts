// https://gist.github.com/code-atom/2351d31804da9a084cff04854e2242c6#file-long-press-directive-ts
import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from "@angular/core";
import { fromEvent, merge, of, Subscription, timer } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";

@Directive({
  selector: "[longPress]",
})
export class LongPressDirective implements OnDestroy {
  private eventSubscribe: Subscription;
  threshold = 400;

  @Output()
  mouseLongPress = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    const mousedown = fromEvent<MouseEvent>(this.elementRef.nativeElement, "mousedown", { passive: true }).pipe(
      filter((event) => event.button == 0), // Only allow left button (Primary button)
      map(() => true) // turn on threshold counter
    );
    const touchstart = fromEvent(this.elementRef.nativeElement, "touchstart", { passive: true }).pipe(map(() => true));
    const touchEnd = fromEvent(this.elementRef.nativeElement, "touchend", { passive: true }).pipe(map(() => false));
    const mouseup = fromEvent<MouseEvent>(window, "mouseup", { passive: true }).pipe(
      filter((event) => event.button == 0), // Only allow left button (Primary button)
      map(() => false) // reset threshold counter
    );
    this.eventSubscribe = merge(mousedown, mouseup, touchstart, touchEnd)
      .pipe(
        switchMap((state) => (state ? timer(this.threshold, 100) : of(null))),
        filter((value: any) => value)
      )
      .subscribe(() => this.mouseLongPress.emit());
  }

  ngOnDestroy(): void {
    if (this.eventSubscribe) {
      this.eventSubscribe.unsubscribe();
    }
  }
}
