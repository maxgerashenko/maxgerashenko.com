import { Component, VERSION, ɵSafeHtml } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const googleAnalitics = `<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
  import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js';
import { DomSanitizer } from '@angular/platform-browser';
  // TODO: Add SDKs for Firebase products that you want to use
  https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyDl9RF_osari1kfPwB_7P7577eHfGC7Vvw',
    authDomain: 'maxgerashenkocom.firebaseapp.com',
    projectId: 'maxgerashenkocom',
    storageBucket: 'maxgerashenkocom.appspot.com',
    messagingSenderId: '392261338644',
    appId: '1:392261338644:web:743d92947ce232d96e0901',
    measurementId: 'G-17WSZ4T33M',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>`;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  html: ɵSafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.html = sanitizer.bypassSecurityTrustHtml(googleAnalitics);
  }
}
