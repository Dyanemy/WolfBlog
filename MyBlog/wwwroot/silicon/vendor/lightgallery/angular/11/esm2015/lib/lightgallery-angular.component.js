import { Component, Input } from '@angular/core';
import lightGallery from 'lightgallery';
import * as i0 from "@angular/core";
const _c0 = ["*"];
const LgMethods = {
    onAfterAppendSlide: 'lgAfterAppendSlide',
    onInit: 'lgInit',
    onHasVideo: 'lgHasVideo',
    onContainerResize: 'lgContainerResize',
    onUpdateSlides: 'lgUpdateSlides',
    onAfterAppendSubHtml: 'lgAfterAppendSubHtml',
    onBeforeOpen: 'lgBeforeOpen',
    onAfterOpen: 'lgAfterOpen',
    onSlideItemLoad: 'lgSlideItemLoad',
    onBeforeSlide: 'lgBeforeSlide',
    onAfterSlide: 'lgAfterSlide',
    onPosterClick: 'lgPosterClick',
    onDragStart: 'lgDragStart',
    onDragMove: 'lgDragMove',
    onDragEnd: 'lgDragEnd',
    onBeforeNextSlide: 'lgBeforeNextSlide',
    onBeforePrevSlide: 'lgBeforePrevSlide',
    onBeforeClose: 'lgBeforeClose',
    onAfterClose: 'lgAfterClose',
    onRotateLeft: 'lgRotateLeft',
    onRotateRight: 'lgRotateRight',
    onFlipHorizontal: 'lgFlipHorizontal',
    onFlipVertical: 'lgFlipVertical',
};
export class LightgalleryComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.lgInitialized = false;
        this._elementRef = _elementRef;
    }
    ngAfterViewChecked() {
        if (!this.lgInitialized) {
            this.registerEvents();
            this.LG = lightGallery(this._elementRef.nativeElement, this.settings);
            this.lgInitialized = true;
        }
    }
    ngOnDestroy() {
        this.LG.destroy();
        this.lgInitialized = false;
    }
    registerEvents() {
        if (this.onAfterAppendSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterAppendSlide, ((event) => {
                this.onAfterAppendSlide &&
                    this.onAfterAppendSlide(event.detail);
            }));
        }
        if (this.onInit) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onInit, ((event) => {
                this.onInit && this.onInit(event.detail);
            }));
        }
        if (this.onHasVideo) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onHasVideo, ((event) => {
                this.onHasVideo && this.onHasVideo(event.detail);
            }));
        }
        if (this.onContainerResize) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onContainerResize, ((event) => {
                this.onContainerResize &&
                    this.onContainerResize(event.detail);
            }));
        }
        if (this.onAfterAppendSubHtml) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterAppendSubHtml, ((event) => {
                this.onAfterAppendSubHtml &&
                    this.onAfterAppendSubHtml(event.detail);
            }));
        }
        if (this.onBeforeOpen) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeOpen, ((event) => {
                this.onBeforeOpen && this.onBeforeOpen(event.detail);
            }));
        }
        if (this.onAfterOpen) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterOpen, ((event) => {
                this.onAfterOpen && this.onAfterOpen(event.detail);
            }));
        }
        if (this.onSlideItemLoad) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onSlideItemLoad, ((event) => {
                this.onSlideItemLoad && this.onSlideItemLoad(event.detail);
            }));
        }
        if (this.onBeforeSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeSlide, ((event) => {
                this.onBeforeSlide && this.onBeforeSlide(event.detail);
            }));
        }
        if (this.onAfterSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterSlide, ((event) => {
                this.onAfterSlide && this.onAfterSlide(event.detail);
            }));
        }
        if (this.onPosterClick) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onPosterClick, ((event) => {
                this.onPosterClick && this.onPosterClick(event.detail);
            }));
        }
        if (this.onDragStart) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onDragStart, ((event) => {
                this.onDragStart && this.onDragStart(event.detail);
            }));
        }
        if (this.onDragMove) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onDragMove, ((event) => {
                this.onDragMove && this.onDragMove(event.detail);
            }));
        }
        if (this.onDragEnd) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onDragEnd, ((event) => {
                this.onDragEnd && this.onDragEnd(event.detail);
            }));
        }
        if (this.onBeforeNextSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeNextSlide, ((event) => {
                this.onBeforeNextSlide &&
                    this.onBeforeNextSlide(event.detail);
            }));
        }
        if (this.onBeforePrevSlide) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforePrevSlide, ((event) => {
                this.onBeforePrevSlide &&
                    this.onBeforePrevSlide(event.detail);
            }));
        }
        if (this.onBeforeClose) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onBeforeClose, ((event) => {
                this.onBeforeClose && this.onBeforeClose(event.detail);
            }));
        }
        if (this.onAfterClose) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onAfterClose, ((event) => {
                this.onAfterClose && this.onAfterClose(event.detail);
            }));
        }
        if (this.onRotateLeft) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onRotateLeft, ((event) => {
                this.onRotateLeft && this.onRotateLeft(event.detail);
            }));
        }
        if (this.onRotateRight) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onRotateRight, ((event) => {
                this.onRotateRight && this.onRotateRight(event.detail);
            }));
        }
        if (this.onFlipHorizontal) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onFlipHorizontal, ((event) => {
                this.onFlipHorizontal &&
                    this.onFlipHorizontal(event.detail);
            }));
        }
        if (this.onFlipVertical) {
            this._elementRef.nativeElement.addEventListener(LgMethods.onFlipVertical, ((event) => {
                this.onFlipVertical && this.onFlipVertical(event.detail);
            }));
        }
    }
}
LightgalleryComponent.ɵfac = function LightgalleryComponent_Factory(t) { return new (t || LightgalleryComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
LightgalleryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightgalleryComponent, selectors: [["lightgallery"]], inputs: { settings: "settings", onAfterAppendSlide: "onAfterAppendSlide", onInit: "onInit", onHasVideo: "onHasVideo", onContainerResize: "onContainerResize", onAfterAppendSubHtml: "onAfterAppendSubHtml", onBeforeOpen: "onBeforeOpen", onAfterOpen: "onAfterOpen", onSlideItemLoad: "onSlideItemLoad", onBeforeSlide: "onBeforeSlide", onAfterSlide: "onAfterSlide", onPosterClick: "onPosterClick", onDragStart: "onDragStart", onDragMove: "onDragMove", onDragEnd: "onDragEnd", onBeforeNextSlide: "onBeforeNextSlide", onBeforePrevSlide: "onBeforePrevSlide", onBeforeClose: "onBeforeClose", onAfterClose: "onAfterClose", onRotateLeft: "onRotateLeft", onRotateRight: "onRotateRight", onFlipHorizontal: "onFlipHorizontal", onFlipVertical: "onFlipVertical" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function LightgalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightgalleryComponent, [{
        type: Component,
        args: [{
                selector: 'lightgallery',
                template: '<ng-content></ng-content>',
                styles: [],
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { settings: [{
            type: Input
        }], onAfterAppendSlide: [{
            type: Input
        }], onInit: [{
            type: Input
        }], onHasVideo: [{
            type: Input
        }], onContainerResize: [{
            type: Input
        }], onAfterAppendSubHtml: [{
            type: Input
        }], onBeforeOpen: [{
            type: Input
        }], onAfterOpen: [{
            type: Input
        }], onSlideItemLoad: [{
            type: Input
        }], onBeforeSlide: [{
            type: Input
        }], onAfterSlide: [{
            type: Input
        }], onPosterClick: [{
            type: Input
        }], onDragStart: [{
            type: Input
        }], onDragMove: [{
            type: Input
        }], onDragEnd: [{
            type: Input
        }], onBeforeNextSlide: [{
            type: Input
        }], onBeforePrevSlide: [{
            type: Input
        }], onBeforeClose: [{
            type: Input
        }], onAfterClose: [{
            type: Input
        }], onRotateLeft: [{
            type: Input
        }], onRotateRight: [{
            type: Input
        }], onFlipHorizontal: [{
            type: Input
        }], onFlipVertical: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRnYWxsZXJ5LWFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlnaHRnYWxsZXJ5LWFuZ3VsYXIxMS9zcmMvbGliL2xpZ2h0Z2FsbGVyeS1hbmd1bGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLFlBQVksTUFBTSxjQUFjLENBQUM7OztBQTBCeEMsTUFBTSxTQUFTLEdBQUc7SUFDZCxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsTUFBTSxFQUFFLFFBQVE7SUFDaEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsb0JBQW9CLEVBQUUsc0JBQXNCO0lBQzVDLFlBQVksRUFBRSxjQUFjO0lBQzVCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsYUFBYSxFQUFFLGVBQWU7SUFDOUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxhQUFhLEVBQUUsZUFBZTtJQUM5QixZQUFZLEVBQUUsY0FBYztJQUM1QixZQUFZLEVBQUUsY0FBYztJQUM1QixhQUFhLEVBQUUsZUFBZTtJQUM5QixnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsY0FBYyxFQUFFLGdCQUFnQjtDQUNuQyxDQUFDO0FBT0YsTUFBTSxPQUFPLHFCQUFxQjtJQUc5QixZQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQURuQyxrQkFB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LENBQUM7U0FDTDtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDM0MsU0FBUyxDQUFDLFdBQVcsRUFDckIsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQWtCLENBQ3RCLENBQUM7U0FDTDtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDM0MsU0FBUyxDQUFDLGVBQWUsRUFDekIsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQWtCLENBQ3RCLENBQUM7U0FDTDtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDM0MsU0FBUyxDQUFDLGFBQWEsRUFDdkIsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQWtCLENBQ3RCLENBQUM7U0FDTDtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDM0MsU0FBUyxDQUFDLFlBQVksRUFDdEIsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FB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RUFDeEIsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RCxDQUFDLENBQWtCLENBQ3RCLENBQUM7U0FDTDtJQUNMLENBQUM7OzBGQXJPUSxxQkFBcUI7MERBQXJCLHFCQUFxQjs7UUFIbkIsa0JBQXlCOzt1RkFHM0IscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsTUFBTSxFQUFFLEVBQUU7YUFDYjs2REFRWSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgbGlnaHRHYWxsZXJ5IGZyb20gJ2xpZ2h0Z2FsbGVyeSc7XG5pbXBvcnQge1xuICAgIEFmdGVyQXBwZW5kU3ViSHRtbERldGFpbCxcbiAgICBBZnRlckNsb3NlRGV0YWlsLFxuICAgIEFmdGVyT3BlbkRldGFpbCxcbiAgICBBZnRlclNsaWRlRGV0YWlsLFxuICAgIEJlZm9yZUNsb3NlRGV0YWlsLFxuICAgIEJlZm9yZU5leHRTbGlkZURldGFpbCxcbiAgICBCZWZvcmVPcGVuRGV0YWlsLFxuICAgIEJlZm9yZVByZXZTbGlkZURldGFpbCxcbiAgICBCZWZvcmVTbGlkZURldGFpbCxcbiAgICBDb250YWluZXJSZXNpemVEZXRhaWwsXG4gICAgRHJhZ0VuZERldGFpbCxcbiAgICBEcmFnTW92ZURldGFpbCxcbiAgICBEcmFnU3RhcnREZXRhaWwsXG4gICAgRmxpcEhvcml6b250YWxEZXRhaWwsXG4gICAgRmxpcFZlcnRpY2FsRGV0YWlsLFxuICAgIEluaXREZXRhaWwsXG4gICAgUG9zdGVyQ2xpY2tEZXRhaWwsXG4gICAgUm90YXRlTGVmdERldGFpbCxcbiAgICBSb3RhdGVSaWdodERldGFpbCxcbiAgICBTbGlkZUl0ZW1Mb2FkRGV0YWlsLFxufSBmcm9tICdsaWdodGdhbGxlcnkvbGctZXZlbnRzJztcbmltcG9ydCB7IExpZ2h0R2FsbGVyeVNldHRpbmdzIH0gZnJvbSAnbGlnaHRnYWxsZXJ5L2xnLXNldHRpbmdzJztcbmltcG9ydCB7IExpZ2h0R2FsbGVyeSB9IGZyb20gJ2xpZ2h0Z2FsbGVyeS9saWdodGdhbGxlcnknO1xuXG5jb25zdCBMZ01ldGhvZHMgPSB7XG4gICAgb25BZnRlckFwcGVuZFNsaWRlOiAnbGdBZnRlckFwcGVuZFNsaWRlJyxcbiAgICBvbkluaXQ6ICdsZ0luaXQnLFxuICAgIG9uSGFzVmlkZW86ICdsZ0hhc1ZpZGVvJyxcbiAgICBvbkNvbnRhaW5lclJlc2l6ZTogJ2xnQ29udGFpbmVyUmVzaXplJyxcbiAgICBvblVwZGF0ZVNsaWRlczogJ2xnVXBkYXRlU2xpZGVzJyxcbiAgICBvbkFmdGVyQXBwZW5kU3ViSHRtbDogJ2xnQWZ0ZXJBcHBlbmRTdWJIdG1sJyxcbiAgICBvbkJlZm9yZU9wZW46ICdsZ0JlZm9yZU9wZW4nLFxuICAgIG9uQWZ0ZXJPcGVuOiAnbGdBZnRlck9wZW4nLFxuICAgIG9uU2xpZGVJdGVtTG9hZDogJ2xnU2xpZGVJdGVtTG9hZCcsXG4gICAgb25CZWZvcmVTbGlkZTogJ2xnQmVmb3JlU2xpZGUnLFxuICAgIG9uQWZ0ZXJTbGlkZTogJ2xnQWZ0ZXJTbGlkZScsXG4gICAgb25Qb3N0ZXJDbGljazogJ2xnUG9zdGVyQ2xpY2snLFxuICAgIG9uRHJhZ1N0YXJ0OiAnbGdEcmFnU3RhcnQnLFxuICAgIG9uRHJhZ01vdmU6ICdsZ0RyYWdNb3ZlJyxcbiAgICBvbkRyYWdFbmQ6ICdsZ0RyYWdFbmQnLFxuICAgIG9uQmVmb3JlTmV4dFNsaWRlOiAnbGdCZWZvcmVOZXh0U2xpZGUnLFxuICAgIG9uQmVmb3JlUHJldlNsaWRlOiAnbGdCZWZvcmVQcmV2U2xpZGUnLFxuICAgIG9uQmVmb3JlQ2xvc2U6ICdsZ0JlZm9yZUNsb3NlJyxcbiAgICBvbkFmdGVyQ2xvc2U6ICdsZ0FmdGVyQ2xvc2UnLFxuICAgIG9uUm90YXRlTGVmdDogJ2xnUm90YXRlTGVmdCcsXG4gICAgb25Sb3RhdGVSaWdodDogJ2xnUm90YXRlUmlnaHQnLFxuICAgIG9uRmxpcEhvcml6b250YWw6ICdsZ0ZsaXBIb3Jpem9udGFsJyxcbiAgICBvbkZsaXBWZXJ0aWNhbDogJ2xnRmxpcFZlcnRpY2FsJyxcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGlnaHRnYWxsZXJ5JyxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0Z2FsbGVyeUNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBMRyE6IExpZ2h0R2FsbGVyeTtcbiAgICBwcml2YXRlIGxnSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXR0aW5ncyE6IExpZ2h0R2FsbGVyeVNldHRpbmdzO1xuICAgIEBJbnB1dCgpIG9uQWZ0ZXJBcHBlbmRTbGlkZT86IChkZXRhaWw6IEFmdGVyU2xpZGVEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25Jbml0PzogKGRldGFpbDogSW5pdERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkhhc1ZpZGVvPzogKGRldGFpbDogSW5pdERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkNvbnRhaW5lclJlc2l6ZT86IChkZXRhaWw6IENvbnRhaW5lclJlc2l6ZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkFmdGVyQXBwZW5kU3ViSHRtbD86IChkZXRhaWw6IEFmdGVyQXBwZW5kU3ViSHRtbERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkJlZm9yZU9wZW4/OiAoZGV0YWlsOiBCZWZvcmVPcGVuRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uQWZ0ZXJPcGVuPzogKGRldGFpbDogQWZ0ZXJPcGVuRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uU2xpZGVJdGVtTG9hZD86IChkZXRhaWw6IFNsaWRlSXRlbUxvYWREZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25CZWZvcmVTbGlkZT86IChkZXRhaWw6IEJlZm9yZVNsaWRlRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uQWZ0ZXJTbGlkZT86IChkZXRhaWw6IEFmdGVyU2xpZGVEZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25Qb3N0ZXJDbGljaz86IChkZXRhaWw6IFBvc3RlckNsaWNrRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uRHJhZ1N0YXJ0PzogKGRldGFpbDogRHJhZ1N0YXJ0RGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uRHJhZ01vdmU/OiAoZGV0YWlsOiBEcmFnTW92ZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkRyYWdFbmQ/OiAoZGV0YWlsOiBEcmFnRW5kRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uQmVmb3JlTmV4dFNsaWRlPzogKGRldGFpbDogQmVmb3JlTmV4dFNsaWRlRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uQmVmb3JlUHJldlNsaWRlPzogKGRldGFpbDogQmVmb3JlUHJldlNsaWRlRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uQmVmb3JlQ2xvc2U/OiAoZGV0YWlsOiBCZWZvcmVDbG9zZURldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkFmdGVyQ2xvc2U/OiAoZGV0YWlsOiBBZnRlckNsb3NlRGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uUm90YXRlTGVmdD86IChkZXRhaWw6IFJvdGF0ZUxlZnREZXRhaWwpID0+IHZvaWQ7XG4gICAgQElucHV0KCkgb25Sb3RhdGVSaWdodD86IChkZXRhaWw6IFJvdGF0ZVJpZ2h0RGV0YWlsKSA9PiB2b2lkO1xuICAgIEBJbnB1dCgpIG9uRmxpcEhvcml6b250YWw/OiAoZGV0YWlsOiBGbGlwSG9yaXpvbnRhbERldGFpbCkgPT4gdm9pZDtcbiAgICBASW5wdXQoKSBvbkZsaXBWZXJ0aWNhbD86IChkZXRhaWw6IEZsaXBWZXJ0aWNhbERldGFpbCkgPT4gdm9pZDtcblxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmxnSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuTEcgPSBsaWdodEdhbGxlcnkoXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5sZ0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLkxHLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5sZ0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub25BZnRlckFwcGVuZFNsaWRlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25BZnRlckFwcGVuZFNsaWRlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BZnRlckFwcGVuZFNsaWRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJBcHBlbmRTbGlkZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTGdNZXRob2RzLm9uSW5pdCwgKChcbiAgICAgICAgICAgICAgICBldmVudDogQ3VzdG9tRXZlbnQsXG4gICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uSW5pdCAmJiB0aGlzLm9uSW5pdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25IYXNWaWRlbykge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uSGFzVmlkZW8sXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhc1ZpZGVvICYmIHRoaXMub25IYXNWaWRlbyhldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQ29udGFpbmVyUmVzaXplKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25Db250YWluZXJSZXNpemUsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbnRhaW5lclJlc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbnRhaW5lclJlc2l6ZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQWZ0ZXJBcHBlbmRTdWJIdG1sKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25BZnRlckFwcGVuZFN1Ykh0bWwsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyQXBwZW5kU3ViSHRtbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyQXBwZW5kU3ViSHRtbChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQmVmb3JlT3Blbikge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlT3BlbixcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlT3BlbiAmJiB0aGlzLm9uQmVmb3JlT3BlbihldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQWZ0ZXJPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25BZnRlck9wZW4sXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyT3BlbiAmJiB0aGlzLm9uQWZ0ZXJPcGVuKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25TbGlkZUl0ZW1Mb2FkKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25TbGlkZUl0ZW1Mb2FkLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TbGlkZUl0ZW1Mb2FkICYmIHRoaXMub25TbGlkZUl0ZW1Mb2FkKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25CZWZvcmVTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlU2xpZGUsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJlZm9yZVNsaWRlICYmIHRoaXMub25CZWZvcmVTbGlkZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQWZ0ZXJTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQWZ0ZXJTbGlkZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTbGlkZSAmJiB0aGlzLm9uQWZ0ZXJTbGlkZShldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uUG9zdGVyQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vblBvc3RlckNsaWNrLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Qb3N0ZXJDbGljayAmJiB0aGlzLm9uUG9zdGVyQ2xpY2soZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkRyYWdTdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uRHJhZ1N0YXJ0LFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EcmFnU3RhcnQgJiYgdGhpcy5vbkRyYWdTdGFydChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uRHJhZ01vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkRyYWdNb3ZlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EcmFnTW92ZSAmJiB0aGlzLm9uRHJhZ01vdmUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkRyYWdFbmQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkRyYWdFbmQsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRyYWdFbmQgJiYgdGhpcy5vbkRyYWdFbmQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkJlZm9yZU5leHRTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlTmV4dFNsaWRlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVOZXh0U2xpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVOZXh0U2xpZGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkJlZm9yZVByZXZTbGlkZSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uQmVmb3JlUHJldlNsaWRlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVQcmV2U2xpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWZvcmVQcmV2U2xpZGUoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkJlZm9yZUNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25CZWZvcmVDbG9zZSxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQmVmb3JlQ2xvc2UgJiYgdGhpcy5vbkJlZm9yZUNsb3NlKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25BZnRlckNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25BZnRlckNsb3NlLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BZnRlckNsb3NlICYmIHRoaXMub25BZnRlckNsb3NlKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25Sb3RhdGVMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBMZ01ldGhvZHMub25Sb3RhdGVMZWZ0LFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Sb3RhdGVMZWZ0ICYmIHRoaXMub25Sb3RhdGVMZWZ0KGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25Sb3RhdGVSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgTGdNZXRob2RzLm9uUm90YXRlUmlnaHQsXG4gICAgICAgICAgICAgICAgKChldmVudDogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJvdGF0ZVJpZ2h0ICYmIHRoaXMub25Sb3RhdGVSaWdodChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uRmxpcEhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkZsaXBIb3Jpem9udGFsLFxuICAgICAgICAgICAgICAgICgoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25GbGlwSG9yaXpvbnRhbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZsaXBIb3Jpem9udGFsKGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25GbGlwVmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIExnTWV0aG9kcy5vbkZsaXBWZXJ0aWNhbCxcbiAgICAgICAgICAgICAgICAoKGV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmxpcFZlcnRpY2FsICYmIHRoaXMub25GbGlwVmVydGljYWwoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==