import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable()
export class Global {
  public env: any = environment;

  constructor(public toaster: ToastrService, private router: Router) {
  }

  ngOnInit(): void { }

  public trimString(string: string, length: number) {
    if (string == null) {
      return string;
    } else {
      return string.length > length ?
        string.substring(0, length - 3) + "..." :
        string;
    }
  }

  public bytesToMegaBytes(bytes: number): number {
    return bytes / (1024 * 1024);
  }

  // public dateToTimeAgo(date: Date): string | null {
  //   return date ? moment(date).utc(true).fromNow() : null;
  // }

  public getCurrentDate() {
    return new Date();
  }

  checkStringContainsURL(string: string): boolean {
    if (string == "" || string == " ") {
      return false;
    }
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  }

  getDomainFromURL(url: string): string | null {
    return url ? new URL(url).hostname : null;
  }

  truncate(str: string, n: number, useWordBoundary: boolean): string {
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n - 1);
    return (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString);
  };

  isEmptyObject(obj: any): boolean {
    return (obj && (Object.keys(obj).length === 0));
  }

}
