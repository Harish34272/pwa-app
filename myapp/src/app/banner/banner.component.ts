import { Component , OnInit , Inject , PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser , CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{
  isOnline: boolean = true;
  showBanner: boolean = true;
  private isBrowser : boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
    window.addEventListener('online', () => this.isOnline = true);
    window.addEventListener('offline', () => this.isOnline = false);
  }
}
closeBanner(): void {
  this.showBanner = false;
}
}
