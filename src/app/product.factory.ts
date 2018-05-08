import { RealProductService } from './real-product.service';
import { MockProductService } from './mock-product.service';
import { HttpClient } from '@angular/common/http';

export function productServiceFactory(isProd: boolean) {
  if (isProd) {
    return new RealProductService();
  } else {
    return new MockProductService();
  }
}
