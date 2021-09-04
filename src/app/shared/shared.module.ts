import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Scroll } from '@angular/router';

// import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { StickyNavDirective } from './directives/sticky-nav.directive';
import { LoadingComponent } from './loading/loading.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayViewComponent } from './overlay/overlay-view.component';
import { FooterLgComponent } from './footer-lg/footer-lg.component';
import { BackgroundComponent } from './background/background.component';
import { ModalContentDirective } from './overlay/modal-content.directive';
import { BaseModalComponent } from './overlay/base-modal.component';
import { OverlayViewLoginComponent } from './overlay/overlay-view-login/overlay-view-login.component';
import { NavComponent } from './nav/nav.component';
import { PanelAboutComponent } from './panel-about/panel-about.component';
import { PanelEventsComponent } from './panel-events/panel-events.component';
import { PanelGalleryComponent } from './panel-gallery/panel-gallery.component';
import { PanelProductCollectionComponent } from './panel-product-collection/panel-product-collection.component';
import { CardEventComponent } from './card-event/card-event.component';
import { PanelAdComponent } from './panel-ad/panel-ad.component';
import { PanelCreatorsComponent } from './panel-creators/panel-creators.component';
import { CardCreatorComponent } from './card-creator/card-creator.component';
import { CardProductComponent } from './card-product/card-product.component';
import { PanelStagesComponent } from './panel-stages/panel-stages.component';
import { CardStageComponent } from './card-stage/card-stage.component';
import { ProductCollectionPickerComponent } from './product-collection-picker/product-collection-picker.component';
import { ScrollDirective } from './directives/scroll.directive';
import { OverlayViewProductCollectionComponent } from './overlay/overlay-view-product-collection/overlay-view-product-collection.component';
import { OverlayViewProductDetailsComponent } from './overlay/overlay-view-product-details/overlay-view-product-details.component';
import { OverlayViewProductDetailsImmersiveComponent } from './overlay/overlay-view-product-details-immersive/overlay-view-product-details-immersive.component';
import { OverlayViewMediaComponent } from './overlay/overlay-view-media/overlay-view-media.component';
import { OverlayViewCheckoutComponent } from './overlay/overlay-view-checkout/overlay-view-checkout.component';
import { OverlayViewMessageComponent } from './overlay/overlay-view-message/overlay-view-message.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ButtonCheckoutComponent } from './button-checkout/button-checkout.component';
import { ButtonFollowComponent } from './button-follow/button-follow.component';
import { ProductPickerComponent } from './product-picker/product-picker.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { InputTextboxComponent } from './input-textbox/input-textbox.component';
import { CheckoutStepSignupComponent } from './checkout-steps/checkout-step-signup/checkout-step-signup.component';
import { CheckoutStepLoginComponent } from './checkout-steps/checkout-step-login/checkout-step-login.component';
import { CheckoutStepsComponent } from './checkout-steps/checkout-steps.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';
import { CheckoutStepPaymentComponent } from './checkout-steps/checkout-step-payment/checkout-step-payment.component';
import { CheckoutStepShippingComponent } from './checkout-steps/checkout-step-shipping/checkout-step-shipping.component';
import { CheckoutStepPaymentSaveComponent } from './checkout-steps/checkout-step-payment-save/checkout-step-payment-save.component';
import { OverlayViewOrderCompleteComponent } from './overlay/overlay-view-order-complete/overlay-view-order-complete.component';
import { OverlayViewRegisterUserComponent } from './overlay/overlay-view-register-user/overlay-view-register-user.component';
import { OverlayViewRequestPasswordResetComponent } from './overlay/overlay-view-request-password-reset/overlay-view-request-password-reset.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputDropdownComponent } from './input-dropdown/input-dropdown.component';
import { InputDatepickerComponent } from './input-datepicker/input-datepicker.component';
import { InputCreditCardBoxComponent } from './input-credit-card-box/input-credit-card-box.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { OverlayViewGlobalMenuComponent } from './overlay/overlay-view-global-menu/overlay-view-global-menu.component';
import { OverlayViewEarlyAccessComponent } from './overlay/overlay-view-early-access/overlay-view-early-access.component';
import { OverlayViewYoutubeVideoComponent } from './overlay/overlay-view-youtube-video/overlay-view-youtube-video.component';
import { PageComponent } from './page/page.component';
import { OverlayViewApiVideoComponent } from './overlay/overlay-view-api-video/overlay-view-api-video.component';
import { OverlayViewVimeoVideoComponent } from './overlay/overlay-view-vimeo-video/overlay-view-vimeo-video.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterTwoComponent } from './footer-two/footer-two.component';
// import { CreditCardDirectivesModule } from 'angular-cc-library';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    // ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    StickyNavDirective,
    LoadingComponent,
    TooltipsComponent,
    NotificationsComponent,
    OverlayComponent,
    OverlayViewComponent,
    FooterLgComponent,
    BackgroundComponent,
    ModalContentDirective,
    BaseModalComponent,
    OverlayViewLoginComponent,
    NavComponent,
    PanelAboutComponent,
    PanelEventsComponent,
    PanelGalleryComponent,
    PanelProductCollectionComponent,
    CardEventComponent,
    PanelAdComponent,
    PanelCreatorsComponent,
    CardCreatorComponent,
    CardProductComponent,
    PanelStagesComponent,
    CardStageComponent,
    ProductCollectionPickerComponent,
    ScrollDirective,
    OverlayViewProductCollectionComponent,
    OverlayViewProductDetailsComponent,
    OverlayViewProductDetailsImmersiveComponent,
    OverlayViewMediaComponent,
    OverlayViewCheckoutComponent,
    OverlayViewMessageComponent,
    GalleryComponent,
    ButtonCheckoutComponent,
    ButtonFollowComponent,
    ProductPickerComponent,
    CollapsibleComponent,
    PromoCodeComponent,
    InputTextboxComponent,
    CheckoutSummaryComponent,
    CheckoutStepsComponent,
    CheckoutStepSignupComponent,
    CheckoutStepLoginComponent,
    CheckoutStepPaymentComponent,
    CheckoutStepShippingComponent,
    CheckoutStepPaymentSaveComponent,
    OverlayViewOrderCompleteComponent,
    OverlayViewRegisterUserComponent,
    OverlayViewRequestPasswordResetComponent,
    InputCheckboxComponent,
    InputDropdownComponent,
    InputDatepickerComponent,
    InputCreditCardBoxComponent,
    VideoPlayerComponent,
    OverlayViewGlobalMenuComponent,
    OverlayViewEarlyAccessComponent,
    OverlayViewYoutubeVideoComponent,
    PageComponent,
    OverlayViewApiVideoComponent,
    OverlayViewVimeoVideoComponent,
    ModalComponent,
    FooterTwoComponent
  ],
  exports: [
    // ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    FooterLgComponent,
    CommonModule,
    CarouselModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    StickyNavDirective,
    LoadingComponent,
    TooltipsComponent,
    NotificationsComponent,
    OverlayComponent,
    OverlayViewComponent,
    OverlayViewLoginComponent,
    BackgroundComponent,
    NavComponent,
    PanelAboutComponent,
    PanelEventsComponent,
    PanelGalleryComponent,
    PanelProductCollectionComponent,
    PanelAdComponent,
    CardEventComponent,
    PanelCreatorsComponent,
    CardCreatorComponent,
    CardProductComponent,
    PanelStagesComponent,
    ProductCollectionPickerComponent,
    ScrollDirective,
    OverlayViewProductCollectionComponent,
    OverlayViewProductDetailsComponent,
    OverlayViewProductDetailsImmersiveComponent,
    OverlayViewMediaComponent,
    OverlayViewCheckoutComponent,
    OverlayViewMessageComponent,
    GalleryComponent,
    ButtonCheckoutComponent,
    ButtonFollowComponent,
    ProductPickerComponent,
    CollapsibleComponent,
    PromoCodeComponent,
    InputTextboxComponent,
    CheckoutSummaryComponent,
    CheckoutStepsComponent,
    CheckoutStepSignupComponent,
    CheckoutStepLoginComponent,
    CheckoutStepPaymentComponent,
    CheckoutStepShippingComponent,
    CheckoutStepPaymentSaveComponent,
    OverlayViewOrderCompleteComponent,
    OverlayViewRegisterUserComponent,
    OverlayViewRequestPasswordResetComponent,
    InputCheckboxComponent,
    InputDropdownComponent,
    InputDatepickerComponent,
    InputCreditCardBoxComponent,
    VideoPlayerComponent,
    OverlayViewGlobalMenuComponent,
    OverlayViewEarlyAccessComponent,
    OverlayViewYoutubeVideoComponent,
    PageComponent,
    OverlayViewApiVideoComponent,
    OverlayViewVimeoVideoComponent,
    ModalComponent,
    FooterTwoComponent
  ],
  entryComponents: [
    OverlayComponent,
    OverlayViewComponent,
    OverlayViewLoginComponent,
    ModalComponent
  ]
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [

  //     ]
  //   };
  // }
}
