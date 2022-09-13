import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { NodeModel } from '../models/nodeModel';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  totalTrees: NodeModel[] = [];
  showParentFormFields: boolean = false;
  fileName = new  FormControl('', Validators.required);

  constructor() { 
  }  

  ngOnInit(): void {
  }

  addNodesData(): void {
    this.showParentFormFields = true;
    this.fileName.reset();
  }

  addNodes(): void {
    this.fileName.markAsTouched();
    if(!this.fileName.errors) {
      this.totalTrees.push(
        {
          name: (this.fileName.value) as string,
          type: 'folder',
          id: new Date().getTime().toString(),
          children: []
        }
      )
      
      this.showParentFormFields = false;
      this.fileName.reset();
    }
  }

  delete(): void {
    this.showParentFormFields = false;
    this.fileName.reset();
  }

}


 