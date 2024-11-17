// import {
//   HttpInterceptor,
//   HttpInterceptorFn,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
// } from '@angular/common/http';

// export const tokenHttpinterceptor: HttpInterceptorFn = (req, next) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     req = req.clone({
//       setHeaders: {
//         Authorization: token,
//       },
//     });
//   }
//   return next(req);
// };
