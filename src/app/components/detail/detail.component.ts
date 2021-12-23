import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/models/detail.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  detail: Detail;
  panelOpenState: boolean = false;

  constructor(
    private listService: ListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('identifier --> ', identifier);

    this.listService.getDetailByID(identifier).subscribe((detail) => {
      if (!detail) {
        return this.router.navigateByUrl('/');
      }

      this.detail = detail;
      console.log('Detail -->', this.detail);
    });
  }
}
