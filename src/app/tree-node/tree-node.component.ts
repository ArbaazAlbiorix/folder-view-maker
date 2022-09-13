import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input() totalTrees: any;
  type: string  = '';
  showButtons: boolean = false;
  childId: string = '';
  showChildFormFields: boolean = false;
  showIcons: boolean = false;
  id: string = '';

  constructor() { }

  childFileName = new  FormControl('', Validators.required);
  
  ngOnInit(): void {}

  showChilderenButtons(childData: any): void {
    this.showButtons = true;
    this.childId =  childData.id;
  }

  addChilderen(childData: any): void{
    this.childFileName.markAsTouched();
    
    if(!this.childFileName.errors){
      childData.children?.push({
        name: this.childFileName.value,
        type: (this.type) as 'folder' | 'file',
        id: new Date().getTime().toString(),
        children: []
      });
  
      this.showChildFormFields = false
      this.showButtons = false;
      this.childFileName.reset();
    }
  }

  delete(): void {
    this.showChildFormFields  = false;
    this.childFileName.reset();
  }

  
  addType(file: string): void{
    this.type = file;
    this.showButtons = false;
    this.showChildFormFields = true;
  }

  removeChidren(childData: any): void{
    const index = this.totalTrees.findIndex(function (value: any) {
      return value.id === childData.id;
    });

    this.totalTrees.splice(index, 1);
  }
}
