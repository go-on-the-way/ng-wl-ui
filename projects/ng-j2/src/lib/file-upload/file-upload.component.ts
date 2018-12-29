import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'j2-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  private uploadFileManage: any;
  public valid: boolean;
  @Input() maxSize: number; // 单位M-最大允许传输的值
  @Input() style: string;
  @Input() tipText: string;
  @Input() name: string;
  @Input() accept: string;
  @Input() files: Array<any>;
  @Output() filesChange = new EventEmitter<any>();
  @Output() deleteFileEvt = new EventEmitter<any>();

  constructor(private el: ElementRef) {
    this.init();
  }

  ngOnInit() {
  }

  /**
   * 初始化
   */
  private init() {
    this.tipText = '上传';
    this.name = 'file';
    this.accept = '*';
    this.valid = false;
    this.files = [];
    this.uploadFileManage = {};
  }

  /**
   * 检测文件选择框变化
   */
  public fileChange(event) {
    if (event.target && event.target.files && event.target.files[0]) {
      if (this.uploadFileManage[event.target.files[0].name]) {// 文件去重
        console.log('该文件已存在');
        return false;
      }
      this.files.push({
        file: event.target.files[0],
        name: event.target.files[0].name
      });
      this.uploadFileManage[event.target.files[0].name] = event.target.files[0];

      this.filesChange.emit(this.files); // 将数据传到父级组件
      this.clearUploadInput();
    }

    if (this.files && this.files.length > 0) {
      this.valid = true;
    } else {
      this.valid = false;
    }

  }

  /**
   * 删除文件
   */
  public deleteFile(index, name) {
    this.deleteFileEvt.emit(this.files.splice(index, 1)[0]);
    if (this.uploadFileManage[name]) {
      delete this.uploadFileManage[name];
    }
    this.filesChange.emit(this.files); // 将数据传到父级组件
  }

  /**
   * 清除文件
   */
  public clearUploadInput() {
    this.el.nativeElement.querySelector('.file-input').value = '';
  }

  /**
   * 还原
   */
  public reset() {
    this.init();
  }

}
