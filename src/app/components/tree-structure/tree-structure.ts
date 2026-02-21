import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';

@Component({
  selector: 'app-tree-structure',
  imports: [TreeModule, ButtonModule],
  templateUrl: './tree-structure.html',
  styleUrl: './tree-structure.scss',
})
export class TreeStructure {
  selectedNode: any;
  selectedNodes: any[] = [];
  files = [
    {
      label: 'Documents',
      icon: 'pi pi-folder',
      children: [
        { label: 'Resume.pdf', icon: 'pi pi-file' },
        { label: 'Invoice.doc', icon: 'pi pi-file' }
      ]
    },
    {
      label: 'Images',
      icon: 'pi pi-folder',
      children: [
        { label: 'photo1.png', icon: 'pi pi-image' },
        { label: 'photo2.jpg', icon: 'pi pi-image' }
      ]
    }
  ]; 

  // files = [
  //   {
  //     label: 'Folder',
  //     expandedIcon: 'pi pi-folder-open',
  //     collapsedIcon: 'pi pi-folder',
  //     children: [
  //       { label: 'File', icon: 'pi pi-file' }
  //     ]
  //   }
  // ];
  
  expandAll() {
    this.files.forEach(node => this.expandRecursive(node, true));
  }

  collapseAll() {
    this.files.forEach(node => this.expandRecursive(node, false));
  }

  expandRecursive(node: any, expand: boolean) {
    node.expanded = expand;
    if (node.children) {
      node.children.forEach((child: any) => this.expandRecursive(child, expand));
    }
  }

  loadNodes(event: any) {
    const node = event.node;

    node.children = [
      { label: 'Loaded File 1', icon: 'pi pi-file' },
      { label: 'Loaded File 2', icon: 'pi pi-file' }
    ];
  }
}
