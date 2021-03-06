import { HTTP_INTERCEPTORS } from "@angular/common/http";

// Interceptors
import { RequestInterceptor } from "./request.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
];
