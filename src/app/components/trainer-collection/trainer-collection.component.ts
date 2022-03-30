import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-trainer-collection',
  templateUrl: './trainer-collection.component.html',
  styleUrls: ['./trainer-collection.component.scss']
})
export class TrainerCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
