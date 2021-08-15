import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {filter, map, shareReplay} from 'rxjs/operators';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthService} from "../utils/auth.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  showMenu = true;
  isMobile = false;

  // @ViewChild('loaderDialog')
  // loadingDialog: TemplateRef<any>;
  //
  // dialogRef: MatDialogRef<any, any>;
  // environment = environment;
  //

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private router: Router,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.isHandset$.subscribe((val) => {
    });
    // this.showMenu = true;
  }


  async ngOnInit(): Promise<any> {

  }


  closeDrawer(drawer: { close: () => void; }, url?: any): void {
    if (this.isMobile) {
      drawer.close();
    }
  }

}
