import { Component, Input, Output, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseModalComponent } from '../base-modal.component';
import { AnalyticsService } from '../../../services/analytics/analytics.service';
import { GeoIPService } from '../../../services/geoip/geoip.service';
import { PubSubService } from '../../../core/pub-sub.service';
import { EmailService } from '../../../services/email/email.service';
import { Location } from '../../../services/geoip/location';
import { ApiResponse } from '../../../services/email/apiresponse';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-overlay-view-early-access',
  templateUrl: './overlay-view-early-access.component.html',
  styleUrls: ['./overlay-view-early-access.component.scss']
})
export class OverlayViewEarlyAccessComponent extends BaseModalComponent implements OnInit {
  location: Location;
  isSmsEnabled: Boolean = false;
  showEmailForm: Boolean = true;
  inboundSmsNumber: string;
  inboundSmsNumberFormatted: string;
  emailAddress: string;
  statusMessage: string = "";
  @Input() isInPage: boolean = false;
  constructor(
    private _analyticsService: AnalyticsService,
    private _geoIPService: GeoIPService,
    private _emailService: EmailService,
    private _pubSubService: PubSubService,
    private _sanitizer: DomSanitizer) {
    super();
  }

  /**
   * Determine the mobile operating system.
   * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
   *
   * @returns {String}
   */
  // https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
  getOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;

    if (/Mac/.test(userAgent)) {
      return "Mac";
    }

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  getSmsLink() {
    return (this.getOperatingSystem() == 'iOS' || this.getOperatingSystem() == 'Mac') ? 
      this._sanitizer.bypassSecurityTrustUrl(`sms:${this.inboundSmsNumber}&body=Stageverse`) :
      this._sanitizer.bypassSecurityTrustUrl(`sms:${this.inboundSmsNumber}?body=Stageverse`);
  }

  getLocation(): void {
    this._geoIPService.getLocation()
      .subscribe(location => {
        this.location = location;
        if (this.location.country_code == "AU") {
          this.isSmsEnabled = true;
          this.inboundSmsNumber = "+61429970122";
          this.inboundSmsNumberFormatted = "0429-970-122";
        }
        else if (this.location.country_code == "US") {
          this.isSmsEnabled = true;
          this.inboundSmsNumber = "+12525000065";
          this.inboundSmsNumberFormatted = "252-500-0065";
        }
        else if (this.location.country_code == "GB") {
          this.isSmsEnabled = true;
          this.inboundSmsNumber = "+447984387855";
          this.inboundSmsNumberFormatted = "079-8438-7855";
        }
        else if (this.location.country_code == "CA") {
          this.isSmsEnabled = true;
          this.inboundSmsNumber = "+18335097600";
          this.inboundSmsNumberFormatted = "833-509-7600";
        }
        else {
          this.isSmsEnabled = false;
        }
        setTimeout(() => {
          this._pubSubService.isLoading.emit(false);
          this.isViewHidden = false;
        });
      });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this._pubSubService.isLoading.emit(true);
    });
    this.getLocation();
    this._analyticsService.trackEvent('show_early_access', 'button_click', 'Show Early Access Modal');
  }

  addToList(): void {
    var _apiResponse
    this._emailService.PutEmailList(this.emailAddress)
      .subscribe(r => {
        if (r.statusCode == 200) {
          this.showEmailForm = false;
          this.statusMessage = "Thanks, you're on the list!";
        } else {
          this.statusMessage = "Someting went wrong! Try again."
        }
      });
  }

}
