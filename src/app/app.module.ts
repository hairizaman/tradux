import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, createStore } from 'redux';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { rootReducer, AppState } from './reducers';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { TransactionLogComponent } from './transaction-log/transaction-log.component';

const appStore: Store<AppState> = createStore(rootReducer);

export const firebaseConfig = {
  apiKey: "AIzaSyAdKPKsXBOJX-Inx_NCsMYGCyGUGG7tU2E",
  authDomain: "tradux-fa630.firebaseapp.com",
  databaseURL: "https://tradux-fa630.firebaseio.com",
  storageBucket: ""
};

@NgModule({
  declarations: [
    AppComponent,
    OrderFormComponent,
    OrderBookComponent,
    TransactionLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    { provide: 'AppStore', useValue: appStore }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
