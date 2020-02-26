import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiModalComponent implements OnInit {
  @Input() dialogClass: string;
  @Input() hideHeader = false;
  @Input() hideFooter = false;
  @Input() containerClick = true;
  public visible = false;
  public visibleAnimate = false;

  content: any[];
  formInput: HTMLInputElement;

  constructor() { }

  ngOnInit() {
  }

  public show(content: any, input: HTMLInputElement): void {
    this.content = content;
    this.formInput = input;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
    document.querySelector('body').classList.add('modal-open');
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    document.querySelector('body').classList.remove('modal-open');
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal') && this.containerClick === true) {
      this.hide();
    }
  }

}
