import { NgModule } from '@angular/core';

import { SharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { TranslateDirective } from './language/translate.directive';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { DurationPipe } from './date/duration.pipe';
import { FormatMediumDatetimePipe } from './date/format-medium-datetime.pipe';
import { FormatMediumDatePipe } from './date/format-medium-date.pipe';
import { SortByDirective } from './sort/sort-by.directive';
import { SortDirective } from './sort/sort.directive';
import { ItemCountComponent } from './pagination/item-count.component';
import { FilterComponent } from './filter/filter.component';
import { PageOneComponent } from '../layouts/page-one/page-one.component';
import { PageTwoComponent } from '../layouts/page-two/page-two.component';
import { PageThreeComponent } from '../layouts/page-three/page-three.component';
import { PageImpressComponent } from '../layouts/page-impress/page-impress.component';
import { PageHeaderComponent } from "../biblio/page-header/page-header.component";
import { PageQuoteComponent } from "../biblio/page-quote/page-quote.component";
import { OpenComponent } from "../biblio/open/open.component";
import { GmapComponent } from "../biblio/gmap/gmap.component";
import { SocialMediaComponent } from "../biblio/social-media/social-media.component";
import { CommunicationComponent } from "../biblio/communication/communication.component";
import { Gallery01Component } from "../biblio/gallery01/gallery01.component";
import { Gallery02Component } from "../biblio/gallery02/gallery02.component";
import { Gallery03Component } from "../biblio/gallery03/gallery03.component";
import { Gallery04Component } from "../biblio/gallery04/gallery04.component";
import { Gallery05Component } from "../biblio/gallery05/gallery05.component";
import { Gallery06Component } from "../biblio/gallery06/gallery06.component";
import { SeparatorComponent } from "../biblio/separator/separator.component";
import { Shop01Component } from "../biblio/shop01/shop01.component";
import { Shop02Component } from "../biblio/shop02/shop02.component";
import { Shop03Component } from "../biblio/shop03/shop03.component";
import { Shop04Component } from "../biblio/shop04/shop04.component";
import { List01Component } from "../biblio/list01/list01.component";
import { MediaBalloonComponent } from "../biblio/media-balloon/media-balloon.component";
import { AdditiveComponent } from "../biblio/additive/additive.component";
import { ProductList01Component } from "../biblio/product-list01/product-list01.component";
import { PolaroidComponent } from "../biblio/polaroid/polaroid.component";

@NgModule({
  imports: [SharedLibsModule],
  declarations: [
    FindLanguageFromKeyPipe,
    TranslateDirective,
    AlertComponent,
    AlertErrorComponent,
    HasAnyAuthorityDirective,
    DurationPipe,
    FormatMediumDatetimePipe,
    FormatMediumDatePipe,
    SortByDirective,
    SortDirective,
    ItemCountComponent,
    FilterComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageImpressComponent,
    PageHeaderComponent,
    PageQuoteComponent,
    OpenComponent,
    GmapComponent,
    SocialMediaComponent,
    CommunicationComponent,
    SeparatorComponent,
    Gallery01Component,
    Gallery02Component,
    Gallery03Component,
    Gallery04Component,
    Gallery05Component,
    Gallery06Component,
    Shop01Component,
    Shop02Component,
    Shop03Component,
    Shop04Component,
    List01Component,
    MediaBalloonComponent,
    AdditiveComponent,
    ProductList01Component,
    PolaroidComponent,
  ],
  exports: [
    SharedLibsModule,
    FindLanguageFromKeyPipe,
    TranslateDirective,
    AlertComponent,
    AlertErrorComponent,
    HasAnyAuthorityDirective,
    DurationPipe,
    FormatMediumDatetimePipe,
    FormatMediumDatePipe,
    SortByDirective,
    SortDirective,
    ItemCountComponent,
    FilterComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageImpressComponent,
    PageHeaderComponent,
    PageQuoteComponent,
    OpenComponent,
    GmapComponent,
    SocialMediaComponent,
    CommunicationComponent,
    SeparatorComponent,
    Gallery01Component,
    Gallery02Component,
    Gallery03Component,
    Gallery04Component,
    Gallery05Component,
    Gallery06Component,
    Shop01Component,
    Shop02Component,
    Shop03Component,
    Shop04Component,
    List01Component,
    MediaBalloonComponent,
    AdditiveComponent,
    ProductList01Component,
    PolaroidComponent,
  ],
})
export class SharedModule {}
