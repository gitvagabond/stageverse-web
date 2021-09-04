import { Type } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Event } from '@angular/router';

export class PubSubService {

    isLoading: EventEmitter<boolean>;
    siteScrolled: EventEmitter<number>;
    // addViewToOverlay: EventEmitter<Type<any>>;

    /* old events - some may still be relevant */
    appLaunch: EventEmitter<null>;
    isDarkScheme: EventEmitter<boolean>;
    isNavVisible: EventEmitter<boolean>;
    isNavFixed: EventEmitter<boolean>;
    isNavTransparent: EventEmitter<boolean>;
    setNavBackgroundColor: EventEmitter<string>;
    resetNavBackgroundColor: EventEmitter<null>;
    setBodyBackgroundColor: EventEmitter<string>;
    resetBodyBackgroundColor: EventEmitter<null>;
    isFooterDarkScheme: EventEmitter<boolean>;
    setFooterBackgroundColor: EventEmitter<string>;
    resetFooterBackgroundColor: EventEmitter<null>;


    constructor() {
        this.isLoading = new EventEmitter<boolean>();
        this.siteScrolled = new EventEmitter<number>();
        // this.addViewToOverlay = new EventEmitter<Type<any>>();
        /* old events */
        this.appLaunch = new EventEmitter<null>();
        this.isDarkScheme = new EventEmitter<boolean>();
        this.isNavVisible = new EventEmitter<boolean>();
        this.isNavFixed = new EventEmitter<boolean>();
        this.isNavTransparent = new EventEmitter<boolean>();
        this.setNavBackgroundColor = new EventEmitter<string>();
        this.resetNavBackgroundColor = new EventEmitter<null>();
        this.setBodyBackgroundColor = new EventEmitter<string>();
        this.resetBodyBackgroundColor = new EventEmitter<null>();
        this.isFooterDarkScheme = new EventEmitter<boolean>();
        this.setFooterBackgroundColor = new EventEmitter<string>();
        this.resetFooterBackgroundColor = new EventEmitter<null>();
    }

}

// dont think we need this anymore as angular has an EventEmitter class already
export class EventEmitter<T> extends Subject<T> {
    constructor() {
        super();
    }
    emit(value: T) { super.next(value); }
}

